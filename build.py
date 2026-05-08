import sys, io, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

css_raw = open('C:/Users/PHUOC VINH/PVCFC-KNL/tmp_css.txt', 'r', encoding='utf-8').read()
# Strip outer <style>, </style>, </head> tags that came from reference extraction
css_text = re.sub(r'^\s*<style>\s*', '', css_raw)
css_text = re.sub(r'\s*</style>\s*</head>\s*$', '', css_text)
layout_html = open('C:/Users/PHUOC VINH/PVCFC-KNL/tmp_layout.txt', 'r', encoding='utf-8').read()
nm_js = open('C:/Users/PHUOC VINH/PVCFC-KNL/tmp_js.txt', 'r', encoding='utf-8').read()

ref_lines = open('C:/Users/PHUOC VINH/Desktop/Claude_Project/Data/2.Reference_web/Tong_quan_nha_may_Dam_Ca_Mau.html', 'r', encoding='utf-8').readlines()
logo_line = ''
for l in ref_lines[789:808]:
    if 'data:image/png;base64' in l:
        logo_line = l.strip()
        # Swiss style: sharp corners, no shadow
        logo_line = logo_line.replace('border-radius:10px', 'border-radius:2px')
        logo_line = logo_line.replace('border-radius: 10px', 'border-radius:2px')
        import re as _re
        logo_line = _re.sub(r'box-shadow:[^;]+;?', '', logo_line)
        break

# Read OTHER_SKILLS from dedicated file (htdk + dien data)
other_skills_js = open('C:/Users/PHUOC VINH/PVCFC-KNL/other-skills.js', 'r', encoding='utf-8').read()
# Extract the content between 'const OTHER_SKILLS = {' and '};\n'
other_skills_content = re.search(r'const OTHER_SKILLS = \{(.*)\};', other_skills_js, re.DOTALL)
other_skills = other_skills_content.group(1).rstrip() if other_skills_content else ''

# Remove 'init();' from nm_js end
nm_js_mod = nm_js.rstrip()
if nm_js_mod.endswith('init();'):
    nm_js_mod = nm_js_mod[:-7].rstrip()

EXTRA_CSS = '''
/* ===== SKILL DROPDOWN ===== */
.skill-selector { display:flex; align-items:center; gap:8px; flex-shrink:0; }
.skill-dropdown { position:relative; }
.skill-dd-trigger { display:flex; align-items:center; gap:8px; padding:5px 10px 5px 13px; border-radius:2px; cursor:pointer; font-size:12px; font-weight:700; border:1px solid var(--border2); background:var(--bg3); color:var(--blue); transition:all 0.12s; min-width:210px; white-space:nowrap; }
.skill-dd-trigger:hover { border-color:var(--blue); }
.skill-dd-label { flex:1; }
.skill-dd-arrow { color:var(--text3); font-size:10px; transition:transform 0.15s; line-height:1; flex-shrink:0; }
.skill-dropdown.open .skill-dd-arrow { transform:rotate(180deg); }
.skill-dd-menu { position:absolute; top:calc(100% + 4px); left:0; min-width:230px; background:var(--card); border:1px solid var(--border2); border-radius:2px; box-shadow:0 8px 32px rgba(0,0,0,0.5); z-index:500; overflow:hidden; visibility:hidden; opacity:0; transform:translateY(-6px); transition:opacity 0.14s, transform 0.16s ease, visibility 0.14s; pointer-events:none; }
.skill-dropdown.open .skill-dd-menu { visibility:visible; opacity:1; transform:translateY(0); pointer-events:all; }
.skill-dd-scroll { overflow-y:auto; max-height:440px; padding:4px; scrollbar-width:thin; scrollbar-color:var(--border2) transparent; }
.skill-dd-item { display:flex; align-items:center; gap:9px; padding:7px 11px; cursor:pointer; font-size:12px; font-weight:500; color:var(--text2); border-radius:2px; transition:background 0.1s; border-left:2px solid transparent; }
.skill-dd-item:hover { background:var(--bg3); color:var(--text); }
.skill-dd-item.active { font-weight:700; background:rgba(59,130,246,0.1); border-left-color:var(--blue); }
.skill-dd-sep { height:1px; background:var(--border); margin:3px 4px; }

/* ===== POPUP MODAL (htdk/dien) ===== */
.popup-overlay { position:fixed; inset:0; z-index:1000; background:rgba(0,0,0,0.7); display:flex; align-items:center; justify-content:center; padding:20px; opacity:0; pointer-events:none; transition:opacity 0.18s; }
.popup-overlay.open { opacity:1; pointer-events:all; }
.popup-box { background:var(--card); border:1px solid var(--border2); border-radius:2px; width:100%; max-width:740px; max-height:88vh; overflow:hidden; display:flex; flex-direction:column; box-shadow:0 16px 48px rgba(0,0,0,0.6); transform:translateY(10px); transition:transform 0.18s ease; }
.popup-overlay.open .popup-box { transform:translateY(0); }
.popup-header { padding:20px 24px 16px; border-bottom:1px solid var(--border); display:flex; align-items:flex-start; gap:16px; flex-shrink:0; }
.popup-num { font-family:'JetBrains Mono',monospace; font-size:24px; font-weight:300; color:var(--border2); line-height:1; flex-shrink:0; padding-top:4px; }
.popup-title-block { flex:1; }
.popup-title { font-size:18px; font-weight:700; margin-bottom:4px; }
.popup-subtitle { font-size:12.5px; color:var(--text2); }
.popup-badge { font-size:10px; font-weight:700; padding:2px 9px; border-radius:2px; letter-spacing:0.04em; flex-shrink:0; }
.popup-close { width:32px; height:32px; border-radius:2px; border:1px solid var(--border2); background:var(--bg3); color:var(--text3); cursor:pointer; font-size:16px; display:flex; align-items:center; justify-content:center; transition:all 0.12s; flex-shrink:0; }
.popup-close:hover { background:var(--red); color:#fff; border-color:var(--red); }
.popup-body { padding:20px 24px 24px; overflow-y:auto; flex:1; scrollbar-width:thin; scrollbar-color:var(--border2) transparent; }
.popup-sections { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.popup-section { background:var(--bg3); border:1px solid var(--border); border-radius:2px; padding:12px 14px; }
.popup-section.full { grid-column:1/-1; }
.popup-section-label { font-size:9px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--text3); margin-bottom:8px; }
.popup-section-content { font-size:12.5px; color:var(--text2); line-height:1.75; }

/* ===== OTHER SKILLS ===== */
#other-container .other-cards-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(340px,1fr)); gap:12px; }
#other-container .card-preview { display:block !important; }
#other-container .fc-card { width:100%; max-width:600px; height:320px; cursor:pointer; position:relative; transform-style:preserve-3d; transition:transform 0.5s; border-radius:2px; margin:0 auto; }
#other-container .fc-card.flipped { transform:rotateY(180deg); }
#other-container .fc-face { position:absolute; inset:0; backface-visibility:hidden; border-radius:2px; padding:32px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; }
#other-container .fc-front { background:var(--card); border:1px solid var(--border2); }
#other-container .fc-back { background:var(--bg3); border:1px solid var(--border2); transform:rotateY(180deg); overflow-y:auto; text-align:left; align-items:stretch; }

/* ===== VAN/INSTRU SKILL – STRUCTURED BROWSE ===== */
.van-section { margin-bottom:24px; }
.van-sec-hdr { display:flex; align-items:center; gap:10px; padding:8px 0 10px; border-bottom:1px solid var(--border2); margin-bottom:12px; }
.van-sec-bar { width:3px; height:18px; border-radius:0; flex-shrink:0; }
.van-sec-title { font-size:11px; font-weight:800; letter-spacing:0.09em; text-transform:uppercase; color:var(--text); }
.van-sec-cnt { font-size:10.5px; color:var(--text3); margin-left:auto; }
.van-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:10px; }
.van-card { background:var(--card); border:1px solid var(--border); border-radius:2px; overflow:hidden; transition:border-color 0.15s; }
.van-card:hover { border-color:var(--blue); }
.van-card-hd { padding:11px 13px 8px; border-bottom:1px solid var(--border); display:flex; align-items:flex-start; gap:9px; }
.van-stt { font-family:'JetBrains Mono',monospace; font-size:18px; font-weight:300; line-height:1; flex-shrink:0; padding-top:3px; color:var(--border2); }
.van-name { font-size:13px; font-weight:700; line-height:1.3; margin-bottom:2px; color:var(--text); }
.van-vsub { font-size:10.5px; color:var(--text3); line-height:1.4; }
.van-badge { font-size:9px; font-weight:700; padding:2px 6px; border-radius:2px; flex-shrink:0; letter-spacing:0.02em; white-space:nowrap; }
.van-cells { padding:7px 9px; display:grid; grid-template-columns:1fr 1fr; gap:4px; }
.van-cell { background:var(--bg3); border:1px solid var(--border); border-radius:2px; padding:5px 7px; min-width:0; overflow:hidden; }
.van-cell.full { grid-column:1/-1; }
.van-cl { font-size:8px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--text3); margin-bottom:3px; }
.van-cv { font-size:11px; color:var(--text2); line-height:1.45; }
.van-cchips { display:flex; flex-wrap:wrap; gap:3px; padding-top:1px; }
.van-chip { display:inline-flex; align-items:center; padding:2px 6px; border-radius:2px; font-size:10px; font-weight:600; background:var(--bg2); border:1px solid var(--border2); color:var(--text2); line-height:1.5; white-space:nowrap; transition:all 0.12s; }
.van-chip.cpt { cursor:pointer; }
.van-chip.cpt:hover { background:rgba(59,130,246,0.12); border-color:rgba(59,130,246,0.4); color:var(--blue2); }
.van-chip.nc { cursor:default; }
.van-card-ft { padding:5px 11px; border-top:1px solid var(--border); display:flex; justify-content:flex-end; cursor:pointer; transition:background 0.12s; }
.van-card-ft:hover { background:var(--bg3); }
.van-card-ft span { font-size:10px; color:var(--text3); font-weight:600; }
.van-card-ft:hover span { color:var(--blue2); }

/* ===== LIGHT THEME — CARD CONTRAST ===== */
[data-theme="light"] .van-card { border-color: var(--border2); }
[data-theme="light"] .van-card-hd { border-bottom-color: var(--border2); }
[data-theme="light"] .van-stt { color: var(--text3); }
[data-theme="light"] .van-cl { color: var(--text2); }
[data-theme="light"] .van-cell { background: var(--bg2); border-color: var(--border2); }
[data-theme="light"] .van-chip { background: var(--card); border-color: var(--border2); color: var(--text); }
[data-theme="light"] .van-chip.cpt:hover { background: rgba(29,111,204,0.08); border-color: rgba(29,111,204,0.35); color: var(--blue); }
[data-theme="light"] .process-card { border-color: var(--border2); }
[data-theme="light"] .process-card:hover { border-color: var(--blue); }
[data-theme="light"] .card-num { color: var(--text2); background: var(--bg2); border-color: var(--border2); }
[data-theme="light"] .card-preview { border-top-color: var(--border2); color: var(--text2); }
[data-theme="light"] .sidebar { background: var(--bg2); border-right-color: var(--border2); }
[data-theme="light"] .sidebar-item:hover { background: var(--bg3); }
[data-theme="light"] .sidebar-item.active { background: rgba(29,111,204,0.08); border-left-color: var(--blue); }
'''

HEADER_HTML = f'''<header>
  <div class="header-inner">
    <div class="logo">
      {logo_line}
      <div class="logo-text">PVCFC <span>— Kiến thức nhà máy</span></div>
    </div>
    <div class="skill-selector">
      <span style="font-size:10.5px;color:var(--text3);letter-spacing:0.05em;font-weight:600;white-space:nowrap">KỸ NĂNG:</span>
      <div class="skill-dropdown" id="skillDropdown">
        <button class="skill-dd-trigger" id="skillDdTrigger" onclick="toggleSkillMenu()">
          <span class="skill-dd-label" id="skillDdLabel">🏭 Tổng quan nhà máy</span>
          <span class="skill-dd-arrow">▾</span>
        </button>
        <div class="skill-dd-menu">
          <div class="skill-dd-scroll">
            <div class="skill-dd-item active" data-skill="nhamay" onclick="pickSkill('nhamay')">🏭 Tổng quan nhà máy</div>
            <div class="skill-dd-item" data-skill="htdk" onclick="pickSkill('htdk')">🖥️ Hệ thống điều khiển</div>
            <div class="skill-dd-item" data-skill="dien" onclick="pickSkill('dien')">⚡ Điện &amp; PLC</div>
            <div class="skill-dd-item" data-skill="van" onclick="pickSkill('van')">🔧 Thiết bị chấp hành</div>
            <div class="skill-dd-item" data-skill="instru" onclick="pickSkill('instru')">📡 Thiết bị đo lường</div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-search" id="nm-search">
      <span class="search-icon">🔍</span>
      <input type="text" id="searchInput" placeholder="Tìm kiếm công đoạn, thiết bị, thông số..." oninput="onSearchInput(this.value)">
    </div>
    <div class="header-actions" id="nm-actions">
      <button class="btn btn-ghost" onclick="setMode('browse')">📚 Học</button>
      <button class="btn btn-ghost" onclick="setMode('pfd')">📐 PFD</button>
      <button class="btn btn-ghost" onclick="setMode('mindmap')">🗺️ Lưu đồ</button>
      <button class="btn btn-ghost" onclick="setMode('flashcard')">🃏 Flashcard</button>
      <button class="btn btn-primary" onclick="setMode('quiz')">🧪 Kiểm tra</button>
    </div>
    <div class="header-actions" id="other-actions" style="display:none">
      <button class="btn btn-ghost" onclick="otherSetMode('browse')">📚 Học</button>
      <button class="btn btn-ghost" onclick="otherSetMode('mindmap')">🗺️ Lưu đồ</button>
      <button class="btn btn-ghost" onclick="otherSetMode('flashcard')">🃏 Flashcard</button>
      <button class="btn btn-primary" onclick="otherSetMode('quiz')">🧪 Kiểm tra</button>
    </div>
    <button class="btn btn-ghost theme-toggle" id="themeToggle" onclick="toggleTheme()" title="Chuyển sáng / tối">☀️</button>
  </div>
</header>'''

OTHER_HTML = '''<!-- ===== HTDK / DIEN SKILLS ===== -->
<div id="other-container" style="display:none">
  <div class="layout">
    <aside class="sidebar" id="otherSidebar"></aside>
    <main class="main" id="otherMain">

      <div id="otherBrowseMode">
        <div class="view-controls" style="margin-bottom:20px">
          <div class="view-title" id="otherBrowseTitle">📚 Danh sách kiến thức</div>
          <div class="view-toggles">
            <button class="view-btn active" onclick="otherSetView('grid',this)">⊞ Thẻ</button>
            <button class="view-btn" onclick="otherSetView('list',this)">☰ Danh sách</button>
          </div>
        </div>
        <div id="otherCardsContainer" class="other-cards-grid"></div>
      </div>

      <div id="otherMindmapMode" style="display:none">
        <div class="view-controls" style="margin-bottom:16px">
          <div class="view-title" id="otherMindmapTitle">🗺️ Sơ đồ tổng quan</div>
          <div style="margin-left:auto;display:flex;gap:8px;align-items:center">
            <span style="font-size:12px;color:var(--text3)">Nhấn vào ô bất kỳ để xem chi tiết</span>
            <button class="btn btn-ghost" onclick="otherResetZoom()">🔄 Reset</button>
          </div>
        </div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:2px;padding:8px;overflow:hidden;position:relative">
          <div id="otherMmLegend" style="position:absolute;top:14px;left:14px;z-index:10;background:var(--bg);border:1px solid var(--border);border-radius:2px;padding:10px 12px;font-size:11px"></div>
          <div id="otherMmContainer" style="width:100%;height:700px;position:relative;cursor:grab;overflow:hidden">
            <svg id="otherMmSvg" width="1400" height="700" style="position:absolute;top:0;left:0;transform-origin:0 0">
              <defs>
                <marker id="oarr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/></marker>
                <marker id="oarr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/></marker>
                <marker id="oarr-amber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/></marker>
                <marker id="oarr-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6"/></marker>
                <marker id="oarr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#5a6e96"/></marker>
                <marker id="oarr-orange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ea580c"/></marker>
                <marker id="oarr-cyan" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#0891b2"/></marker>
                <filter id="oglow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <pattern id="ogrid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e5e7eb" stroke-width="0.5" opacity="0.6"/></pattern>
              <rect width="1400" height="700" fill="url(#ogrid)"/>
              <g id="o-zones"></g>
              <g id="o-connections"></g>
              <g id="o-nodes"></g>
              <g id="o-zone-labels"></g>
            </svg>
          </div>
          <div style="position:absolute;bottom:14px;right:14px;z-index:10;display:flex;flex-direction:column;gap:4px;background:var(--bg);border:1px solid var(--border);border-radius:2px;padding:6px">
            <button onclick="otherZoom(1.2)" style="width:32px;height:32px;background:var(--bg2);border:1px solid var(--border);color:var(--text);border-radius:2px;cursor:pointer;font-size:16px;font-weight:700">+</button>
            <button onclick="otherZoom(0.83)" style="width:32px;height:32px;background:var(--bg2);border:1px solid var(--border);color:var(--text);border-radius:2px;cursor:pointer;font-size:16px;font-weight:700">−</button>
          </div>
          <div style="position:absolute;bottom:14px;left:14px;z-index:10;background:var(--bg);border:1px solid var(--border);border-radius:2px;padding:8px 12px;font-size:11px;color:var(--text3)">💡 Kéo để di chuyển · Cuộn chuột để zoom</div>
        </div>
      </div>

      <div id="otherFlashcardMode" style="display:none">
        <div class="view-controls" style="margin-bottom:24px">
          <div class="view-title">🃏 Flashcard</div>
          <div style="margin-left:auto;display:flex;gap:8px">
            <select id="otherFcFilter" onchange="otherInitFlashcard()" style="background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:6px 10px;border-radius:6px;font-family:inherit;font-size:13px"></select>
            <button class="btn btn-ghost" onclick="otherInitFlashcard()">🔀 Trộn lại</button>
          </div>
        </div>
        <div style="perspective:1000px;max-width:600px;margin:0 auto">
          <div class="fc-card" id="otherFcCard" onclick="otherFlipCard()">
            <div class="fc-face fc-front">
              <div id="otherFcBadge" style="margin-bottom:16px"></div>
              <div style="font-size:12px;color:var(--text3);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.1em">Câu hỏi</div>
              <div id="otherFcNum" style="font-size:32px;font-weight:800;font-family:'JetBrains Mono',monospace;color:var(--border2);line-height:1"></div>
              <div id="otherFcQ" style="font-size:15px;font-weight:700;margin-top:12px;padding:0 10px;line-height:1.5"></div>
              <div style="margin-top:20px;font-size:12px;color:var(--text3)">👆 Nhấn để xem đáp án</div>
            </div>
            <div class="fc-face fc-back">
              <div id="otherFcA" style="font-size:14px;line-height:1.7;color:var(--text2)"></div>
            </div>
          </div>
        </div>
        <div style="display:flex;justify-content:center;align-items:center;gap:16px;margin-top:24px;max-width:600px;margin:24px auto 0">
          <button class="btn btn-ghost" onclick="otherNavigateFC(-1)">← Trước</button>
          <div id="otherFcProgress" style="font-size:13px;color:var(--text3);font-family:'JetBrains Mono',monospace"></div>
          <button class="btn btn-ghost" onclick="otherNavigateFC(1)">Tiếp →</button>
        </div>
      </div>

      <div id="otherQuizMode" style="display:none">
        <div class="view-controls" style="margin-bottom:24px">
          <div class="view-title">🧪 Kiểm tra kiến thức</div>
          <div style="margin-left:auto;display:flex;gap:8px">
            <select id="otherQuizFilter" style="background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:6px 10px;border-radius:6px;font-family:inherit;font-size:13px"></select>
            <button class="btn btn-primary" onclick="otherStartQuiz()">▶ Bắt đầu</button>
          </div>
        </div>
        <div id="otherQuizArea" style="max-width:700px"></div>
      </div>

    </main>
  </div>
</div>'''

POPUP_HTML = '''<div class="popup-overlay" id="popupOverlay" onclick="closePopup(event)">
  <div class="popup-box">
    <div class="popup-header">
      <div class="popup-num" id="popupNum"></div>
      <div class="popup-title-block">
        <div class="popup-title" id="popupTitle"></div>
        <div class="popup-subtitle" id="popupSubtitle"></div>
      </div>
      <span class="popup-badge" id="popupBadge"></span>
      <button class="popup-close" onclick="document.getElementById('popupOverlay').classList.remove('open');document.body.style.overflow=''">×</button>
    </div>
    <div class="popup-body" id="popupBody"></div>
  </div>
</div>'''

OTHER_JS = f'''
// ===================================================
// OTHER SKILLS DATA (HTDK & DIEN)
// ===================================================
const OTHER_SKILLS = {{
{other_skills}
}};

// ===================================================
// SKILL SWITCHING
// ===================================================
let currentSkillId = 'nhamay';
let otherCurrentSkill = 'htdk';
let otherCurrentFilter = 'all';
let otherSearchQuery = '';

function onSearchInput(val) {{
  if (currentSkillId === 'nhamay') {{
    handleSearch(val);
  }} else {{
    otherSearchQuery = val.toLowerCase().trim();
    if (otherCurrentMode === 'browse') {{
      {{const _skq=OTHER_SKILLS[otherCurrentSkill];if(_skq&&_skq.renderMode==='van')renderVanBrowse();else otherRenderCards();}}
    }}
  }}
}}
let otherCurrentView = 'grid';
let otherCurrentMode = 'browse';
let oMmZoom = 1, oMmPanX = 0, oMmPanY = 0;
let oFcCards = [], oFcIndex = 0, oFcFlipped = false;
let oQuizItems = [], oQuizIndex = 0, oQuizScore = 0;
let oMmInited = false;

function updateDropdownUI(skillId) {{
  const colors = {{nhamay:'#3b82f6',htdk:'#0891b2',dien:'#ea580c',van:'#7c3aed',instru:'#0891b2'}};
  const labels = {{nhamay:'🏭 Tổng quan nhà máy',htdk:'🖥️ Hệ thống điều khiển',dien:'⚡ Điện & PLC',van:'🔧 Thiết bị chấp hành',instru:'📡 Thiết bị đo lường'}};
  const color = colors[skillId] || '#3b82f6';
  const lbl = document.getElementById('skillDdLabel');
  if (lbl) lbl.textContent = labels[skillId] || skillId;
  const trig = document.getElementById('skillDdTrigger');
  if (trig) {{ trig.style.borderColor = color; trig.style.color = color; }}
  document.querySelectorAll('.skill-dd-item').forEach(i => {{
    const on = i.dataset.skill === skillId;
    i.classList.toggle('active', on);
    i.style.color = on ? color : '';
    i.style.background = on ? color + '14' : '';
  }});
}}
function toggleSkillMenu() {{
  document.getElementById('skillDropdown').classList.toggle('open');
}}
function pickSkill(skillId) {{
  document.getElementById('skillDropdown').classList.remove('open');
  switchSkill(skillId);
}}
document.addEventListener('click', e => {{
  if (!e.target.closest('#skillDropdown')) {{
    document.getElementById('skillDropdown').classList.remove('open');
  }}
}});

function switchSkill(skillId) {{
  currentSkillId = skillId;
  updateDropdownUI(skillId);
  const inp = document.getElementById('searchInput');
  if (inp) {{ inp.value = ''; }}
  otherSearchQuery = '';
  const phs = {{nhamay:'Tìm kiếm công đoạn, thiết bị, thông số...',htdk:'Tìm kiếm trong Hệ thống điều khiển...',dien:'Tìm kiếm trong Điện & PLC...',van:'Tìm kiếm trong Thiết bị chấp hành...',instru:'Tìm kiếm trong Thiết bị đo lường...'}};
  if (inp) inp.placeholder = phs[skillId] || 'Tìm kiếm...';
  if (skillId === 'nhamay') {{
    document.getElementById('nm-container').style.display = '';
    document.getElementById('other-container').style.display = 'none';
    document.getElementById('nm-actions').style.display = '';
    document.getElementById('other-actions').style.display = 'none';
    handleSearch('');
    setMode('browse');
  }} else {{
    document.getElementById('nm-container').style.display = 'none';
    document.getElementById('other-container').style.display = '';
    document.getElementById('nm-actions').style.display = 'none';
    document.getElementById('other-actions').style.display = '';
    otherCurrentSkill = skillId;
    otherCurrentFilter = 'all';
    oMmInited = false;
    oMmZoom = 1; oMmPanX = 0; oMmPanY = 0;
    otherBuildFilterSelects();
    otherRenderSidebar();
    otherSetMode('browse');
  }}
}}

function otherRenderSidebar() {{
  const skill = OTHER_SKILLS[otherCurrentSkill];
  let html = '<div class="sidebar-section"><div class="sidebar-label">' + skill.icon + ' ' + skill.name + '</div>';
  html += '<div class="sidebar-item ' + (otherCurrentFilter==='all'?'active':'') + '" data-cat="all" onclick="otherFilterCat(this.dataset.cat)" style="border-left-color:' + skill.color + '">';
  html += '<span class="sidebar-dot" style="background:' + skill.color + '"></span>Tất cả<span class="sidebar-number">' + skill.data.length + '</span></div></div>';
  skill.categories.forEach(cat => {{
    const count = skill.data.filter(d => d.cat === cat.id).length;
    const active = otherCurrentFilter === cat.id;
    html += '<div class="sidebar-section"><div class="sidebar-label">' + cat.name + '</div>';
    html += '<div class="sidebar-item ' + (active?'active':'') + '" data-cat="' + cat.id + '" onclick="otherFilterCat(this.dataset.cat)" style="' + (active?'border-left-color:'+cat.color:'') + '">';
    html += '<span class="sidebar-dot" style="background:' + cat.color + '"></span>' + cat.name + '<span class="sidebar-number">' + count + '</span></div></div>';
  }});
  document.getElementById('otherSidebar').innerHTML = html;
}}

function otherFilterCat(cat) {{
  otherCurrentFilter = cat;
  otherRenderSidebar();
  {{const _skr=OTHER_SKILLS[otherCurrentSkill];if(_skr&&_skr.renderMode==='van')renderVanBrowse();else otherRenderCards();}}
}}

function otherSetMode(mode) {{
  otherCurrentMode = mode;
  ['otherBrowseMode','otherMindmapMode','otherFlashcardMode','otherQuizMode'].forEach(id => {{
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }});
  if (mode==='browse') {{ document.getElementById('otherBrowseMode').style.display=''; const _sk=OTHER_SKILLS[otherCurrentSkill]; if(_sk&&_sk.renderMode==='van')renderVanBrowse();else otherRenderCards(); }}
  if (mode==='mindmap') {{ document.getElementById('otherMindmapMode').style.display=''; if(otherCurrentSkill==='van')renderVanMindmap();else otherRenderMindmap(); }}
  if (mode==='flashcard') {{ document.getElementById('otherFlashcardMode').style.display=''; otherBuildFilterSelects(); otherInitFlashcard(); }}
  if (mode==='quiz') {{ document.getElementById('otherQuizMode').style.display=''; otherBuildFilterSelects(); otherRenderQuizStart(); }}
}}

function otherSetView(v, btn) {{
  otherCurrentView = v;
  document.querySelectorAll('#otherMain .view-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  {{const _skr=OTHER_SKILLS[otherCurrentSkill];if(_skr&&_skr.renderMode==='van')renderVanBrowse();else otherRenderCards();}}
}}

function otherRenderCards() {{
  const skill = OTHER_SKILLS[otherCurrentSkill];
  let items = skill.data;
  if (otherCurrentFilter !== 'all') items = items.filter(d => d.cat === otherCurrentFilter);
  if (otherSearchQuery) items = items.filter(d =>
    d.name.toLowerCase().includes(otherSearchQuery) ||
    (d.sub  && d.sub.toLowerCase().includes(otherSearchQuery)) ||
    (d.goal && d.goal.toLowerCase().includes(otherSearchQuery))
  );
  const container = document.getElementById('otherCardsContainer');
  container.className = otherCurrentView === 'grid' ? 'other-cards-grid' : 'cards-list';
  document.getElementById('otherBrowseTitle').textContent = '📚 ' + skill.name;
  container.innerHTML = items.map(d => {{
    const cat = skill.categories.find(c => c.id === d.cat);
    const color = cat ? cat.color : skill.color;
    const catName = cat ? cat.name : '';
    return '<div class="process-card" data-sid="' + otherCurrentSkill + '" data-iid="' + d.id + '" onclick="openPopup(this.dataset.sid,+this.dataset.iid)">' +
      '<div class="card-header">' +
      '<span class="card-num">' + d.stt + '</span>' +
      '<div class="card-title-block"><div class="card-title">' + d.name + '</div><div class="card-subtitle">' + d.sub + '</div></div>' +
      '<span style="font-size:10.5px;font-weight:700;padding:2px 8px;border-radius:4px;background:' + color + '15;color:' + color + ';border:1px solid ' + color + '30;flex-shrink:0">' + catName + '</span>' +
      '<span style="font-size:12px;color:var(--text3);flex-shrink:0;margin-top:3px">↗</span>' +
      '</div><div class="card-preview">' + d.goal + '</div></div>';
  }}).join('');
}}

function openPopup(skillId, id) {{
  const skill = OTHER_SKILLS[skillId];
  const d = skill.data.find(x => x.id === id);
  if (!d) return;
  const cat = skill.categories.find(c => c.id === d.cat);
  const catColor = cat ? cat.color : skill.color;
  const catName = cat ? cat.name : '';
  document.getElementById('popupNum').textContent = d.stt;
  document.getElementById('popupTitle').textContent = d.name;
  document.getElementById('popupSubtitle').textContent = d.sub + (catName ? ' — ' + catName : '');
  const badge = document.getElementById('popupBadge');
  badge.textContent = catName;
  badge.style.cssText = 'background:' + catColor + '18;color:' + catColor + ';border:1px solid ' + catColor + '35;';
  document.getElementById('popupNum').style.color = catColor + '60';
  document.getElementById('popupBody').innerHTML =
    '<div class="popup-sections">' +
    '<div class="popup-section full"><div class="popup-section-label">🎯 MỤC TIÊU</div><div class="popup-section-content">' + fmtPopupDetail(d.goal) + '</div></div>' +
    '<div class="popup-section full"><div class="popup-section-label">📖 CHI TIẾT / NGUYÊN LÝ</div><div class="popup-section-content">' + fmtPopupDetail(d.detail||'') + '</div></div>' +
    (d.equip ? '<div class="popup-section"><div class="popup-section-label">⚙️ THIẾT BỊ</div><div class="popup-section-content">' + fmtPopupEquip(d.equip) + '</div></div>' : '') +
    (d.params ? '<div class="popup-section"><div class="popup-section-label">📊 THÔNG SỐ</div><div class="popup-section-content">' + fmtPopupParams(d.params) + '</div></div>' : '') +
    '</div>';
  document.getElementById('popupOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}}

function closePopup(e) {{
  if (e && e.target !== document.getElementById('popupOverlay')) return;
  document.getElementById('popupOverlay').classList.remove('open');
  document.body.style.overflow = '';
}}

document.addEventListener('keydown', e => {{
  if (e.key === 'Escape') {{ document.getElementById('popupOverlay').classList.remove('open'); document.body.style.overflow = ''; }}
}});

function openCatPopup(skId,cat,catLabel){{
  const sk=OTHER_SKILLS[skId];
  const catObj=sk.categories.find(c=>c.id===cat);
  const color=catObj?catObj.color:sk.color;
  const items=sk.data.filter(d=>d.cat===cat);
  const label=catLabel.replace('\\n',' — ');
  document.getElementById('popupNum').textContent='📂';
  document.getElementById('popupNum').style.color=color+'80';
  document.getElementById('popupTitle').textContent=label;
  document.getElementById('popupTitle').style.color='var(--text)';
  document.getElementById('popupSubtitle').textContent=(catObj?catObj.name+' · ':'')+items.length+' thiết bị trong nhóm';
  const badge=document.getElementById('popupBadge');
  badge.textContent=catObj?catObj.name:'';
  badge.style.cssText='background:'+color+'18;color:'+color+';border:1px solid '+color+'35;';
  const body=document.getElementById('popupBody');
  body.innerHTML='<div style="display:grid;gap:6px;padding-top:2px">'+
    items.map(d=>'<div class="cat-popup-item" data-sid="'+skId+'" data-iid="'+d.id+'" style="cursor:pointer;padding:10px 12px;background:var(--bg3);border:1px solid var(--border);border-left:3px solid '+color+';border-radius:2px">'+
      '<div style="font-weight:600;font-size:12px;color:var(--text)">'+d.stt+' · '+d.name+'</div>'+
      '<div style="font-size:11px;color:var(--text2);margin-top:3px">'+d.sub+'</div>'+
    '</div>').join('')+
  '</div>';
  body.querySelectorAll('.cat-popup-item').forEach(el=>{{
    el.addEventListener('click',()=>openPopup(el.dataset.sid,+el.dataset.iid));
    el.addEventListener('mouseenter',()=>{{el.style.background='var(--bg2)';}});
    el.addEventListener('mouseleave',()=>{{el.style.background='var(--bg3)';}});
  }});
  document.getElementById('popupOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}}

function otherRenderMindmap() {{
  const skill = OTHER_SKILLS[otherCurrentSkill];
  const mm = skill.mindmap;
  if (!mm) return;
  document.getElementById('otherMindmapTitle').textContent = '🗺️ ' + skill.name + ' — Sơ đồ tổng quan';
  let lgHtml = '<div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px;font-weight:700">Chú giải</div>';
  mm.legend.forEach(l => {{ lgHtml += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px"><span style="width:10px;height:10px;border-radius:2px;background:' + l.color + '"></span>' + l.label + '</div>'; }});
  document.getElementById('otherMmLegend').innerHTML = lgHtml;
  const zonesG=document.getElementById('o-zones'),zlG=document.getElementById('o-zone-labels'),connG=document.getElementById('o-connections'),nodesG=document.getElementById('o-nodes');
  const zc = {{
    amo:{{fill:'rgba(0,86,211,0.04)',stroke:'rgba(0,86,211,0.25)',text:'#0056d3'}},
    urea:{{fill:'rgba(4,120,87,0.04)',stroke:'rgba(4,120,87,0.25)',text:'#047857'}},
    granule:{{fill:'rgba(217,119,6,0.04)',stroke:'rgba(217,119,6,0.25)',text:'#d97706'}},
    aux:{{fill:'rgba(124,58,237,0.04)',stroke:'rgba(124,58,237,0.25)',text:'#7c3aed'}},
    esd:{{fill:'rgba(220,38,38,0.04)',stroke:'rgba(220,38,38,0.25)',text:'#dc2626'}},
    mid:{{fill:'rgba(0,0,0,0.02)',stroke:'rgba(0,0,0,0.08)',text:'#6b7280'}},
  }};
  zonesG.innerHTML = mm.zones.map(z => {{ const c=zc[z.color]||zc.mid; return '<rect x="'+z.x+'" y="'+z.y+'" width="'+z.w+'" height="'+z.h+'" rx="14" ry="14" fill="'+c.fill+'" stroke="'+c.stroke+'" stroke-width="1" stroke-dasharray="4 3"/>'; }}).join('');
  zlG.innerHTML = mm.zones.map(z => {{ const c=zc[z.color]||zc.mid; return '<text x="'+(z.x+14)+'" y="'+(z.y+22)+'" font-family="\\'IBM Plex Sans\\',sans-serif" font-size="11" font-weight="700" fill="'+c.text+'" letter-spacing="1.5">'+z.label+'</text>'; }}).join('');
  const cm={{blue:'#3b82f6',green:'#10b981',amber:'#f59e0b',purple:'#8b5cf6',gray:'#5a6e96',orange:'#ea580c',cyan:'#0891b2'}};
  function gn(id){{return mm.nodes.find(n=>n.id===id);}}
  function bp(f,t){{
    const fx=f.x+f.w/2,fy=f.y+f.h/2,tx=t.x+t.w/2,ty=t.y+t.h/2,dx=tx-fx,dy=ty-fy;
    let x1,y1,x2,y2;
    if(Math.abs(dx)>Math.abs(dy)){{if(dx>0){{x1=f.x+f.w;y1=fy;x2=t.x;y2=ty}}else{{x1=f.x;y1=fy;x2=t.x+t.w;y2=ty}}}}else{{if(dy>0){{x1=fx;y1=f.y+f.h;x2=tx;y2=t.y}}else{{x1=fx;y1=f.y;x2=tx;y2=t.y+t.h}}}}
    const isH=Math.abs(x2-x1)>Math.abs(y2-y1),mx=(x1+x2)/2,my=(y1+y2)/2;
    return {{d:'M '+x1+' '+y1+' C '+(isH?mx:x1)+' '+(isH?y1:my)+', '+(isH?mx:x2)+' '+(isH?y2:my)+', '+x2+' '+y2,mx,my}};
  }}
  connG.innerHTML = mm.edges.map(e=>{{
    const f=gn(e.from),t=gn(e.to);if(!f||!t)return'';
    const {{d,mx,my}}=bp(f,t),color=cm[e.color]||'#5a6e96',dash=e.dashed?'stroke-dasharray="5 4"':'';
    let lbl='';
    if(e.label){{lbl='<g><rect x="'+(mx-e.label.length*3-4)+'" y="'+(my-8)+'" width="'+(e.label.length*6+8)+'" height="16" rx="3" fill="rgba(255,255,255,0.95)" stroke="'+color+'" stroke-opacity="0.4"/><text x="'+mx+'" y="'+(my+3)+'" text-anchor="middle" font-family="\\'JetBrains Mono\\',monospace" font-size="9" fill="'+color+'" font-weight="600">'+e.label+'</text></g>';}}
    return '<g><path d="'+d+'" fill="none" stroke="'+color+'" stroke-width="1.8" '+dash+' marker-end="url(#oarr-'+e.color+')"/>' + lbl + '</g>';
  }}).join('');
  const cats={{}};
  skill.categories.forEach(c=>{{cats[c.id]=c.color;}});
  nodesG.innerHTML = mm.nodes.map(n=>{{
    const color=cats[n.cat]||skill.color;
    function h2r(h){{const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return{{r,g,b}};}}
    const rgb=h2r(color);
    const bg='rgba('+rgb.r+','+rgb.g+','+rgb.b+',0.08)';
    const ry=n.sub==='product'?12:n.sub==='input'?22:8;
    const lines=n.label.split('\\n');
    const lh=14,sy=n.y+n.h/2-((lines.length-1)*lh)/2+4;
    return '<g class="omm-node" data-skillid="'+otherCurrentSkill+'" data-nlabel="'+encodeURIComponent(lines[0])+'" data-nid="'+n.id+'" data-nsub="'+(n.sub||'')+'" data-ncat="'+(n.cat||'')+'"'+(n.dataId!=null?' data-dataid="'+n.dataId+'"':'')+' style="cursor:pointer">' +
      '<rect x="'+n.x+'" y="'+n.y+'" width="'+n.w+'" height="'+n.h+'" rx="'+ry+'" ry="'+ry+'" fill="'+bg+'" stroke="'+color+'" stroke-width="'+(n.sub==='product'?'2.5':'1.5')+'" '+(n.sub==='product'?'filter="url(#oglow)"':'')+'/>' +
      lines.map((line,i)=>'<text x="'+(n.x+n.w/2)+'" y="'+(sy+i*lh)+'" text-anchor="middle" font-family="\\'IBM Plex Sans\\',sans-serif" font-size="'+(i===0?'11.5':'10')+'" font-weight="'+(i===0?'700':'500')+'" fill="'+color+'">'+line+'</text>').join('') +
      '</g>';
  }}).join('');
  nodesG.querySelectorAll('.omm-node').forEach(el=>{{
    el.addEventListener('click',()=>{{
      const skId=el.getAttribute('data-skillid');
      const nsub=el.getAttribute('data-nsub')||'';
      const ncat=el.getAttribute('data-ncat')||'';
      const sk2=OTHER_SKILLS[skId];
      if(nsub==='input'){{
        openCatPopup(skId,ncat,decodeURIComponent(el.getAttribute('data-nlabel')));
        return;
      }}
      const did=el.getAttribute('data-dataid');
      if(did!==null&&did!==''){{openPopup(skId,+did);return;}}
      const lbl=decodeURIComponent(el.getAttribute('data-nlabel')).toLowerCase();
      const pool=ncat?sk2.data.filter(d=>d.cat===ncat):sk2.data;
      let match=null;
      for(let len=Math.min(lbl.length,12);len>=3&&!match;len=Math.max(3,len-2)){{
        const sub=lbl.substring(0,len);
        match=pool.find(d=>d.name.toLowerCase().includes(sub)||(d.sub&&d.sub.toLowerCase().includes(sub)));
      }}
      if(match)openPopup(skId,match.id);
    }});
    el.addEventListener('mouseenter',()=>{{connG.querySelectorAll('g').forEach(g=>g.style.opacity='0.15');el.style.filter='brightness(1.25)';}});
    el.addEventListener('mouseleave',()=>{{connG.querySelectorAll('g').forEach(g=>g.style.opacity='');el.style.filter='';}});
  }});
  if(!oMmInited){{
    const cont=document.getElementById('otherMmContainer');
    let iD=false,sx=0,sy=0,spx=0,spy=0;
    cont.addEventListener('mousedown',e=>{{if(e.target.closest('.omm-node'))return;iD=true;sx=e.clientX;sy=e.clientY;spx=oMmPanX;spy=oMmPanY;cont.style.cursor='grabbing';}});
    window.addEventListener('mousemove',e=>{{if(!iD)return;oMmPanX=spx+(e.clientX-sx);oMmPanY=spy+(e.clientY-sy);applyOtherMmT();}});
    window.addEventListener('mouseup',()=>{{iD=false;cont.style.cursor='grab';}});
    cont.addEventListener('wheel',e=>{{e.preventDefault();oMmZoom=Math.max(0.4,Math.min(2.5,oMmZoom*(e.deltaY<0?1.1:0.91)));applyOtherMmT();}},{{passive:false}});
    oMmInited=true;
  }}
  applyOtherMmT();
}}
function applyOtherMmT(){{document.getElementById('otherMmSvg').style.transform='translate('+oMmPanX+'px,'+oMmPanY+'px) scale('+oMmZoom+')';}}
function otherZoom(f){{oMmZoom=Math.max(0.4,Math.min(2.5,oMmZoom*f));applyOtherMmT();}}
function otherResetZoom(){{oMmZoom=1;oMmPanX=0;oMmPanY=0;applyOtherMmT();}}

function otherBuildFilterSelects(){{
  const skill=OTHER_SKILLS[otherCurrentSkill];
  ['otherFcFilter','otherQuizFilter'].forEach(sid=>{{
    const sel=document.getElementById(sid);if(!sel)return;
    sel.innerHTML='<option value="all">Tất cả</option>'+skill.categories.map(c=>'<option value="'+c.id+'">'+c.name+'</option>').join('');
  }});
}}
function otherInitFlashcard(){{
  const skill=OTHER_SKILLS[otherCurrentSkill];
  const filter=document.getElementById('otherFcFilter').value;
  const pool=filter==='all'?[...skill.flashcards]:skill.flashcards.filter(f=>f.cat===filter);
  for(let i=pool.length-1;i>0;i--){{const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}}
  oFcCards=pool;oFcIndex=0;oFcFlipped=false;
  document.getElementById('otherFcCard').style.transform='rotateY(0deg)';
  otherRenderFC();
}}
function otherRenderFC(){{
  if(!oFcCards.length)return;
  const f=oFcCards[oFcIndex];
  const skill=OTHER_SKILLS[otherCurrentSkill];
  const cat=skill.categories.find(c=>c.id===f.cat);
  const color=cat?cat.color:skill.color;
  document.getElementById('otherFcBadge').innerHTML='<span style="font-size:10.5px;font-weight:700;padding:2px 8px;border-radius:4px;background:'+color+'15;color:'+color+';border:1px solid '+color+'30">'+(cat?cat.name:'')+'</span>';
  document.getElementById('otherFcNum').textContent=(oFcIndex+1)+'';
  document.getElementById('otherFcQ').textContent=f.q;
  document.getElementById('otherFcA').innerHTML='<div style="font-size:11px;color:var(--text3);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px">✅ Đáp án</div><div style="font-size:14px;line-height:1.7">'+f.a+'</div>';
  document.getElementById('otherFcProgress').textContent=(oFcIndex+1)+' / '+oFcCards.length;
}}
function otherFlipCard(){{
  oFcFlipped=!oFcFlipped;
  document.getElementById('otherFcCard').style.transform=oFcFlipped?'rotateY(180deg)':'rotateY(0deg)';
}}
function otherNavigateFC(dir){{
  oFcIndex=(oFcIndex+dir+oFcCards.length)%oFcCards.length;
  oFcFlipped=false;
  document.getElementById('otherFcCard').style.transform='rotateY(0deg)';
  setTimeout(otherRenderFC,50);
}}
function otherRenderQuizStart(){{
  document.getElementById('otherQuizArea').innerHTML='<div style="background:var(--card);border:1px solid var(--border);border-radius:2px;padding:40px;text-align:center"><div style="font-size:40px;margin-bottom:16px">🧪</div><h2 style="font-size:20px;margin-bottom:8px">Kiểm tra kiến thức</h2><p style="color:var(--text2);font-size:14px;margin-bottom:24px">Chọn chủ đề và nhấn Bắt đầu.</p><button class="btn btn-primary" onclick="otherStartQuiz()" style="font-size:14px;padding:10px 28px">▶ Bắt đầu ngay</button></div>';
}}
function otherStartQuiz(){{
  const skill=OTHER_SKILLS[otherCurrentSkill];
  const filter=document.getElementById('otherQuizFilter').value;
  const pool=filter==='all'?[...skill.flashcards]:skill.flashcards.filter(f=>f.cat===filter);
  if(pool.length<2){{alert('Cần ít nhất 2 câu!');return;}}
  oQuizItems=[...pool].sort(()=>Math.random()-0.5).slice(0,Math.min(10,pool.length));
  oQuizIndex=0;oQuizScore=0;
  otherRenderOQ();
}}
function otherRenderOQ(){{
  if(oQuizIndex>=oQuizItems.length){{otherQuizResult();return;}}
  const q=oQuizItems[oQuizIndex];
  const pct=(oQuizIndex/oQuizItems.length)*100;
  document.getElementById('otherQuizArea').innerHTML=
    '<div style="background:var(--card);border:1px solid var(--border);border-radius:2px;padding:28px">' +
    '<div style="display:flex;align-items:center;gap:12px;margin-bottom:24px"><div style="flex:1;height:3px;background:var(--border);border-radius:0"><div style="width:'+pct+'%;height:100%;background:var(--blue);border-radius:0"></div></div><span style="font-size:12px;color:var(--text3);font-family:\\'JetBrains Mono\\',monospace">'+(oQuizIndex+1)+'/'+oQuizItems.length+'</span></div>' +
    '<div style="font-size:15px;font-weight:700;margin-bottom:20px;line-height:1.5">'+q.q+'</div>' +
    '<div style="padding:14px;background:var(--bg2);border:1px solid var(--border);border-radius:2px;margin-bottom:14px;cursor:pointer;color:var(--text3);font-size:13px" onclick="otherShowA()">👆 Nhấn để xem đáp án</div>' +
    '<div id="oQA" style="display:none;padding:14px;background:rgba(22,163,74,0.06);border:1px solid rgba(22,163,74,0.22);border-radius:2px;margin-bottom:14px;font-size:13.5px;line-height:1.7;color:var(--green)">'+q.a+'</div>' +
    '<div style="display:flex;justify-content:flex-end"><button class="btn btn-primary" id="oQNext" style="display:none" onclick="otherNextQ()">Tiếp theo →</button></div></div>';
}}
function otherShowA(){{document.getElementById('oQA').style.display='block';document.getElementById('oQNext').style.display='block';oQuizScore++;}}
function otherNextQ(){{oQuizIndex++;otherRenderOQ();}}
function otherQuizResult(){{
  const pct=Math.round((oQuizScore/oQuizItems.length)*100);
  const msg=pct>=80?'🎉 Xuất sắc!':pct>=60?'👍 Khá tốt!':'📚 Cần ôn thêm!';
  document.getElementById('otherQuizArea').innerHTML='<div style="background:var(--card);border:1px solid var(--border);border-radius:2px;padding:40px;text-align:center"><div style="font-size:48px;margin-bottom:16px">'+msg.split(' ')[0]+'</div><h2 style="margin-bottom:8px">'+(msg.substring(2))+'</h2><div style="font-size:52px;font-weight:700;font-family:\\'JetBrains Mono\\',monospace;color:'+(pct>=80?'var(--green)':pct>=60?'var(--amber)':'var(--red)')+';margin:16px 0">'+pct+'%</div><div style="color:var(--text2);margin-bottom:24px">Đã xem <strong>'+oQuizScore+'</strong> / '+oQuizItems.length+' câu đáp án</div><div style="display:flex;gap:10px;justify-content:center"><button class="btn btn-ghost" onclick="otherStartQuiz()">🔄 Làm lại</button><button class="btn btn-primary" onclick="otherSetMode(\\'browse\\')">📚 Ôn thêm</button></div></div>';
}}

// ===================================================
// INIT
// ===================================================
init();
'''

VAN_JS = r"""
// =====================================================
// VAN SKILL – FORMATTERS
// =====================================================
function fmtLine(s) {
  if (!s) return '';
  s = s.replace(/→/g, '<span style="color:#f59e0b;font-weight:800">→</span>');
  s = s.replace(/(\d[\d.,]*\s*(?:bar|psi|mA|V|Hz|rpm|mm|cm|%|°C|kPa|MPa|m³\/h|Nm|ms|s\b|min|kg|kW|kN|A\b))/g,
    '<code style="font-family:\'JetBrains Mono\',monospace;font-size:0.87em;background:rgba(124,58,237,0.08);color:#7c3aed;padding:1px 5px;border-radius:3px;border:1px solid rgba(124,58,237,0.2)">$1</code>');
  return s;
}

function fmtPopupDetail(txt) {
  if (!txt) return '';
  const lines = txt.split('\n').filter(l => l.trim());
  return lines.map(line => {
    const lm = line.match(/^([A-Za-zÀ-ỹ][A-Za-zÀ-ỹ\s\/\-()\d]*?):\s*(.+)/);
    if (lm) {
      return '<div style="display:flex;gap:5px;margin-bottom:5px;line-height:1.55">' +
        '<span style="font-weight:800;color:#0891b2;font-size:12px;flex-shrink:0;white-space:nowrap">' + lm[1] + ':</span>' +
        '<span style="font-size:13px">' + fmtLine(lm[2]) + '</span></div>';
    }
    if (/^[•\-*]/.test(line)) {
      return '<div style="display:flex;gap:6px;margin-bottom:3px;line-height:1.55">' +
        '<span style="color:#7c3aed;flex-shrink:0;font-size:12px">▸</span>' +
        '<span style="font-size:13px">' + fmtLine(line.replace(/^[•\-*]\s*/, '')) + '</span></div>';
    }
    return '<div style="margin-bottom:4px;font-size:13px;line-height:1.6">' + fmtLine(line) + '</div>';
  }).join('');
}

function fmtPopupEquip(txt) {
  if (!txt) return '';
  const lines = txt.split('\n').filter(l => l.trim());
  const brands = ['Fisher','Rotork','Emerson','Masoneilan','ARCA','Flowserve','Metso','Bettis','Auma','Biffi','Siemens','Yokogawa','Samson','REXA'];
  return '<div style="display:flex;flex-direction:column;gap:5px">' +
    lines.map(line => {
      if (/KHÔNG CÓ|Không có/i.test(line)) {
        return '<div style="display:flex;align-items:flex-start;gap:7px">' +
          '<span style="color:#dc2626;font-size:13px;flex-shrink:0;margin-top:1px">✗</span>' +
          '<span style="color:var(--text3);font-size:12.5px;text-decoration:line-through">' +
            fmtLine(line.replace(/KHÔNG CÓ[:\s]*/i,'')) + '</span></div>';
      }
      const hasBrand = brands.some(b => line.includes(b));
      if (hasBrand) {
        return '<div style="display:flex;align-items:flex-start;gap:7px">' +
          '<span style="font-size:13px;flex-shrink:0;margin-top:1px">🔧</span>' +
          '<span style="font-size:12.5px;font-weight:600">' + fmtLine(line) + '</span></div>';
      }
      return '<div style="display:flex;align-items:flex-start;gap:7px">' +
        '<span style="color:#0891b2;flex-shrink:0;font-size:13px;margin-top:1px">▸</span>' +
        '<span style="font-size:12.5px">' + fmtLine(line) + '</span></div>';
    }).join('') +
  '</div>';
}

function fmtPopupParams(txt) {
  if (!txt) return '';
  const lines = txt.split('\n').filter(l => l.trim());
  return '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">' +
    lines.map(line => {
      const ci = line.indexOf(':');
      if (ci > 0) {
        const label = line.substring(0, ci).trim();
        const val   = line.substring(ci + 1).trim();
        return '<div style="background:var(--bg3);border:1px solid var(--border);border-radius:6px;padding:7px 10px;min-width:0">' +
          '<div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:var(--text3);margin-bottom:3px">' + label + '</div>' +
          '<div style="font-size:12px;font-family:\'JetBrains Mono\',monospace;color:#7c3aed;font-weight:600">' + val + '</div></div>';
      }
      return '<div style="grid-column:1/-1;font-size:12.5px;color:var(--text2)">' + fmtLine(line) + '</div>';
    }).join('') +
  '</div>';
}

// =====================================================
// VAN SKILL – CUSTOM BROWSE RENDERING
// =====================================================
function renderVanBrowse() {
  const skill = OTHER_SKILLS[otherCurrentSkill];
  const sections = skill.categories.map(c => ({ id:c.id, label:c.name.toUpperCase(), color:c.color, e:'' }));
  document.getElementById('otherBrowseTitle').textContent = '📚 ' + skill.name;
  const activeSections = (otherCurrentFilter === 'all')
    ? sections
    : sections.filter(sec => sec.id === otherCurrentFilter);
  let html = '';
  activeSections.forEach(sec => {
    const items = skill.data.filter(d => {
      if (d.cat !== sec.id) return false;
      if (!otherSearchQuery) return true;
      return d.name.toLowerCase().includes(otherSearchQuery) ||
             (d.sub  && d.sub.toLowerCase().includes(otherSearchQuery)) ||
             (d.goal && d.goal.toLowerCase().includes(otherSearchQuery));
    });
    if (!items.length) return;
    html +=
      '<div class="van-section">' +
        '<div class="van-sec-hdr">' +
          '<span class="van-sec-bar" style="background:' + sec.color + '"></span>' +
          '<span class="van-sec-title" style="color:' + sec.color + '">' + sec.e + ' ' + sec.label + '</span>' +
          '<span class="van-sec-cnt">' + items.length + ' mục</span>' +
        '</div>' +
        '<div class="van-grid">' +
          items.map(d => renderVanCard(skill, d, otherCurrentSkill)).join('') +
        '</div>' +
      '</div>';
  });
  const cont = document.getElementById('otherCardsContainer');
  cont.className = '';
  cont.innerHTML = html;
}

function renderVanCard(skill, d, skillId) {
  skillId = skillId || otherCurrentSkill;
  const cat   = skill.categories.find(c => c.id === d.cat);
  const color = cat ? cat.color : skill.color;
  const catNm = cat ? cat.name  : '';
  const cellsHtml = (d.cells || []).filter(cell => cell.c).map(cell => {
    const wide = cell.w ? ' full' : '';
    let inner;
    if (cell.c) {
      inner = '<div class="van-cchips">' +
        cell.c.map(chip => {
          const hasCpt = !!chip.k;
          return '<span class="van-chip ' + (hasCpt ? 'cpt' : 'nc') + '"' +
            (hasCpt ? ' onclick="openConceptPopup(\'' + skillId + '\',\'' + chip.k + '\')"' : '') +
            '>' + chip.t + '</span>';
        }).join('') +
      '</div>';
    } else {
      inner = '<div class="van-cv">' + fmtLine(cell.v || '') + '</div>';
    }
    return '<div class="van-cell' + wide + '"><div class="van-cl">' + cell.l + '</div>' + inner + '</div>';
  }).join('');

  return '<div class="van-card">' +
    '<div class="van-card-hd">' +
      '<span class="van-stt" style="color:' + color + '80">' + d.stt + '</span>' +
      '<div style="flex:1;min-width:0">' +
        '<div class="van-name">' + d.name + '</div>' +
        '<div class="van-vsub">' + d.sub  + '</div>' +
      '</div>' +
      '<span class="van-badge" style="background:' + color + '18;color:' + color + ';border:1px solid ' + color + '30">' + catNm + '</span>' +
    '</div>' +
    '<div class="van-cells">' + cellsHtml + '</div>' +
    '<div class="van-card-ft" onclick="openPopup(\'' + skillId + '\',' + d.id + ')"><span>Xem chi tiết ↗</span></div>' +
  '</div>';
}

function openConceptPopup(skillId, cptKey) {
  if (!cptKey) return;
  const skill = OTHER_SKILLS[skillId];
  if (!skill || !skill.concepts || !skill.concepts[cptKey]) return;
  const cpt = skill.concepts[cptKey];
  document.getElementById('popupNum').textContent    = cpt.e || '💡';
  document.getElementById('popupTitle').textContent  = cpt.title;
  document.getElementById('popupSubtitle').textContent = 'Khái niệm kỹ thuật – ' + (skill ? skill.name : '');
  const badge = document.getElementById('popupBadge');
  badge.textContent  = 'Khái niệm';
  badge.style.cssText = 'background:#7c3aed18;color:#7c3aed;border:1px solid #7c3aed35;';
  document.getElementById('popupNum').style.color = '#7c3aed60';
  document.getElementById('popupBody').innerHTML =
    '<div class="popup-sections">' +
      '<div class="popup-section full">' +
        '<div class="popup-section-label">📖 GIẢI THÍCH</div>' +
        '<div class="popup-section-content">' + fmtPopupDetail(cpt.body || '') + '</div>' +
      '</div>' +
      (cpt.note
        ? '<div class="popup-section full">' +
            '<div class="popup-section-label">📌 GHI CHÚ TẠI NHÀ MÁY</div>' +
            '<div class="popup-section-content">' + fmtPopupDetail(cpt.note) + '</div>' +
          '</div>'
        : '') +
    '</div>';
  document.getElementById('popupOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// =====================================================
// VAN SKILL – CUSTOM MINDMAP (tree bus-style, hover)
// =====================================================
function renderVanMindmap() {
  const skill = OTHER_SKILLS['van'];
  const mm = skill.mindmap;
  if (!mm) return;
  document.getElementById('otherMindmapTitle').textContent = '🗺️ ' + skill.name + ' — Sơ đồ tổng quan';

  // Legend
  let lgHtml = '<div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px;font-weight:700">Chú giải</div>';
  mm.legend.forEach(l => {
    lgHtml += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px"><span style="width:10px;height:10px;border-radius:2px;flex-shrink:0;background:' + l.color + '"></span>' + l.label + '</div>';
  });
  document.getElementById('otherMmLegend').innerHTML = lgHtml;

  // Zone styles
  const zc = {
    amo:     {fill:'rgba(0,86,211,0.04)',   stroke:'rgba(0,86,211,0.25)',   text:'#0056d3'},
    urea:    {fill:'rgba(4,120,87,0.04)',   stroke:'rgba(4,120,87,0.25)',   text:'#047857'},
    granule: {fill:'rgba(217,119,6,0.04)',  stroke:'rgba(217,119,6,0.25)',  text:'#d97706'},
    esd:     {fill:'rgba(220,38,38,0.04)',  stroke:'rgba(220,38,38,0.25)',  text:'#dc2626'},
    mid:     {fill:'rgba(0,0,0,0.02)',      stroke:'rgba(0,0,0,0.08)',      text:'#6b7280'},
  };
  const zonesG = document.getElementById('o-zones');
  const zlG    = document.getElementById('o-zone-labels');
  zonesG.innerHTML = mm.zones.map(z => {
    const c = zc[z.color] || zc.mid;
    return '<rect x="'+z.x+'" y="'+z.y+'" width="'+z.w+'" height="'+z.h+'" rx="14" ry="14" fill="'+c.fill+'" stroke="'+c.stroke+'" stroke-width="1" stroke-dasharray="4 3"/>';
  }).join('');
  zlG.innerHTML = mm.zones.map(z => {
    if (!z.label) return '';
    const c = zc[z.color] || zc.mid;
    return '<text x="'+(z.x+14)+'" y="'+(z.y+22)+'" font-family="\'IBM Plex Sans\',sans-serif" font-size="11" font-weight="700" fill="'+c.text+'" letter-spacing="1.5">'+z.label+'</text>';
  }).join('');

  // Node helpers
  const nodeMap = {};
  mm.nodes.forEach(n => { nodeMap[n.id] = n; });
  const nL  = id => nodeMap[id].x;
  const nR  = id => nodeMap[id].x + nodeMap[id].w;
  const nCy = id => nodeMap[id].y + nodeMap[id].h / 2;

  // Category colours
  const cats = {};
  skill.categories.forEach(c => { cats[c.id] = c.color; });

  // Build a "bus-tree" compound path:
  //   trunk : catConnX,catConnY → jx (horizontal)
  //   spine : jx, firstCy → lastCy (vertical bus)
  //   ticks : jx,cy → leafEdgeX for each leaf (horizontal ticks)
  function busBranch(catConnX, catConnY, jx, leafEdgeX, leafIds) {
    const cys = leafIds.map(nCy);
    let d = 'M ' + catConnX + ' ' + catConnY + ' H ' + jx;
    d += ' M ' + jx + ' ' + cys[0] + ' V ' + cys[cys.length - 1];
    cys.forEach(cy => { d += ' M ' + jx + ' ' + cy + ' H ' + leafEdgeX; });
    return d;
  }

  const bodyLeaves = ['globe','gate','ball','butterfly','plug','diaphm','check'];
  const actLeaves  = ['spr','rp','piston','eh','mov'];
  const posLeaves  = ['smart','ip','pneu','reg','boost','sv','lsb'];
  const fsLeaves   = ['fc','fo','fl','t377'];

  const rootL  = nL('root'), rootR = nR('root'), rootCy = nCy('root');
  const lMid   = Math.round((rootL + nR('body_cat')) / 2);  // ~492
  const rMid   = Math.round((rootR + nL('pos_cat'))  / 2);  // ~865
  const ljx    = 228,  rjx    = 1183;
  const lLeafR = nR('globe'),  rLeafL = nL('smart');  // 195 and 1215

  // root → cat: elbow path (horizontal → vertical → horizontal)
  function rootToLeft(catId) {
    return 'M '+rootL+' '+rootCy+' H '+lMid+' V '+nCy(catId)+' H '+nR(catId);
  }
  function rootToRight(catId) {
    return 'M '+rootR+' '+rootCy+' H '+rMid+' V '+nCy(catId)+' H '+nL(catId);
  }

  const edgeGroups = [
    {
      id: 'body', color: '#0891b2',
      d:  rootToLeft('body_cat') + ' ' + busBranch(nL('body_cat'), nCy('body_cat'), ljx, lLeafR, bodyLeaves),
      nodes: ['root','body_cat'].concat(bodyLeaves)
    },
    {
      id: 'act', color: '#ea580c',
      d:  rootToLeft('act_cat') + ' ' + busBranch(nL('act_cat'), nCy('act_cat'), ljx, lLeafR, actLeaves),
      nodes: ['root','act_cat'].concat(actLeaves)
    },
    {
      id: 'pos', color: '#047857',
      d:  rootToRight('pos_cat') + ' ' + busBranch(nR('pos_cat'), nCy('pos_cat'), rjx, rLeafL, posLeaves),
      nodes: ['root','pos_cat'].concat(posLeaves)
    },
    {
      id: 'fs', color: '#d97706',
      d:  rootToRight('fs_cat') + ' ' + busBranch(nR('fs_cat'), nCy('fs_cat'), rjx, rLeafL, fsLeaves),
      nodes: ['root','fs_cat'].concat(fsLeaves)
    },
    // Cross-links: body ↔ actuator – routed outside nodes (x > 195) to avoid overlap
    {
      id: 'cx1', color: '#3b82f6', dashed: true,
      label: 'DA/RA', lx: 219, ly: 215,
      d: 'M '+lLeafR+' '+nCy('globe')+' H 215 V '+nCy('spr')+' H '+lLeafR,
      nodes: ['globe','spr']
    },
    {
      id: 'cx2', color: '#0891b2', dashed: true,
      label: 'R&P', lx: 229, ly: 300,
      d: 'M '+lLeafR+' '+nCy('ball')+' H 227 V '+nCy('rp')+' H '+lLeafR,
      nodes: ['ball','rp']
    },
    {
      id: 'cx3', color: '#8b5cf6', dashed: true,
      label: 'MOV', lx: 241, ly: 350,
      d: 'M '+lLeafR+' '+nCy('ball')+' H 239 V '+nCy('mov')+' H '+lLeafR,
      nodes: ['ball','mov']
    },
  ];

  // Node → group map for hover highlight
  const n2g = {};
  edgeGroups.forEach(grp => {
    grp.nodes.forEach(nid => {
      if (!n2g[nid]) n2g[nid] = [];
      n2g[nid].push(grp.id);
    });
  });

  // Render edges as compound paths (no overlapping lines)
  const connG = document.getElementById('o-connections');
  connG.innerHTML = edgeGroups.map(grp => {
    const dash = grp.dashed ? 'stroke-dasharray="5 4"' : '';
    let html = '<path class="vmm-grp" id="vmm-'+grp.id+'" d="'+grp.d+'" fill="none" stroke="'+grp.color+'" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" '+dash+' opacity="0.18"/>';
    if (grp.label) {
      html += '<text class="vmm-grp-lbl" id="vmm-lbl-'+grp.id+'" x="'+grp.lx+'" y="'+grp.ly+'" font-family="\'JetBrains Mono\',monospace" font-size="8.5" fill="'+grp.color+'" opacity="0.25" font-weight="700">'+grp.label+'</text>';
    }
    return html;
  }).join('');

  // Render nodes
  const nodesG = document.getElementById('o-nodes');
  function h2r(hex) {
    return { r:parseInt(hex.slice(1,3),16), g:parseInt(hex.slice(3,5),16), b:parseInt(hex.slice(5,7),16) };
  }
  nodesG.innerHTML = mm.nodes.map(n => {
    const color = cats[n.cat] || skill.color;
    const {r,g,b} = h2r(color);
    const bg = 'rgba('+r+','+g+','+b+',0.08)';
    const ry = n.sub==='product'?12 : n.sub==='input'?22 : 8;
    const lines = n.label.split('\n');
    const lh = 14, sy = n.y + n.h/2 - ((lines.length-1)*lh)/2 + 4;
    return '<g class="omm-node" data-skillid="van" data-nlabel="'+encodeURIComponent(lines[0])+'" data-nid="'+n.id+'" style="cursor:pointer">' +
      '<rect x="'+n.x+'" y="'+n.y+'" width="'+n.w+'" height="'+n.h+'" rx="'+ry+'" ry="'+ry+'" fill="'+bg+'" stroke="'+color+'" stroke-width="'+(n.sub==='product'?'2.5':'1.5')+'" '+(n.sub==='product'?'filter="url(#oglow)"':'')+'/>' +
      lines.map((line,i) => '<text x="'+(n.x+n.w/2)+'" y="'+(sy+i*lh)+'" text-anchor="middle" font-family="\'IBM Plex Sans\',sans-serif" font-size="'+(i===0?'11.5':'10')+'" font-weight="'+(i===0?'700':'500')+'" fill="'+color+'">'+line+'</text>').join('') +
      '</g>';
  }).join('');

  // Direct node-id → data-id mapping (no fuzzy guessing)
  const nodeDataId = {
    globe: 0, gate: 1, plug: 2, ball: 3, butterfly: 4, diaphm: 5, check: 6,
    spr: 7, rp: 8, piston: 9, eh: 10, mov: 11,
    smart: 12, pneu: 12, ip: 13, reg: 13, boost: 13, sv: 14, lsb: 14,
    fc: 15, fo: 15, fl: 15, t377: 14,
    body_cat: 0, act_cat: 7, pos_cat: 12, fs_cat: 15,
    // root node → no popup
  };

  // Hover: highlight connected groups, dim others
  nodesG.querySelectorAll('.omm-node').forEach(el => {
    const nid = el.getAttribute('data-nid');

    el.addEventListener('click', () => {
      const did = nodeDataId[nid];
      if (did != null) openPopup('van', did);
    });

    el.addEventListener('mouseenter', () => {
      const myGrps = new Set(n2g[nid] || []);
      connG.querySelectorAll('.vmm-grp').forEach(path => {
        const gid = path.id.replace('vmm-','');
        const on = myGrps.has(gid);
        path.setAttribute('opacity', on ? '0.9' : '0.04');
        path.setAttribute('stroke-width', on ? '2.2' : '1.6');
      });
      connG.querySelectorAll('.vmm-grp-lbl').forEach(t => {
        const gid = t.id.replace('vmm-lbl-','');
        t.setAttribute('opacity', myGrps.has(gid) ? '0.85' : '0.04');
      });
      el.style.filter = 'brightness(1.3)';
    });

    el.addEventListener('mouseleave', () => {
      connG.querySelectorAll('.vmm-grp').forEach(path => {
        path.setAttribute('opacity', '0.18');
        path.setAttribute('stroke-width', '1.6');
      });
      connG.querySelectorAll('.vmm-grp-lbl').forEach(t => { t.setAttribute('opacity','0.25'); });
      el.style.filter = '';
    });
  });

  // Pan / zoom (reuses shared state)
  if (!oMmInited) {
    const cont = document.getElementById('otherMmContainer');
    let iD=false, sx=0, sy=0, spx=0, spy=0;
    cont.addEventListener('mousedown', e => { if(e.target.closest('.omm-node'))return; iD=true; sx=e.clientX; sy=e.clientY; spx=oMmPanX; spy=oMmPanY; cont.style.cursor='grabbing'; });
    window.addEventListener('mousemove', e => { if(!iD)return; oMmPanX=spx+(e.clientX-sx); oMmPanY=spy+(e.clientY-sy); applyOtherMmT(); });
    window.addEventListener('mouseup', () => { iD=false; cont.style.cursor='grab'; });
    cont.addEventListener('wheel', e => { e.preventDefault(); oMmZoom=Math.max(0.4,Math.min(2.5,oMmZoom*(e.deltaY<0?1.1:0.91))); applyOtherMmT(); }, {passive:false});
    oMmInited = true;
  }
  applyOtherMmT();
}
"""

# Build final HTML
html = f'''<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PVCFC — Kỹ Năng Lực Nhà Máy Đạm Cà Mau</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
{css_text}
{EXTRA_CSS}
</style>
</head>
<body>

{HEADER_HTML}

<!-- ===== NHAMAY SKILL (100% identical to reference) ===== -->
<div id="nm-container">
{layout_html}
</div>

{OTHER_HTML}

{POPUP_HTML}

<script src="pfd-images.js"></script>
<script>
{nm_js_mod}
{OTHER_JS}
{VAN_JS}
</script>
</body>
</html>'''

with open('C:/Users/PHUOC VINH/PVCFC-KNL/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f'Done! index.html: {len(html):,} chars, {html.count(chr(10)):,} lines')
