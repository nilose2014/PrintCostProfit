#!/usr/bin/env python3
"""Snapmaker Orca post-processing bridge for Linux; creates integrated HTML from G-code."""
from __future__ import annotations
import argparse, base64, json, re, sys
from pathlib import Path

ROOT=Path(__file__).resolve().parent.parent
HTML_SOURCE=ROOT/'Print_Cost_Profit.html'
HTML_TARGET=ROOT/'Print_Cost_Profit_Integrado.html'

def find_line(text, pattern):
    m=re.search(pattern,text,re.I|re.M)
    return m.group(1).strip() if m else ''

def number(value):
    try: return float(str(value).strip().replace(',','.'))
    except (TypeError,ValueError): return 0.0

def hours_from_text(value):
    m=re.fullmatch(r'\s*(?:(\d+)d\s*)?(?:(\d+)h\s*)?(?:(\d+)m\s*)?(?:(\d+)s)?\s*',value or '',re.I)
    if not m: return 0.0
    d,h,mi,sec=(number(x or 0) for x in m.groups())
    return d*24+h+mi/60+sec/3600

def thumbnail_from_text(text):
    best=''; area=0
    for m in re.finditer(r'(?im)^;\s*thumbnail(?:\s+begin)?\s+(\d+)x(\d+)(?:\s+\d+)?\s*\r?\n([\s\S]*?)^;\s*thumbnail\s+end\s*$',text):
        w,h=int(m.group(1)),int(m.group(2)); current=w*h
        if current<=area: continue
        b64=''.join(re.sub(r'^;\s?','',line).strip() for line in m.group(3).splitlines())
        try: raw=base64.b64decode(b64,validate=True)
        except Exception: continue
        mime='image/png' if raw.startswith(b'\x89PNG') else 'image/jpeg' if raw.startswith(b'\xff\xd8') else 'image/webp' if raw.startswith(b'RIFF') and raw[8:12]==b'WEBP' else ''
        if mime: best=f'data:{mime};base64,{b64}'; area=current
    return best

def parse_gcode(path: Path):
    text=path.read_text(encoding='utf-8-sig',errors='replace')
    raw_name=path.name
    base=re.sub(r'(?i)\.gcode\.pp$','',raw_name)
    base=re.sub(r'(?i)\.(gcode|gco|gc|pp)$','',base)
    temporary=bool(re.match(r'(?i)^\.?\d+(?:\.\d+)+\.gcode(?:\.pp)?$',raw_name) or re.match(r'^\.?\d+(?:\.\d+)+$',raw_name))
    project=find_line(text,r'^;\s*(?:project_name|project name|model_name|model name|object name|print name|plate_name|plate name)\s*[:=]\s*(.+)$')
    if project and not re.search(r'(?i)\.gcode(?:\.pp)?$|^\.?\d+(?:\.\d+)+$',project): base=project
    elif temporary or re.match(r'^\.?\d+(?:\.\d+)+$',base): base=''
    if not base:
        objects=re.findall(r'(?im)^;\s*printing object\s+(.+?)\s+id:',text)
        objects=[re.sub(r'\.(stl|3mf|obj|amf)$','',x.strip(),flags=re.I) for x in objects]
        if objects: base=max(objects,key=len)
    if not base: base='Pieza importada'
    time_text=find_line(text,r'^;\s*estimated printing time(?:\s*\([^)]*\))?\s*=\s*(.+)$')
    if not time_text: time_text=find_line(text,r'^;\s*(?:total estimated time|model printing time)\s*[:=]\s*(.+)$')
    hours=hours_from_text(time_text)
    if hours<=0:
        tm=re.search(r'(?i)(?:(\d+)h)?(\d+)m(?:(\d+)s)?',base)
        if tm:
            h,mi,sec=(number(x or 0) for x in tm.groups()); hours=h+mi/60+sec/3600; time_text='detectado del nombre del archivo'
    weights_line=find_line(text,r'^;\s*filament used\s*\[g\]\s*=\s*(.+)$')
    weights=[number(x) for x in re.split(r'[,;]',weights_line)] if weights_line else []
    if not any(x>0 for x in weights):
        total=find_line(text,r'^;\s*total filament used\s*\[g\]\s*=\s*([\d.,]+)')
        weights=[number(total)] if total else []
    def split_meta(pattern, delimiters=r'[;,]'):
        value=find_line(text,pattern)
        return [x.strip() for x in re.split(delimiters,value)] if value else []
    types=split_meta(r'^;\s*filament_type\s*=\s*(.+)$') or split_meta(r'^;\s*filament type\s*=\s*(.+)$')
    colors=split_meta(r'^;\s*filament_colour\s*=\s*(.+)$')
    prices=[number(x) for x in split_meta(r'^;\s*filament_cost\s*=\s*(.+)$',r'[,;]')]
    vendors=split_meta(r'^;\s*filament_vendor\s*=\s*(.+)$')
    profiles=split_meta(r'^;\s*filament_settings_id\s*=\s*(.+)$')
    names={'000000':'Negro','FFFFFF':'Blanco','FF0000':'Rojo','00FF00':'Verde','0000FF':'Azul','FFFF00':'Amarillo','FF00FF':'Magenta','FF80C0':'Rosa','FFC0CB':'Rosa','9D2235':'Burdeos','800000':'Granate','808080':'Gris','C0C0C0':'Gris plata','A52A2A':'Marrón','FFA500':'Naranja','FF8000':'Naranja','800080':'Morado','A020F0':'Púrpura','00FFFF':'Cian','008000':'Verde oscuro','000080':'Azul marino','F5F5DC':'Beige','FFD700':'Dorado','F5F5F5':'Blanco roto'}
    filaments=[]
    for i,g in enumerate(weights):
        if g<=0: continue
        material=types[i] if i<len(types) and types[i].lower()!='nil' else ''
        color=colors[i] if i<len(colors) and colors[i].lower()!='nil' else ''
        color_name=names.get(color.strip().lstrip('#').upper(),'Color personalizado') if color else ''
        label=' · '.join(x for x in (material,(color_name+' ('+color.upper()+')') if color else '') if x) or f'Filamento T{i}'
        filaments.append({'name':label,'material':material,'brand':vendors[i] if i<len(vendors) and vendors[i].lower()!='nil' else '', 'profile':profiles[i] if i<len(profiles) and profiles[i].lower()!='nil' else '', 'color':color,'grams':round(g,3),'price':prices[i] if i<len(prices) and prices[i]>0 else 20.0,'tool':i})
    return {'source':'Snapmaker Orca · integración local','filename':(base+'.gcode') if temporary else raw_name,'pieceName':base,'hours':round(hours,8),'timeText':time_text,'filaments':filaments,'fullPath':str(path.resolve()),'thumbnailData':thumbnail_from_text(text),'layers':find_line(text,r'^;\s*total layer number\s*:\s*(.+)$'),'maxZHeight':find_line(text,r'^;\s*max_z_height\s*:\s*(.+)$'),'filamentDiameter':find_line(text,r'^;\s*filament_diameter\s*:\s*(.+)$'),'filamentDensity':find_line(text,r'^;\s*filament_density\s*:\s*(.+)$'),'machine':find_line(text,r'^;\s*(?:printer_model|printer_settings_id|machine_name)\s*[:=]\s*(.+)$'),'integrationVersion':'1.73'}

def main():
    parser=argparse.ArgumentParser(description='Importa metadatos y miniatura de un G-code de Orca en Print Cost & Profit.')
    parser.add_argument('gcode',help='Ruta del archivo G-code que entrega Orca')
    args=parser.parse_args(); source=Path(args.gcode).expanduser()
    if not source.is_file() or source.suffix.lower() not in ('.gcode','.gco','.gc','.pp') and not source.name.lower().endswith('.gcode.pp'):
        parser.error('No se recibió una ruta válida de G-code (.gcode, .gco, .gc o .gcode.pp).')
    if not HTML_SOURCE.is_file(): raise SystemExit(f'No se encuentra la calculadora: {HTML_SOURCE}')
    payload=parse_gcode(source)
    data=json.dumps(payload,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c').replace('>','\\u003e').replace('&','\\u0026')
    page=HTML_SOURCE.read_text(encoding='utf-8-sig')
    tag='<script>window.PCP_INTEGRATION_DATA = '+data+';</script>'
    if not re.search(r'(?i)</head>\s*<body',page): raise SystemExit('La página no contiene </head> seguido de <body>.')
    page=re.sub(r'(?i)</head>(?=\r?\n\s*<body)',lambda m:tag+m.group(0),page,count=1)
    HTML_TARGET.write_text(page,encoding='utf-8')
    print(f'G-code procesado: {source.name}')
    print(f'Filamentos detectados: {len(payload["filaments"])}')
    print(f'Tiempo estimado: {payload["hours"]:.4f} h')
    print(f'Miniatura: {"sí" if payload["thumbnailData"] else "no"}')
    print(f'HTML integrado: {HTML_TARGET}')
    return 0

if __name__=='__main__':
    try: raise SystemExit(main())
    except Exception as exc: print(f'ERROR de integración Orca: {exc}',file=sys.stderr); raise SystemExit(1)
