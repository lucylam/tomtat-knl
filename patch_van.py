
# Read current file
content = open('C:/Users/PHUOC VINH/PVCFC-KNL/other-skills.js', 'r', encoding='utf-8').read()
start = content.index('  van: {')
end   = content.index('  dien: {')
prefix = content[:start]
suffix = content[end:]

NEW_VAN = r"""  van: {
    id: 'van',
    name: 'Thiết bị chấp hành – Van điều khiển',
    icon: '🔧',
    color: '#7c3aed',
    categories: [
      { id: 'body', name: 'Thân van (Body)',          color: '#0891b2' },
      { id: 'act',  name: 'Actuator',                 color: '#dc2626' },
      { id: 'pos',  name: 'Positioner & Phụ kiện',    color: '#047857' },
      { id: 'fs',   name: 'Fail-safe & Kết nối',      color: '#d97706' },
    ],
    data: [
      /* ========== THÂN VAN (BODY) ========== */
      { id:0, stt:'B1', cat:'body', name:'Van cầu – Globe Valve', sub:'Sliding-stem · Equal% · Điều tiết chính xác · Fisher',
        goal:'Van điều tiết phổ biến nhất tại NM Đạm Cà Mau (hãng Fisher). Kiểm soát lưu lượng chính xác liên tục. Dùng với positioner Smart/Analog I/P.',
        detail:'Cấu tạo: Thân hình cầu, stem trượt lên/xuống điều chỉnh orifice (sliding-stem). Dòng chảy đổi hướng qua thân.\nĐặc tính lưu lượng: Equal percentage (phổ biến nhất cho PID), Linear, Fast-opening. Tùy hình dạng Plug/Cage.\nActuator thường dùng: Diaphragm màng lò xo (DA/RA) hoặc Piston (van lớn, lực lớn).\nBắt buộc có POSITIONER (Smart/Analog I/P/Pneumatic) để điều tiết chính xác.\nFail-safe: FC hoặc FO qua lò xo actuator.\nRangeability 50:1. Ưu: chính xác cao. Nhược: ΔP lớn, cồng kềnh.',
        equip:'Fisher GX, ED, EZ (tại NM Đạm Cà Mau)\nAngle valve (lưu chất dễ bốc hơi)\nPositioner: Fisher DVC6200 (HART)',
        params:'Rangeability: 50:1\nChar: equal%, linear, fast-opening\nActuator: Diaphragm 2-7 bar / Piston ≤10 bar\nPositioner: BẮT BUỘC' },

      { id:1, stt:'B2', cat:'body', name:'Van cửa – Gate Valve', sub:'On-off · Full-bore · ΔP thấp · 04HV-2082',
        goal:'Đóng/mở hoàn toàn (on-off). Không dùng điều tiết. Tổn thất áp suất thấp nhất khi mở hoàn toàn (full-bore). Chủ yếu tay quay, tự động dùng Piston/Rack & Pinion.',
        detail:'Cấu tạo: Gate (tấm chắn) trượt vuông góc với dòng chảy. Chỉ ở vị trí đóng hoàn toàn hoặc mở hoàn toàn.\nFull-bore: đường kính trong bằng đường kính ống → ΔP ≈ 0 khi mở.\nĐặc tính: Fast-opening (25% stroke → 60-80% Cv).\nActuator: Chủ yếu TAY QUAY (manual). Tự động: Piston actuator (tác động kép) hoặc Rack & Pinion hoặc Electric (Rotork, Auma).\nKHÔNG cần positioner (van on-off).\nNHƯỢC ĐIỂM: Không điều tiết, hành trình dài, dễ erosion nếu vận hành tiết lưu.\nTại NM: 04HV-2082.',
        equip:'04HV-2082 (tại NM Đạm Cà Mau)\nWedge gate, Parallel slide\nActuator: Piston / Rack & Pinion / Rotork, Auma',
        params:'Char: Fast-opening\nFull-bore: ΔP ≈ 0 khi mở\nChỉ On-off, KHÔNG điều tiết\nKhông cần Positioner' },

      { id:2, stt:'B3', cat:'body', name:'Van nút – Plug Valve', sub:'Xoay 90° · 2-way / 3-way · Chuyển hướng dòng',
        goal:'Đóng/mở nhanh hoặc chuyển hướng dòng chảy (3-way mix/divert). Cấu trúc đơn giản. Chủ yếu tay quay, tự động dùng Rack & Pinion/Electric.',
        detail:'Cấu tạo: Plug hình trụ/côn có lỗ xoay 90° trong thân.\nLoại: 2-way (on-off), 3-way (phân phối hoặc trộn 2 dòng).\nĐặc tính: Fast-opening.\nActuator: Chủ yếu TAY QUAY. Tự động: Rack & Pinion (90° rotary) hoặc Electric actuator.\nKHÔNG cần positioner.\nKhông dùng điều tiết (erosion không đồng đều khi ở vị trí trung gian).\nƯu: đơn giản, rẻ, làm việc với nhiều lưu chất kể cả nhớt.',
        equip:'2-way Plug valve\n3-way Plug valve (mix/divert)\nActuator: Rack & Pinion / Electric',
        params:'Stroke: 90°\nChar: Fast-opening\n3-way: mix hoặc divert\nKhông cần Positioner' },

      { id:3, stt:'B4', cat:'body', name:'Van bi – Ball Valve', sub:'Xoay 90° · On-off nhanh · V-ball điều tiết · Rotork/Auma/Biffi',
        goal:'On-off nhanh, kín tốt. V-ball dùng điều tiết lưu chất nhớt/slurry. Actuator phổ biến: Rack & Pinion. Electric: Rotork, Auma, Biffi tại NM.',
        detail:'Cấu tạo: Ball hình cầu có lỗ xoay 90° giữa 2 vòng làm kín (seal ring).\nFull-bore ball: đường kính lỗ = đường ống → on-off, fast-opening.\nV-ball (V-notch): đặc tính equal percentage → điều tiết slurry, nhớt.\nActuator:\n• Rack & Pinion (phổ biến nhất, 90° rotary): Single acting (FC hoặc FO) hoặc Double acting (cần trip valve).\n• Electric actuator (on-off): Rotork, Auma, Biffi tại NM.\nPositioner: CHỈ dùng khi V-ball điều tiết. Không cần cho on-off.\nKín tốt: Class IV-VI (ANSI FCI 70-2).',
        equip:'Full-bore Ball (on-off)\nFisher V500, V300 (V-ball, điều tiết)\nRack & Pinion (Single/Double acting)\nRotork, Auma, Biffi (Electric MOV)',
        params:'Char: Fast-opening (full-bore)\nChar: Equal% (V-ball)\nPositioner: CHỈ khi V-ball\nLeakage: Class IV-VI' },

      { id:4, stt:'B5', cat:'body', name:'Van bướm – Butterfly Valve', sub:'Xoay 90° · Rack & Pinion · Tomoe 04HV-5003 · LSB',
        goal:'Tiết kiệm chi phí ống lớn. On-off và điều tiết thô. Actuator Rack & Pinion (Tomoe). Có Limit Switch Box báo trạng thái.',
        detail:'Cấu tạo: Disc hình đĩa xoay 90° quanh trục giữa trong thân wafer/lug/flanged.\nLoại: Concentric (fast-opening, kín kém), Double-eccentric (cải thiện kín), Triple-eccentric (metal-to-metal, equal%, PN cao).\nActuator:\n• Rack & Pinion (Tomoe tại NM, 04HV-5003): Single hoặc Double acting.\n• Electric actuator (Rotork, Auma).\nPositioner: lắp nếu dùng điều tiết (không phổ biến).\nLimit Switch Box: báo trạng thái ON/OFF về DCS/ESD.\nƯu: nhỏ gọn, nhẹ, rẻ cho DN lớn. Nhược: kín và điều tiết kém van cầu.',
        equip:'04HV-5003 – Tomoe (Rack & Pinion, NM)\nConcentric, Double/Triple eccentric\nLimit Switch Box (LSB)\nRotork, Auma (Electric option)',
        params:'Stroke: 90°\nChar: Fast-opening (concentric)\nDN lớn ≥ DN100\nLSB báo trạng thái về DCS' },

      { id:5, stt:'B6', cat:'body', name:'Van màng – Diaphragm Valve', sub:'Lưu chất ăn mòn · Diaphragm actuator · ITT',
        goal:'Phù hợp lưu chất ăn mòn, hóa chất. Không tiếp xúc lưu chất và cơ cấu truyền động (không packing). Actuator Diaphragm màng lò xo. ITT tại NM.',
        detail:'Cấu tạo: Màng đàn hồi (diaphragm) ép lên saddle/weir để chặn dòng. Không có packing/stuffing box tiếp xúc lưu chất.\nLoại: Weir type (saddle – tác động thẳng, đặc tính linear), Straight-through.\nActuator: Diaphragm actuator (màng lò xo) – phổ biến, tác động thẳng DA, áp suất 2-7 bar.\nPositioner: lắp nếu dùng điều tiết Weir type.\nTại NM: hãng ITT với diaphragm actuator.\nƯu: lưu chất không tiếp xúc cơ cấu → phù hợp ăn mòn. Nhược: PN thấp (<16 bar), màng dễ hỏng.',
        equip:'ITT Diaphragm Valve (tại NM)\nWeir type, Straight-through\nActuator: Diaphragm màng lò xo DA\nLining: PTFE, Rubber, EPDM',
        params:'Char: Linear (Weir type)\nPN thấp < 16 bar\nActuator: Diaphragm 2-7 bar\nPositioner: tùy nếu điều tiết' },

      { id:6, stt:'B7', cat:'body', name:'Van một chiều – Check Valve', sub:'Thụ động · Không cần actuator · Bảo vệ bơm/máy nén',
        goal:'Tự động cho phép dòng chảy một chiều. Ngăn dòng ngược bảo vệ bơm, máy nén. Không cần actuator hay tín hiệu điều khiển.',
        detail:'Nguyên lý: Disc/ball/plate mở tự động khi áp xuôi > cracking pressure. Đóng tự động khi dòng ngược.\nLOẠI VAN THỤ ĐỘNG (passive) – KHÔNG CÓ actuator.\nLoại:\n• Swing check: đĩa xoay quanh bản lề → dòng ngang.\n• Lift check: đĩa nâng thẳng đứng → dòng đứng.\n• Dual-plate (wafer): 2 bướm → gọn, đóng nhanh.\n• Piston check: piston trượt → chống water hammer.\nMột số hỗ trợ thêm: lò xo (tăng lực đóng), dash-pot (giảm sốc), counter-weight (cân bằng đĩa).\nTại NM: dùng nhiều loại tùy đường ống.',
        equip:'Swing check (horizontal)\nDual-plate wafer check\nLift check (vertical upward)\nKHÔNG CÓ actuator',
        params:'Không cần actuator\nTự động theo dòng chảy\nCracking pressure: 0.05-0.5 bar\nBảo vệ bơm/máy nén' },

      /* ========== ACTUATOR ========== */
      { id:7, stt:'A1', cat:'act', name:'Actuator Màng Lò Xo – Diaphragm/Spring', sub:'DA / RA · 2–7 bar · Fail-safe lò xo · Fisher 657/667',
        goal:'Phổ biến nhất cho van cầu Globe tại NM. Fail-safe tự nhiên nhờ lò xo. Đơn giản, bền, ít bảo trì. Bench set 3-15 psi hoặc 5-15 psi.',
        detail:'Nguyên lý: Khí nén đẩy màng → thắng lực lò xo → dịch chuyển stem.\nDA (Direct Acting / Tác động thuận): Khí cấp phía TRÊN màng → stem đi XUỐNG. Fisher 657.\nRA (Reverse Acting / Tác động nghịch): Khí cấp phía DƯỚI màng → stem đi LÊN. Fisher 667.\nBench set: khoảng áp suất để đóng/mở hoàn toàn van (ví dụ: 3-13 psi DA, 5-15 psi RA).\nDead band: khoảng hành trình không thay đổi khi áp màng thay đổi (do ma sát packing).\nFail-safe: DA → mất khí → lò xo đẩy stem ngược chiều (FC hoặc FO tùy body).\nÁp suất: 2-7 bar. Dùng cho van cầu, van màng (sliding-stem).',
        equip:'Fisher 657 (DA – tác động thuận)\nFisher 667 (RA – tác động nghịch)\nFisher 1051, 1052 (rotary)\nActuator Assembly = actuator + phụ kiện đầy đủ',
        params:'Áp lực: 2-7 bar (30-100 psi)\nBench set: 3-13 / 3-11 (DA); 5-15 / 7-15 (RA)\nFail-safe: tự nhiên nhờ lò xo\nDA / RA / Reversible' },

      { id:8, stt:'A2', cat:'act', name:'Actuator Rack & Pinion', sub:'Xoay 90° · Van bi/bướm/nút · Single/Double acting · Tomoe',
        goal:'Actuator xoay 90° cho van bi, van bướm, van nút. Chuyển đổi chuyển động thẳng (piston) thành xoay qua cơ cấu bánh răng (rack & pinion).',
        detail:'Nguyên lý: Piston khí nén di chuyển thẳng → rack & pinion chuyển thành xoay 90°.\nSingle acting (Tác động đơn): 1 phía khí nén + lò xo đối nghịch → có fail-safe tự nhiên (FC hoặc FO).\nDouble acting (Tác động kép): 2 phía khí nén thay nhau → lực lớn hơn, không có fail-safe tự nhiên → cần trip valve (Fisher 377) hoặc lock-up valve.\nTomoe (hãng Rack & Pinion tại NM): van bướm 04HV-5003.\nDùng cho: van bi (on-off), van bướm (on-off/điều tiết thô), van nút.\nPositioner lắp nếu cần điều tiết (ví dụ V-ball).',
        equip:'Tomoe (van bướm 04HV-5003 tại NM)\nHãng SMC, Rotork, Festo\nSingle acting: có fail-safe lò xo\nDouble acting: cần trip valve 377',
        params:'Stroke: 90° (rotary)\nSingle acting: FC hoặc FO\nDouble acting: cần trip valve cho FL\nDùng cho Ball/Butterfly/Plug valve' },

      { id:9, stt:'A3', cat:'act', name:'Actuator Piston – Lực lớn', sub:'≤10 bar · Linear & Rotary · Double acting · Van lớn',
        goal:'Lực nâng lớn hơn nhiều so với diaphragm. Dùng cho van cầu lớn, van cửa lớn, áp suất công nghệ cao. Cần trip valve 377 cho fail-safe khi double acting.',
        detail:'Nguyên lý: Khí nén tác động lên piston trong cylinder thép → chuyển động thẳng (linear).\nSingle acting: lò xo trả về → có fail-safe. Double acting: khí 2 phía → lực lớn nhất → KHÔNG có fail-safe tự nhiên → cần trip valve 377 + volume tank.\nKết hợp Scotch-yoke: piston linear → xoay 90° cho ball/butterfly (nếu van rotary lớn).\nDùng cho van cầu lớn (lực lớn, hành trình dài) và van cửa (gate valve tự động).\nTại NM: một số van cầu lớn dùng piston actuator với lò xo có fail-safe.',
        equip:'Fisher 585C, 685 (linear piston)\nFisher 1080 (scotch-yoke rotary)\nTrip valve 377 cho double acting\nVolume tank (bình tích áp)',
        params:'Áp lực: đến 10 bar (150 psi)\nDouble acting: lực lớn nhất\nSingle acting: lực lớn + fail-safe lò xo\nCần trip valve 377 nếu double acting' },

      { id:10, stt:'A4', cat:'act', name:'Actuator Electrohydraulic', sub:'Governor máy nén · Fisher · Đáp ứng nhanh ms',
        goal:'Điều khiển van governor của máy nén tốc độ cao (speed control). Đáp ứng cực nhanh (milliseconds), lực lớn, độ chính xác cao.',
        detail:'Nguyên lý: Bơm thủy lực điện tử + servo valve (I/H converter) điều khiển dầu thủy lực → tác động lên piston thủy lực → dịch chuyển stem.\nI/H converter: chuyển đổi tín hiệu điện sang tín hiệu thủy lực (tương tự I/P nhưng dùng dầu).\nỨng dụng: van governor (speed control) của máy nén Ammonia, CO₂ tại NM – cần đáp ứng trong ms.\nFisher Electrohydraulic tại NM Đạm Cà Mau.\nƯu: cực nhanh, lực rất lớn. Nhược: phức tạp, cần bơm thủy lực, chi phí cao.',
        equip:'Fisher Electrohydraulic Actuator\nI/H Converter (điện → thủy lực)\nBơm thủy lực tích hợp\nServo valve điều khiển dầu',
        params:'Đáp ứng: < 100 ms\nLực: rất lớn (thủy lực)\nI/H converter: điện → thủy lực\nDùng cho governor van máy nén' },

      { id:11, stt:'A5', cat:'act', name:'Actuator Motor Điện – MOV', sub:'Rotork · Auma · Biffi · 24V–380VAC · Không cần khí nén',
        goal:'Dùng cho khu vực không có khí nén. Tích hợp bus truyền thông HART/Profibus. Rotork, Auma, Biffi tại NM. Phù hợp on-off và điều tiết chậm.',
        detail:'Nguyên lý: Motor điện AC/DC + hộp số giảm tốc → xoay (part-turn 90°) hoặc nhiều vòng (multi-turn) hoặc tuyến tính (linear thrust).\nKhi mở: nguồn điện → mạch điện → motor → mô-men xoắn → van mở. Khi đóng: chiều ngược. Công tắc hành trình ngắt điện khi hoàn thành.\nLoại:\n• Multi-turn: gate, globe (nhiều vòng quay).\n• Part-turn (quarter-turn): ball, butterfly, plug (90°).\nHãng tại NM: Rotork, Auma, Biffi.\nFail-safe: không tự nhiên → cần UPS hoặc spring-return.\nƯu: không cần khí, nhỏ gọn, remote control, điều tiết chính xác. Nhược: chậm, cần nguồn điện.',
        equip:'Rotork IQ3, AQ (multi-turn, part-turn)\nAuma SAR, SA (AC 3-pha)\nBiffi (part-turn)\nCông tắc hành trình ngắt điện tự động',
        params:'Nguồn: 24VDC / 110-220VAC / 380VAC 3-pha\nTốc độ: 10-60 s/stroke\nComm: HART, Profibus, Modbus\nFail-safe: cần UPS hoặc spring-return' },

      /* ========== POSITIONER & PHỤ KIỆN ========== */
      { id:12, stt:'P1', cat:'pos', name:'Positioner – Bộ định vị van', sub:'3 loại: Pneumatic · Analog I/P · Smart HART/FF · Fisher DVC6200',
        goal:'Điều chỉnh vị trí van chính xác theo tín hiệu điều khiển. Hoạt động như PID thứ 2: vị trí van là PV, tín hiệu DCS là SP, áp khí đến actuator là MV.',
        detail:'KHÁI NIỆM: Positioner so sánh vị trí thực của van (phản hồi cơ học/cảm biến) với setpoint từ DCS → điều chỉnh áp khí cấp/xả actuator → đưa van về vị trí chính xác.\n3 LOẠI POSITIONER:\n1. Pneumatic (Khí nén): tín hiệu vào 3-15 psi khí nén → ra 3-15 psi. Cổ điển, dùng với I/P trước nó.\n2. Analog I/P (Electric/Pneumatic): tín hiệu vào 4-20mA DC → ra 3-15 psi khí nén. Phổ biến nhất hiện nay.\n3. Smart/Digital: tín hiệu 4-20mA + HART (hoặc Foundation Fieldbus, Profibus PA). Có vi xử lý, self-calibration, valve signature diagnostic, giao tiếp 2 chiều với DCS/PRM.\nFisher DVC6200 tại NM: Smart HART positioner. Chẩn đoán xu hướng ma sát, stiction, dead band.\nPositioner = BẮT BUỘC cho van điều tiết (van cầu). KHÔNG cần cho van on-off.',
        equip:'Fisher DVC6200 (Smart HART, tại NM)\nFisher DVC6000, Fisher 3582 (pneumatic)\nSiemens SIPART PS2\nFoxboro, ABB TZID-C',
        params:'Pneumatic: 3-15 psi in → 3-15 psi out\nAnalog I/P: 4-20mA → 3-15 psi\nSmart: HART / FF / Profibus PA\nSelf-calibration · Valve signature' },

      { id:13, stt:'P2', cat:'pos', name:'Regulator · Volume Booster · I/P Converter', sub:'Điều áp · Khuếch đại lưu lượng · Chuyển đổi tín hiệu',
        goal:'Regulator cài đặt áp nguồn khí đúng bench set. Volume Booster tăng tốc độ đáp ứng van lớn. I/P Converter dùng thay positioner cho van on-off/van cũ.',
        detail:'REGULATOR (Bộ điều áp – Fisher 67D/67C):\n• Điều chỉnh áp suất nguồn khí cấp cho positioner/actuator đúng bench set.\n• Nguyên lý: quay núm → nén lò xo → plug mở valve → khí qua filter ra outlet. Áp out phản hồi màng → cân bằng.\n• Setpoint: 20-100 PSIG.\nVOLUME BOOSTER (Bộ khuếch đại – Fisher 2625/2625NS):\n• Khuếch đại lưu lượng khí (không khuếch đại áp suất) từ positioner → actuator đáp ứng nhanh hơn cho van lớn.\n• Tỷ lệ 1:1 áp suất. Lắp song song với positioner.\n• Bypass valve điều chỉnh ổn định. Đóng needle valve → tăng tốc, mở → ổn định.\nI/P CONVERTER (Bộ chuyển đổi điện-khí – Fisher 546):\n• Nhận 4-20mA → xuất 3-15 psi (open-loop, không có feedback vị trí).\n• Dùng thay positioner cho van on-off hoặc van cũ không cần điều tiết chính xác.',
        equip:'Fisher 67D, 67C (Regulator)\nFisher 2625, 2625NS (Volume Booster)\nFisher 546, 546E (I/P Converter)\nSMC IP6000 (I/P)',
        params:'Regulator: ổn áp 20-100 PSIG\nBooster: tăng Cv lưu lượng khí (1:1 áp)\nI/P: 4-20mA → 3-15 psi (open-loop)\nDùng cho van lớn / van cũ' },

      { id:14, stt:'P3', cat:'pos', name:'Lock-up · Air Relay · Trip Valve 377 · Solenoid · LSB', sub:'Phụ kiện an toàn và giám sát vị trí van',
        goal:'Các phụ kiện đảm bảo fail-safe (lock-up, trip valve 377), on-off nhanh (solenoid), chuyển mạch khí (air relay), giám sát vị trí (limit switch box).',
        detail:'LOCK-UP VALVE (Ví dụ: Fisher 67D khi dùng như lock-up):\n• Giữ khí trong actuator khi mất áp nguồn → van giữ vị trí (Fail Last).\n• Setpoint điều chỉnh bằng vặn nút: CW = tăng, CCW = giảm. Phạm vi: 20-100 PSIG.\nAIR RELAY (Ví dụ: Bifold SPR-08):\n• 3 ngõ (1,2,3): chuyển hướng tín hiệu khí khi có/mất air signal.\n• Bình thường không có air signal: ngõ 3&2 thông. Có air signal: ngõ 1&2 thông.\nTRIP VALVE FISHER 377 (Double air relay):\n• Tích hợp 2 air relay trong 1, dùng cho piston double acting.\n• 3 chế độ lắp: FC (bình tích áp 1 ngõ), FL (bịt kín 2 ngõ C&F), FO (đảo ngược C&F).\nSOLENOID VALVE (ASCO, Parker, Joucomatic):\n• 2-way NC, 2-way NO, 3-way, 4-way.\n• De-energized = vị trí fail. Ưu: đóng/mở nhanh, nhỏ gọn, giá thấp.\nLIMIT SWITCH BOX (LSB – Topwork tại NM):\n• Báo vị trí đóng/mở (ON/OFF) của van về DCS/ESD (tín hiệu DI).\n• Loại cơ: micro-switch (nút nhấn, bánh xe, chốt kéo). Loại tiệm cận: từ (inductance) hoặc điện dung (capacitance).',
        equip:'Fisher 377 Trip Valve (piston DA)\nBifold SPR-08 (Air Relay)\nASCO, Parker (Solenoid)\nTopwork LSB (tại NM)',
        params:'Lock-up: FL giữ vị trí\n377: FC/FL/FO cho piston DA\nSolenoid: de-energ = fail\nLSB: DI → DCS/ESD feedback' },

      /* ========== FAIL-SAFE & KẾT NỐI ========== */
      { id:15, stt:'F1', cat:'fs', name:'Fail-safe: DA/RA × ATC/ATO → FC/FO/FL', sub:'Ma trận vị trí an toàn khi mất tín hiệu · Bench set',
        goal:'Xác định vị trí van khi mất tín hiệu, khí nén hoặc điện. Thiết kế fail-safe theo yêu cầu công nghệ an toàn (SIL, HAZOP).',
        detail:'ACTUATOR ACTION:\n• DA (Direct Acting): áp tăng → stem xuống.\n• RA (Reverse Acting): áp tăng → stem lên.\nBODY ACTION:\n• ATC (Air-To-Close): cấp khí → van đóng.\n• ATO (Air-To-Open): cấp khí → van mở.\nMẤT KHÍ → LÒ XO TRẢ VỀ FAIL POSITION:\n• DA + đặt body ATO → FC (Fail Close): mất khí → lò xo đóng van.\n• RA + đặt body ATC → FC tương tự.\n• DA + đặt body ATC → FO (Fail Open): mất khí → lò xo mở van.\n• RA + đặt body ATO → FO tương tự.\nFL (Fail Last): piston double acting + lock-up valve → giữ vị trí khi mất khí.\nÁP DỤNG:\n• FC: lưu chất nguy hiểm (NH₃, HC), phòng cháy.\n• FO: làm mát, quench, steam cung cấp.\n• FL: ít dùng, cần technical justification.',
        equip:'Lò xo trong actuator (FC/FO)\nLock-up Valve (FL)\nFisher 377 Trip Valve (FL/FC/FO piston DA)\nVolume tank (bình tích áp)',
        params:'FC: dòng nguy hiểm (NH₃, HC)\nFO: làm mát / quench / steam\nFL: giữ vị trí, cần lock-up\nFisher 377: 3 chế độ đấu nối' },

      { id:16, stt:'F2', cat:'fs', name:'Vòng lặp điều khiển P&ID & Ký hiệu van', sub:'Control Loop · FT→FIC→FY→van→FT · Ký hiệu ISA',
        goal:'Hiểu vòng lặp điều khiển hoàn chỉnh qua van trên P&ID. Đọc ký hiệu van (FC, FO, FL, FI) và symbol solenoid theo ISA.',
        detail:'VÒNG LẶP ĐIỀU KHIỂN LƯU LƯỢNG (ví dụ):\n• FT (Flow Transmitter): đo lưu lượng, xuất 4-20mA → DCS.\n• FIC (Flow Indicating Controller) trong DCS: so sánh PV vs SP → tính PID output 4-20mA.\n• FY (Transducer/I/P): chuyển 4-20mA → 3-15 psi khí nén (hoặc positioner nhận trực tiếp).\n• Positioner: nhận 3-15 psi (hoặc 4-20mA) + đo vị trí van → điều chỉnh khí actuator.\n• Van di chuyển → thay đổi lưu lượng → FT đo lại → vòng lặp tiếp tục.\nKÝ HIỆU TRÊN P&ID:\n• FC dưới ký hiệu van: mất tín hiệu → đóng.\n• FO: mất tín hiệu → mở.\n• FL: mất tín hiệu → giữ nguyên.\n• FI: không xác định.\nSOLENOID:\n• 2-way NC, 2-way NO, 3-way (P-E-C), 4-way (P-E-A-B).\n• Ký hiệu ISA: mũi tên D (de-energized) và E (energized).',
        equip:'FT: transmitter lưu lượng\nFIC: controller trong DCS\nFY: I/P converter (transducer)\nPositioner (DVC6200)',
        params:'DCS out: 4-20mA → FY (I/P)\nI/P: 3-15 psi → positioner\nPositioner: feedback + điều chỉnh\nLoop: FC/FO/FL ký hiệu P&ID' },
    ],
    mindmap: {
      nodes: [
        /* Body (left, x=30, w=190) */
        { id:'globe',     x:30,  y:48,  w:190, h:48, label:'Van cầu (Globe)\nEqual% · DA/RA · Fisher', cat:'body', sub:'product' },
        { id:'gate',      x:30,  y:112, w:190, h:44, label:'Van cửa (Gate)\nOn-off · Full-bore · 04HV-2082', cat:'body' },
        { id:'ball',      x:30,  y:172, w:190, h:44, label:'Van bi (Ball)\nR&P · V-ball · Rotork', cat:'body' },
        { id:'butterfly', x:30,  y:232, w:190, h:44, label:'Van bướm (Butterfly)\nTomoe · R&P · 04HV-5003', cat:'body' },
        { id:'plug',      x:30,  y:292, w:190, h:44, label:'Van nút (Plug)\nXoay 90° · 3-way', cat:'body' },
        { id:'diaphm',    x:30,  y:352, w:190, h:44, label:'Van màng (Diaphragm)\nĂn mòn · ITT', cat:'body' },
        { id:'check',     x:30,  y:412, w:190, h:44, label:'Van 1 chiều (Check)\nThụ động · Không actuator', cat:'body' },
        /* Actuator (center-left, x=285, w=200) */
        { id:'spr',    x:285, y:62,  w:200, h:62, label:'Diaphragm/Spring\nDA 657 · RA 667 · 2-7 bar\nFail-safe lò xo tự nhiên', cat:'act', sub:'product' },
        { id:'rp',     x:285, y:152, w:200, h:55, label:'Rack & Pinion\nXoay 90° · Single/Double\nBall · Butterfly · Plug', cat:'act' },
        { id:'piston', x:285, y:230, w:200, h:55, label:'Piston Actuator\n≤10 bar · Lực lớn\nDouble: cần trip valve', cat:'act' },
        { id:'eh',     x:285, y:313, w:200, h:52, label:'Electrohydraulic\nGovernor máy nén\nFisher · I/H · Nhanh ms', cat:'act' },
        { id:'mov',    x:285, y:386, w:200, h:55, label:'Electric Motor (MOV)\nRotork · Auma · Biffi\n24V-380VAC · Không khí', cat:'act' },
        /* Positioner & Accessories (center-right, x=555, w=190) */
        { id:'smart',  x:555, y:48,  w:190, h:58, label:'Smart Positioner\nHART · FF · Profibus\nFisher DVC6200 (NM)', cat:'pos', sub:'product' },
        { id:'ip',     x:555, y:132, w:190, h:44, label:'Analog I/P\n4-20mA → 3-15 psi\nFisher 546', cat:'pos' },
        { id:'pneu',   x:555, y:192, w:190, h:44, label:'Pneumatic Positioner\n3-15 psi → 3-15 psi\nFisher 3582', cat:'pos' },
        { id:'reg',    x:555, y:254, w:190, h:44, label:'Regulator\nĐiều áp bench set\nFisher 67D/67C', cat:'pos' },
        { id:'boost',  x:555, y:314, w:190, h:44, label:'Volume Booster\nKhuếch đại lưu lượng\nFisher 2625', cat:'pos' },
        { id:'sv',     x:555, y:374, w:190, h:44, label:'Solenoid Valve\n24VDC · 2/3/4-way\nDe-energ = fail', cat:'pos' },
        { id:'lsb',    x:555, y:430, w:190, h:44, label:'Limit Switch Box\nOpen/Close DI\nTopwork (NM)', cat:'pos' },
        /* Fail-safe (right, x=820, w=190) */
        { id:'fc',    x:820, y:62,  w:190, h:52, label:'FC – Fail Close\nDA+ATO hoặc RA+ATC\nDòng nguy hiểm NH₃/HC', cat:'fs' },
        { id:'fo',    x:820, y:142, w:190, h:52, label:'FO – Fail Open\nDA+ATC hoặc RA+ATO\nLàm mát · Quench', cat:'fs' },
        { id:'fl',    x:820, y:222, w:190, h:52, label:'FL – Fail Last\nPiston + Lock-up\nGiữ vị trí cuối', cat:'fs' },
        { id:'t377',  x:820, y:306, w:190, h:55, label:'Trip Valve 377\n2 Air Relay tích hợp\nFC / FL / FO cho Piston', cat:'fs' },
        { id:'loop',  x:1080, y:155, w:210, h:90, label:'Control Loop\nFT→FIC→FY→POS\n→ACT→VAN→FT\nDCS PID 4-20mA', cat:'fs', sub:'product' },
      ],
      edges: [
        /* Body → Actuator */
        { from:'globe',     to:'spr',    color:'blue',   label:'DA/RA' },
        { from:'globe',     to:'piston', color:'blue',   label:'Van lớn' },
        { from:'gate',      to:'rp',     color:'cyan',   label:'R&P' },
        { from:'gate',      to:'piston', color:'cyan' },
        { from:'ball',      to:'rp',     color:'cyan',   label:'R&P phổ biến' },
        { from:'ball',      to:'mov',    color:'purple', label:'Rotork/Auma' },
        { from:'butterfly', to:'rp',     color:'cyan',   label:'Tomoe' },
        { from:'butterfly', to:'mov',    color:'purple' },
        { from:'plug',      to:'rp',     color:'cyan' },
        { from:'diaphm',    to:'spr',    color:'blue' },
        /* Actuator → Positioner */
        { from:'spr',    to:'smart',  color:'green', label:'Positioner' },
        { from:'spr',    to:'ip',     color:'green' },
        { from:'spr',    to:'pneu',   color:'green' },
        { from:'piston', to:'smart',  color:'green' },
        { from:'piston', to:'t377',   color:'amber', label:'Fail-safe' },
        { from:'rp',     to:'sv',     color:'orange', label:'On-off' },
        { from:'mov',    to:'smart',  color:'green', label:'HART' },
        /* Positioner → fail outcomes */
        { from:'reg',    to:'spr',    color:'gray',  dashed:true, label:'Ổn áp' },
        { from:'boost',  to:'spr',    color:'gray',  dashed:true, label:'Tăng lưu lượng' },
        { from:'sv',     to:'spr',    color:'orange' },
        { from:'sv',     to:'rp',     color:'orange' },
        { from:'lsb',    to:'loop',   color:'green', label:'DI feedback' },
        /* Fail-safe */
        { from:'spr',  to:'fc',    color:'gray', dashed:true, label:'Lò xo FC' },
        { from:'spr',  to:'fo',    color:'gray', dashed:true, label:'Lò xo FO' },
        { from:'t377', to:'fc',    color:'amber', label:'Đấu nối FC' },
        { from:'t377', to:'fl',    color:'amber', label:'Đấu nối FL' },
        { from:'t377', to:'fo',    color:'amber' },
        /* → Control Loop */
        { from:'smart', to:'loop', color:'blue',  label:'4-20mA' },
        { from:'fc',    to:'loop', color:'gray',  dashed:true },
        { from:'fo',    to:'loop', color:'gray',  dashed:true },
        { from:'fl',    to:'loop', color:'gray',  dashed:true },
      ],
      zones: [
        { x:15,   y:30,  w:225, h:448, label:'THÂN VAN (BODY)',         color:'amo'     },
        { x:270,  y:45,  w:235, h:415, label:'ACTUATOR',                color:'esd'     },
        { x:540,  y:30,  w:220, h:465, label:'POSITIONER & PHỤ KIỆN',   color:'urea'    },
        { x:805,  y:45,  w:225, h:340, label:'FAIL-SAFE',               color:'granule' },
        { x:1065, y:130, w:255, h:160, label:'CONTROL LOOP',            color:'mid'     },
      ],
      legend: [
        { label:'Thân van (Body)',          color:'#0891b2' },
        { label:'Actuator',                 color:'#dc2626' },
        { label:'Positioner & Phụ kiện',    color:'#047857' },
        { label:'Fail-safe & Kết nối',      color:'#d97706' },
      ]
    },
    flashcards: [
      /* ── 25 CÂU HỎI ÔN TẬP CHÍNH THỨC – GT-ĐK-028 ── */
      { q:'Positioner trong van điều khiển dùng để làm gì?', a:'Để điều chỉnh vị trí van cho chính xác. Positioner hoạt động như bộ điều khiển PID thứ 2: vị trí van là PV, tín hiệu DCS là SP, áp khí đến actuator là MV.', cat:'pos' },
      { q:'Sự khác nhau giữa van 2 ngả và van 3 ngả là gì?', a:'Van 2 ngả: dùng để khống chế/điều tiết dòng lưu chất (on-off hoặc throttling). Van 3 ngả: dùng để trộn 2 dòng lưu chất hoặc chuyển hướng dòng lưu chất.', cat:'body' },
      { q:'Hai yếu tố cơ bản để van điều khiển "điều khiển được" là gì?', a:'Độ chênh lệch áp suất qua van (ΔP) và lưu lượng qua van (Q). Công thức: Q = Cv × √(ΔP/SG). Áp suất giảm qua van lớn hơn → lưu lượng cao hơn.', cat:'body' },
      { q:'11 bar bằng bao nhiêu Pa và PSI?', a:'11 bar = 1.100.000 Pa = 159,5 PSI. (1 bar = 100.000 Pa = 14,504 PSI; 11 × 14,504 = 159,5 PSI)', cat:'act' },
      { q:'Áp suất rơi trên van và lưu lượng qua van có mối quan hệ thế nào?', a:'Áp suất rơi (ΔP) trên van CÀNG LỚN → lưu lượng qua van CÀNG LỚN (Q = Cv × √ΔP). Tuy nhiên khi ΔP quá lớn sẽ xảy ra dòng bị nghẹt (choked flow) – lưu lượng không tăng thêm nữa.', cat:'body' },
      { q:'Đặc tính lưu lượng X=fast opening, Y=linear, Z=equal percentage: đặc điểm từng loại?', a:'Fast-opening (X): mở nhỏ đã cho lưu lượng lớn (25% → ~80% max) – dùng on-off.\nLinear (Y): lưu lượng tỷ lệ tuyến tính với độ mở – dùng áp suất ổn định.\nEqual% (Z): mỗi % hành trình tăng % Cv bằng nhau – dùng PID, áp suất thay đổi.', cat:'body' },
      { q:'Khi cần điều khiển với độ chính xác cao, thường dùng loại van nào?', a:'Van cầu (Globe valve). Có positioner, đặc tính equal% hoặc linear, rangeability 50:1. Phổ biến nhất tại NM Đạm Cà Mau, hãng Fisher (GX, ED, EZ).', cat:'body' },
      { q:'Nhận biết tên 3 loại van qua hình ký hiệu P&ID: globe, check, butterfly?', a:'Globe valve: ký hiệu hình tam giác/bowtie với vòng tròn. Check valve: ký hiệu có mũi tên 1 chiều. Butterfly valve: ký hiệu đĩa tròn xoay. (Theo ISA 5.1)', cat:'body' },
      { q:'Van on-off có cần positioner không? Tại sao?', a:'KHÔNG cần positioner. Van on-off chỉ cần 2 vị trí (đóng/mở hoàn toàn), không cần feedback vị trí liên tục. Dùng solenoid valve hoặc on-off signal trực tiếp thay thế. Positioner chỉ cần cho van ĐIỀU TIẾT.', cat:'pos' },
      { q:'Sắp xếp các chi tiết actuator diaphragm theo thứ tự từ trên xuống: (1) đến (6)?', a:'(1) Diaphragm (màng). (2) Actuator spring (lò xo). (3) Spring seat (đế lò xo). (4) Actuator stem (ty actuator). (5) Stem connector (khớp nối ty). (6) Indicator scale (thước chỉ thị hành trình).', cat:'act' },
      { q:'Positioner dùng để làm gì trong van điều khiển? (Câu hỏi ôn tập lần 2)', a:'Điều chỉnh vị trí van cho chính xác bằng cách so sánh vị trí thực (PV) với tín hiệu đặt (SP) và điều chỉnh áp khí đến actuator (MV) theo nguyên lý PID thu nhỏ.', cat:'pos' },
      { q:'Sắp xếp các chi tiết van cầu từ ngoài vào trong: Packing, bonnet, body, plug, seat?', a:'Đúng thứ tự: (1) Packing (gioăng làm kín stem). (2) Bonnet (nắp thân trên). (3) Body (thân van). (4) Plug (chốt van/trim). (5) Seat (đế van/seat ring). Trim = Plug + Seat + Cage.', cat:'body' },
      { q:'Actuator màng lò xo DA (stem xuống khi cấp khí) kết hợp body ATO → đây là loại van nào?', a:'Fail Close (FC) – Air To Open. Khi mất khí: lò xo đẩy stem xuống → đóng van. Loại van: Fail Close (Air-To-Open body + DA actuator). Fisher 657 + down-to-open body.', cat:'fs' },
      { q:'Actuator màng lò xo DA (stem xuống khi cấp khí) kết hợp body ATC → đây là loại van nào?', a:'Fail Open (FO) – Air To Close. Khi mất khí: lò xo đẩy stem xuống → body ATC → đóng van... Sai! Phải là: DA + ATC = stem xuống = đóng khi cấp khí → Fail Open khi mất khí = van mở. FO = Fail Open.', cat:'fs' },
      { q:'Positioner pneumatic + bộ điều khiển xuất tín hiệu điện 4-20mA → cần thêm thiết bị gì?', a:'Cần I/P Converter (bộ chuyển đổi điện-khí nén). I/P nhận 4-20mA DC → xuất 3-15 psi cho positioner pneumatic. Ký hiệu: FY trên P&ID.', cat:'pos' },
      { q:'Có bao nhiêu loại positioner (bộ định vị van)? Kể tên.', a:'3 loại: (1) Pneumatic (khí nén): in 3-15 psi, out 3-15 psi. (2) Analog I/P (electric/pneumatic): in 4-20mA, out 3-15 psi. (3) Smart/Digital: HART, Foundation Fieldbus hoặc Profibus PA.', cat:'pos' },
      { q:'Thiết bị nào dùng để điều chỉnh áp suất nguồn khí cho phù hợp bench set của actuator?', a:'Bộ điều áp – Pressure Regulator (Ví dụ: Fisher 67D/67C). Điều chỉnh áp nguồn khí cấp vào actuator/positioner đúng giá trị bench set do nhà sản xuất quy định.', cat:'pos' },
      { q:'Regulator lắp đặt trên thân van dùng để làm gì?', a:'Cài đặt áp suất cấp vào actuator đúng theo giá trị bench set cho phép. Bench set là khoảng áp để đóng/mở hoàn toàn van (VD: 3-13 psi, 5-15 psi). Regulator giảm áp nguồn cao xuống đúng bench set.', cat:'pos' },
      { q:'Thiết bị nào giữ khí nén trong actuator làm cho van giữ nguyên vị trí khi mất khí?', a:'Lock-up Valve (van khóa). Khi mất áp nguồn khí: lock-up valve cô lập/khóa khí trong actuator → van không thay đổi vị trí = Fail Last (FL). Điều chỉnh setpoint 20-100 PSIG.', cat:'pos' },
      { q:'Travel (hành trình) van 3,5 inch bằng bao nhiêu mm?', a:'3,5 inch × 25,4 mm/inch = 88,9 mm ≈ 89 mm. (1 inch = 25,4 mm)', cat:'act' },
      { q:'Travel (hành trình) van 1,5 inch bằng bao nhiêu mm?', a:'1,5 inch × 25,4 mm/inch = 38,1 mm ≈ 38 mm. (1 inch = 25,4 mm)', cat:'act' },
      { q:'Đồng hồ áp suất đầu vào positioner DVC6010S có phạm vi 0-4 bar. Chọn đồng hồ psi thay thế?', a:'4 bar × 14,504 = 58 psi → chọn đồng hồ 0-60 psi (phù hợp nhất, bao phủ được 58 psi và không quá lớn).', cat:'pos' },
      { q:'Positioner dùng tín hiệu điều khiển khí nén 3-15 psi là loại positioner nào?', a:'Bộ định vị khí nén (Pneumatic Positioner). Tín hiệu vào 3-15 psi khí nén, ra 3-15 psi khí nén. Cổ điển, cần I/P trước nó nếu DCS xuất 4-20mA. Fisher 3582.', cat:'pos' },
      { q:'Hệ số Cv của van là gì? Công thức tính Cv?', a:'Cv = số GPM nước (60°F) chảy qua van mở hoàn toàn với ΔP = 1 psi. Công thức: Cv = Q × √(SG/ΔP) với Q (GPM), SG (tỷ trọng, nước=1), ΔP (psi). Cv lớn → van cho qua nhiều hơn ở cùng ΔP.', cat:'body' },
      { q:'Lực tác động lên valve stem: diện tích màng 200 mm², áp suất 15 psi. Tính lực F?', a:'F = A × P = 200×10⁻⁶ m² × (15 × 6894 N/m²) = 0,0002 × 103.410 = 20,682 N. (1 psi = 6.894 Pa = 6.894 N/m²)', cat:'act' },
      /* ── Bổ sung từ nội dung kỹ thuật quan trọng ── */
      { q:'Bench set là gì? Tại sao là thông số quan trọng nhất của actuator?', a:'Bench set = khoảng áp suất khí tác động lên màng để van đi từ vị trí mở hoàn toàn đến đóng hoàn toàn (không gắn body). VD: DA 3-13 psi, RA 5-15 psi. Quan trọng vì xác định phạm vi điều tiết và tuning của positioner.', cat:'act' },
      { q:'Dead band của van điều khiển là gì? Nguyên nhân?', a:'Dead band = khoảng hành trình van KHÔNG thay đổi khi áp suất màng thay đổi. Nguyên nhân: ma sát packing & seal. Biểu thị bằng % span. Positioner giúp giảm dead band (kín vòng lặp vị trí).', cat:'act' },
      { q:'Trip valve 377 (Fisher) là gì? Khác air relay thế nào?', a:'Trip valve 377 = tích hợp 2 air relay trong 1 thiết bị. Dùng cho piston double acting không có lò xo. Có 3 chế độ đấu nối: FC (bình tích áp 1 ngõ), FL (bịt kín 2 ngõ C&F), FO (đảo C&F). Air relay đơn chỉ có 1 bộ, 3 ngõ.', cat:'fs' },
      { q:'Actuator Rack & Pinion: Single acting vs Double acting – fail-safe khác nhau thế nào?', a:'Single acting: 1 phía khí nén + lò xo đối nghịch → fail-safe tự nhiên (FC hoặc FO khi mất khí). Double acting: 2 phía khí nén thay nhau → lực lớn hơn NHƯNG không có fail-safe tự nhiên → cần trip valve 377 hoặc lock-up valve.', cat:'act' },
    ]
  },

"""

with open('C:/Users/PHUOC VINH/PVCFC-KNL/other-skills.js', 'w', encoding='utf-8') as f:
    f.write(prefix + NEW_VAN + suffix)
print('Done. File written.')
