import importlib.util, tempfile, unittest
from pathlib import Path

ROOT=Path(__file__).resolve().parents[2]
SPEC=importlib.util.spec_from_file_location('pcp_orca_integration',ROOT/'linux'/'integracion_orca.py')
MOD=importlib.util.module_from_spec(SPEC); SPEC.loader.exec_module(MOD)

class OrcaIntegrationTests(unittest.TestCase):
    def test_gcode_metadata_and_thumbnail_absence(self):
        content='''; project_name = Pieza prueba\n; estimated printing time (normal mode) = 1h 33m 7s\n; filament used [g] = 12.5, 4.25\n; filament_type = PLA;PETG\n; filament_colour = #FF0000;#00FF00\n; filament_cost = 20,24\n; filament_vendor = MarcaA;MarcaB\n; total layer number: 120\n; max_z_height: 24.0\n'''
        with tempfile.TemporaryDirectory() as d:
            p=Path(d)/'pieza.gcode'; p.write_text(content,encoding='utf-8')
            result=MOD.parse_gcode(p)
        self.assertEqual(result['pieceName'],'Pieza prueba')
        self.assertAlmostEqual(result['hours'],1+33/60+7/3600,places=6)
        self.assertEqual(len(result['filaments']),2)
        self.assertEqual(result['filaments'][0]['brand'],'MarcaA')
        self.assertEqual(result['filaments'][1]['material'],'PETG')
        self.assertEqual(result['layers'],'120')
        self.assertEqual(result['thumbnailData'],'')

if __name__=='__main__': unittest.main()
