from PIL import Image, ImageDraw
from pathlib import Path

S = 512
im = Image.new("RGBA", (S, S), (7, 25, 55, 255))
p = im.load()
for y in range(S):
    for x in range(S):
        t = (x+y)/(2*S)
        p[x,y] = (int(5+5*t), int(28+40*t), int(62+68*t), 255)
mask = Image.new("L",(S,S),0)
ImageDraw.Draw(mask).rounded_rectangle((8,8,504,504),radius=104,fill=255)
im.putalpha(mask)
d=ImageDraw.Draw(im)
d.rounded_rectangle((28,28,484,484),radius=82,outline=(68,190,255,210),width=7)
# 3D printer frame and print head
d.rounded_rectangle((112,104,400,368),radius=24,outline=(92,205,255,255),width=24)
d.rounded_rectangle((142,134,370,350),radius=13,outline=(22,113,185,255),width=12)
d.line((112,104,400,104),fill=(130,225,255,255),width=22)
d.line((256,104,256,174),fill=(130,225,255,255),width=20)
d.rounded_rectangle((214,155,298,222),radius=15,fill=(14,83,145,255),outline=(114,218,255,255),width=8)
d.polygon([(238,220),(274,220),(256,255)],fill=(255,190,65,255))
for i in range(5):
    yy=316-i*17
    d.line((190+i*3,yy,322-i*3,yy),fill=(45,205,240,255),width=9)
d.line((190,316,190,264),fill=(45,205,240,255),width=8)
d.line((322,316,322,264),fill=(45,205,240,255),width=8)
# filament spool
d.rounded_rectangle((48,285,150,390),radius=25,fill=(7,65,112,255),outline=(255,173,58,255),width=12)
d.ellipse((72,309,126,363),fill=(8,30,59,255),outline=(255,198,92,255),width=10)
d.ellipse((89,326,109,346),fill=(255,191,73,255))
# profit arrow and coins
d.line((326,284,370,238,408,258,458,188),fill=(255,190,56,255),width=19,joint="curve")
d.polygon([(435,190),(466,177),(461,210)],fill=(255,190,56,255))
for yy in (330,354,378):
    d.ellipse((375,yy,456,yy+29),fill=(255,190,56,255),outline=(255,225,145,255),width=4)
    d.rectangle((375,yy+12,456,yy+23),fill=(218,139,25,255))
d.ellipse((76,74,94,92),fill=(174,235,255,255))
d.ellipse((420,86,432,98),fill=(174,235,255,255))
im=im.resize((256,256),Image.Resampling.LANCZOS)
im.save(Path(__file__).with_name("print-cost-profit.ico"),format="ICO",sizes=[(16,16),(24,24),(32,32),(48,48),(64,64),(128,128),(256,256)])
