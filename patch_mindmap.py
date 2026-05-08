import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

h = open('C:/Users/PHUOC VINH/PVCFC-KNL/other-skills.js', 'r', encoding='utf-8').read()

NEW_MM = r"""mindmap: {
      nodes: [
        // ─ Root ─
        { id:'root',      x:530, y:294, w:250, h:72,  label:'VAN ĐIỀU KHIỂN\nControl Valve' },
        // ─ Category headers ─
        { id:'body_cat',  x:270, y:65,  w:185, h:46,  label:'THÂN VAN\n(Body Types)',     cat:'body', sub:'input' },
        { id:'act_cat',   x:270, y:500, w:185, h:46,  label:'ACTUATOR\n(Bộ dẫn động)',    cat:'act',  sub:'input' },
        { id:'pos_cat',   x:950, y:65,  w:195, h:46,  label:'POSITIONER\n& Phụ kiện',      cat:'pos',  sub:'input' },
        { id:'fs_cat',    x:950, y:500, w:195, h:46,  label:'FAIL-SAFE\n& Kết nối',         cat:'fs',   sub:'input' },
        // ─ Body leaves (left-top) ─
        { id:'globe',     x:10, y:18,  w:185, h:36, label:'Van cầu (Globe)\nLinear/Equal% · DA/RA',   cat:'body' },
        { id:'gate',      x:10, y:58,  w:185, h:36, label:'Van cổng (Gate)\nOn-off · Full-bore',       cat:'body' },
        { id:'ball',      x:10, y:98,  w:185, h:36, label:'Van bi (Ball)\nR&P · V-ball · 90°',         cat:'body' },
        { id:'butterfly', x:10, y:138, w:185, h:36, label:'Van bướm (Butterfly)\nTomoe · R&P · 90°',   cat:'body' },
        { id:'plug',      x:10, y:178, w:185, h:36, label:'Van nút (Plug)\n3-way · Xoay 90°',          cat:'body' },
        { id:'diaphm',    x:10, y:218, w:185, h:36, label:'Van màng (Diaphragm)\nAn toàn ăn mòn',      cat:'body' },
        { id:'check',     x:10, y:258, w:185, h:36, label:'Van 1 chiều (Check)\nThụ động · Không ACT', cat:'body' },
        // ─ Actuator leaves (left-bottom) ─
        { id:'spr',    x:10, y:400, w:185, h:36, label:'Màng/Lò xo (Spring)\nDA-657 · RA-667 · F/S tự nhiên', cat:'act', sub:'product' },
        { id:'rp',     x:10, y:440, w:185, h:36, label:'Rack & Pinion\n90° · Ball/Butt/Plug',                   cat:'act' },
        { id:'piston', x:10, y:480, w:185, h:36, label:'Piston Actuator\n≤10 bar · Lực lớn · FL',               cat:'act' },
        { id:'eh',     x:10, y:520, w:185, h:36, label:'Electrohydraulic\nGovernor máy nén · ms',                cat:'act' },
        { id:'mov',    x:10, y:560, w:185, h:36, label:'Motor (MOV)\nRotork · Auma · Biffi',                     cat:'act' },
        // ─ Positioner leaves (right-top) ─
        { id:'smart',  x:1215, y:18,  w:170, h:36, label:'Smart Positioner\nHART/FF · DVC6200 (NM)', cat:'pos', sub:'product' },
        { id:'ip',     x:1215, y:58,  w:170, h:36, label:'I/P Converter\n4-20mA → 3-15 psi',         cat:'pos' },
        { id:'pneu',   x:1215, y:98,  w:170, h:36, label:'Pneumatic Positioner\nFisher 3582',          cat:'pos' },
        { id:'reg',    x:1215, y:138, w:170, h:36, label:'Air Regulator\n67D/67C · Bench set',         cat:'pos' },
        { id:'boost',  x:1215, y:178, w:170, h:36, label:'Volume Booster\nFisher 2625',                 cat:'pos' },
        { id:'sv',     x:1215, y:218, w:170, h:36, label:'Solenoid Valve\n24VDC · De-energ=fail',       cat:'pos' },
        { id:'lsb',    x:1215, y:258, w:170, h:36, label:'Limit Switch Box\nDI Open/Close',             cat:'pos' },
        // ─ Fail-safe leaves (right-bottom) ─
        { id:'fc',   x:1215, y:435, w:170, h:36, label:'FC – Fail Close\nDA+ATO · RA+ATC',             cat:'fs' },
        { id:'fo',   x:1215, y:475, w:170, h:36, label:'FO – Fail Open\nDA+ATC · RA+ATO',              cat:'fs' },
        { id:'fl',   x:1215, y:515, w:170, h:36, label:'FL – Fail Last\nPiston + Lock-up valve',        cat:'fs' },
        { id:'t377', x:1215, y:555, w:170, h:36, label:'Trip Valve T-377\n2 Air Relay · Piston ACT',   cat:'fs' },
      ],
      edges: [
        // Root → categories (main branches)
        { from:'root', to:'body_cat', color:'cyan'   },
        { from:'root', to:'act_cat',  color:'orange' },
        { from:'root', to:'pos_cat',  color:'green'  },
        { from:'root', to:'fs_cat',   color:'amber'  },
        // Body → leaves
        { from:'body_cat', to:'globe',     color:'cyan' },
        { from:'body_cat', to:'gate',      color:'cyan' },
        { from:'body_cat', to:'ball',      color:'cyan' },
        { from:'body_cat', to:'butterfly', color:'cyan' },
        { from:'body_cat', to:'plug',      color:'cyan' },
        { from:'body_cat', to:'diaphm',    color:'cyan' },
        { from:'body_cat', to:'check',     color:'cyan' },
        // Actuator → leaves
        { from:'act_cat', to:'spr',    color:'orange' },
        { from:'act_cat', to:'rp',     color:'orange' },
        { from:'act_cat', to:'piston', color:'orange' },
        { from:'act_cat', to:'eh',     color:'orange' },
        { from:'act_cat', to:'mov',    color:'orange' },
        // Positioner → leaves
        { from:'pos_cat', to:'smart', color:'green' },
        { from:'pos_cat', to:'ip',    color:'green' },
        { from:'pos_cat', to:'pneu',  color:'green' },
        { from:'pos_cat', to:'reg',   color:'green' },
        { from:'pos_cat', to:'boost', color:'green' },
        { from:'pos_cat', to:'sv',    color:'green' },
        { from:'pos_cat', to:'lsb',   color:'green' },
        // Fail-safe → leaves
        { from:'fs_cat', to:'fc',   color:'amber' },
        { from:'fs_cat', to:'fo',   color:'amber' },
        { from:'fs_cat', to:'fl',   color:'amber' },
        { from:'fs_cat', to:'t377', color:'amber' },
        // Key pairings: body ↔ actuator (left-side vertical connections)
        { from:'globe', to:'spr',  color:'blue',   label:'DA/RA' },
        { from:'ball',  to:'rp',   color:'cyan',   label:'R&P'   },
        { from:'ball',  to:'mov',  color:'purple', label:'MOV', dashed:true },
      ],
      zones: [
        { x:0,   y:0,   w:475, h:350, label:'THÂN VAN (BODY)',       color:'amo'     },
        { x:0,   y:355, w:475, h:345, label:'ACTUATOR',               color:'esd'     },
        { x:930, y:0,   w:475, h:350, label:'POSITIONER & PHỤ KIỆN',  color:'urea'    },
        { x:930, y:355, w:475, h:345, label:'FAIL-SAFE & KẾT NỐI',   color:'granule' },
        { x:480, y:240, w:445, h:215, label:'',                       color:'mid'     },
      ],
      legend: [
        { label:'Thân van (Body)',          color:'#0891b2' },
        { label:'Actuator',                 color:'#dc2626' },
        { label:'Positioner & Phụ kiện',    color:'#047857' },
        { label:'Fail-safe & Kết nối',      color:'#d97706' },
      ]
    },
"""

# Find van section boundaries
vi = h.index('van:')
di = h.index('dien:', vi)
van_section = h[vi:di]

# Find mindmap block start/end within van section (relative to van_section)
mm_rel_start = van_section.index('mindmap:')
fc_rel_start = van_section.index('/* ─── FLASHCARDS')

# The mindmap block ends at the closing '},\n\n    ' before the flashcards comment
# The content between mindmap and flashcards comment
old_mm_block = van_section[mm_rel_start:fc_rel_start]

print(f'Old mindmap block: {len(old_mm_block)} chars')
print(f'End of old block: {repr(old_mm_block[-60:])}')

# Replace
new_h = h[:vi] + van_section[:mm_rel_start] + NEW_MM + '\n    ' + van_section[fc_rel_start:] + h[di:]

# Verify the replacement
vi2 = new_h.index('van:')
di2 = new_h.index('dien:', vi2)
new_van = new_h[vi2:di2]
mm2 = new_van.index('mindmap:')
fc2 = new_van.index('/* ─── FLASHCARDS')
new_mm_block = new_van[mm2:fc2]
print(f'New mindmap block: {len(new_mm_block)} chars')
print(f'New block starts: {repr(new_mm_block[:80])}')
print(f'New block ends: {repr(new_mm_block[-80:])}')

open('C:/Users/PHUOC VINH/PVCFC-KNL/other-skills.js', 'w', encoding='utf-8').write(new_h)
print('Done! other-skills.js updated.')
