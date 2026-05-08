
// ===== DATA =====
const data = [
  {
    id: 0, stt: 1, factory: 'amo', factoryName: 'AMMONIA',
    name: '1. Khử lưu huỳnh', sub: 'Desulfurization',
    goal: 'Loại bỏ lưu huỳnh (S) trong khí tự nhiên đầu vào để tránh "ngộ độc" xúc tác tại Primary Reformer. Lưu huỳnh dù ở lượng rất nhỏ cũng làm mất hoạt tính xúc tác.',
    input: 'Khí tự nhiên (NG) từ GPP Cà Mau\nHydro tuần hoàn (H₂)',
    output: 'Khí tự nhiên đã khử S (tổng S < 0.05 ppm)\n→ Đưa đến Reforming',
    principle: '① Hydro hóa: Lưu huỳnh hữu cơ & vô cơ phản ứng với H₂ tại R04201 (xúc tác Co-Mo TK-250, hiện dùng Ni-Mo TK-261) → chuyển thành H₂S.\n② Hấp phụ: H₂S đi qua R04202A/B chứa ZnO (HTZ-5) → ZnO + H₂S → ZnS + H₂O, loại sạch H₂S.',
    equipment: 'R04201: Hydrogenator (xúc tác Co-Mo/Ni-Mo)\nR04202A/B: Sulphur Absorber (ZnO)\nE04204-1/2/3: Feed Gas Preheater',
    params: 'Tỉ lệ H₂/HC ≈ 0.05 Nm³/kg\nNhiệt độ vào R04201 ≈ 350°C\nS ra khỏi R04202A < 0.05 ppm'
  },
  {
    id: 1, stt: 2, factory: 'amo', factoryName: 'AMMONIA',
    name: '2. Reforming', sub: 'Primary & Secondary',
    goal: 'Chuyển hóa khí tự nhiên (CH₄), hơi nước và không khí thành H₂ và N₂ — hai nguyên liệu chính để tổng hợp NH₃.',
    input: 'Khí tự nhiên đã khử S\nHơi nước cao áp (Steam)\nKhông khí (Process Air)',
    output: 'Khí tổng hợp giàu H₂ và N₂\nCO, CO₂ (sản phẩm phụ)\n→ Đưa đến cụm Chuyển hóa CO',
    principle: '① Primary Reformer (F04201): CH₄ + H₂O → CO + 3H₂ (phản ứng thu nhiệt, cần đốt ngoài ống xúc tác). Nhiệt độ ra ~800°C.\n② Secondary Reformer (R04203): Thêm không khí (N₂ + O₂), O₂ đốt cháy một phần H₂ để cấp nhiệt, đồng thời đưa N₂ vào đúng tỉ lệ H₂:N₂ = 3:1.',
    equipment: 'F04201: Primary Reformer\nR04203: Secondary Reformer\nE04201: Feed Gas/Steam Preheater\nK04421: Process Air Compressor',
    params: 'Nhiệt độ vào F04201 ≈ 535°C\nNhiệt độ ra F04201 ≈ 800°C\nÁp suất ≈ 3.43 MPaG'
  },
  {
    id: 2, stt: 3, factory: 'amo', factoryName: 'AMMONIA',
    name: '3. Chuyển hóa CO', sub: 'CO Shift — HTS & LTS',
    goal: 'Chuyển CO (độc, không dùng được) thành CO₂ (dễ tách) và tạo thêm H₂, tăng hiệu suất thu hồi hydro.',
    input: 'Khí tổng hợp chứa CO, H₂, N₂, CO₂, H₂O từ Secondary Reformer',
    output: 'Khí có hàm lượng CO rất thấp\nCO₂ tăng lên\nH₂ tăng thêm\n→ Đưa đến cụm Tách CO₂',
    principle: 'Phản ứng Water-Gas Shift: CO + H₂O → CO₂ + H₂ (tỏa nhiệt).\n① HTS: Nhiệt độ cao (~350-420°C), xúc tác Fe-Cr, chuyển phần lớn CO.\n② LTS: Nhiệt độ thấp (~200-250°C), xúc tác Cu-Zn, chuyển nốt CO còn lại xuống rất thấp.',
    equipment: 'R04204: HTS Reactor (xúc tác Fe-Cr)\nR04206: LTS Reactor (xúc tác Cu-Zn)\nCác thiết bị trao đổi nhiệt trung gian',
    params: 'HTS: 350-420°C\nLTS: 200-250°C\nCO sau LTS còn rất thấp (< 0.3%)'
  },
  {
    id: 3, stt: 4, factory: 'amo', factoryName: 'AMMONIA',
    name: '4. Tách CO₂', sub: 'CO₂ Removal',
    goal: 'Loại bỏ CO₂ khỏi khí tổng hợp vì CO₂ là chất độc với xúc tác tổng hợp NH₃. Đồng thời thu hồi CO₂ để cấp cho xưởng Urê (1.790 tấn/ngày).',
    input: 'Khí tổng hợp chứa CO₂ (~18%)\nDung dịch hấp thụ (aMDEA)',
    output: 'Khí tổng hợp sạch CO₂\nCO₂ tinh khiết (≥99 vol%) → cấp cho xưởng Urê\n→ Khí đến cụm Mê tan hóa',
    principle: 'Sử dụng dung dịch aMDEA (activated Methyl Diethanolamine):\n① Hấp thụ: Khí đi từ dưới lên, dung dịch aMDEA đi từ trên xuống → CO₂ bị giữ lại.\n② Tái sinh: Dung dịch giàu CO₂ được đun nóng/giảm áp để giải phóng CO₂, dung dịch nghèo CO₂ quay lại.',
    equipment: 'C04301: CO₂ Absorber (tháp hấp thụ)\nC04302: CO₂ Stripper (tháp tái sinh)\nBơm dung dịch aMDEA\nCác thiết bị TĐN',
    params: 'CO₂ đầu ra ≥ 99 vol% (dry)\nCO₂ cấp Urê: 1.790 tấn/ngày\nÁp suất: 0.05 MPaG, 45°C'
  },
  {
    id: 4, stt: 5, factory: 'amo', factoryName: 'AMMONIA',
    name: '5. Mê tan hóa', sub: 'Methanation',
    goal: 'Loại bỏ vết CO và CO₂ còn sót lại (vài trăm ppm) vì chúng là chất độc xúc tác tổng hợp NH₃. Đây là bước "đánh bóng" cuối cùng cho khí.',
    input: 'Khí tổng hợp còn vết CO, CO₂ (vài trăm ppm)\nĐã qua tách CO₂',
    output: 'Khí tổng hợp sạch (CO + CO₂ < 5 ppm)\nChủ yếu H₂ và N₂ đúng tỉ lệ\n→ Đưa đến cụm Tổng hợp NH₃',
    principle: 'Phản ứng ngược của reforming:\nCO + 3H₂ → CH₄ + H₂O\nCO₂ + 4H₂ → CH₄ + 2H₂O\nXúc tác Ni ở ~300°C. Tiêu tốn ít H₂ nhưng đảm bảo khí tổng hợp đủ sạch.',
    equipment: 'R04207: Methanator (xúc tác Ni — PK-7R hoặc tương đương)',
    params: 'Nhiệt độ ≈ 300°C\nCO + CO₂ ra < 5 ppm'
  },
  {
    id: 5, stt: 6, factory: 'amo', factoryName: 'AMMONIA',
    name: '6. Tổng hợp NH₃', sub: 'Ammonia Synthesis Loop',
    goal: 'Phản ứng chính tạo ra sản phẩm ammonia (NH₃) lỏng từ N₂ và H₂. Đây là "trái tim" của xưởng.',
    input: 'Khí tổng hợp sạch (H₂ + N₂, tỉ lệ 3:1)\nKhí tuần hoàn chưa phản ứng hết',
    output: 'NH₃ lỏng (min 99.8 wt%)\n1.350 tấn/ngày\n→ Bồn chứa NH₃ / Xưởng Urê',
    principle: 'N₂ + 3H₂ ⇌ 2NH₃ + Q (tỏa nhiệt).\n① Nén khí (K04431) lên áp suất ~13.73 MPa.\n② Đun nóng qua TĐN lên ~254°C.\n③ Qua tháp R04501 xúc tác sắt → NH₃ hình thành.\n④ Làm lạnh, NH₃ ngưng tụ thành lỏng.\n⑤ Tách NH₃ lỏng tại S501, khí chưa phản ứng quay lại vòng tuần hoàn.',
    equipment: 'K04431: Synthesis Gas Compressor\nR04501: Ammonia Converter (xt sắt KM1-R, KM1)\nE501: Waste Heat Boiler\nE503: Hot Heat Exchanger\nE506/E508: Ammonia Chillers\nS501: Ammonia Separator',
    params: 'Áp suất: ~13.73 MPa\nNhiệt độ vào tháp: ~254°C\nNH₃ sản phẩm: ≥99.8 wt%\nNhiệt độ làm lạnh: đến -5°C'
  },
  {
    id: 6, stt: 7, factory: 'amo', factoryName: 'AMMONIA',
    name: '7. Vòng làm lạnh', sub: 'Refrigeration',
    goal: 'Cung cấp lạnh để ngưng tụ NH₃ từ khí tổng hợp, thu hồi NH₃ từ purge gas/inert gas, và hỗ trợ làm lạnh cho xưởng Urê (tạo hạt).',
    input: 'NH₃ lỏng làm môi chất lạnh\nHơi NH₃ sau khi bay hơi (hấp thu nhiệt)',
    output: 'NH₃ lỏng ở nhiệt độ thấp\nCấp lạnh cho các chiller E506, E508\nCấp lạnh cho xưởng Tạo hạt',
    principle: 'Chu trình lạnh nén hơi: NH₃ lỏng bay hơi (hấp thu nhiệt từ khí cần làm lạnh) → NH₃ hơi được máy nén nén lại → ngưng tụ thành lỏng bằng nước mát → quay lại chu trình.',
    equipment: 'Máy nén lạnh NH₃\nE506: 1st Ammonia Chiller\nE508: 2nd Ammonia Chiller\nBình ngưng tụ, bình chứa NH₃ lỏng',
    params: 'Nhiệt độ bay hơi: đến -33°C\nCấp lạnh cho nhiều hộ tiêu thụ'
  },
  {
    id: 7, stt: 8, factory: 'amo', factoryName: 'AMMONIA',
    name: '8. Thu hồi NH₃', sub: 'ARU — Ammonia Recovery Unit',
    goal: 'Thu hồi NH₃ từ các dòng khí thải (purge gas, letdown gas, inert gas) để không lãng phí sản phẩm và giảm ô nhiễm.',
    input: 'Purge gas, letdown gas, inert gas (chứa NH₃)\nNước hấp thụ',
    output: 'NH₃ thu hồi → quay lại hệ thống\nKhí sạch NH₃ → đuốc/nhiên liệu',
    principle: '① Hấp thụ NH₃ bằng nước trong các tháp hấp thụ (quá trình tỏa nhiệt).\n② Giải hấp bằng chưng cất: đun nóng dung dịch NH₃-nước → NH₃ bay hơi → ngưng tụ thu hồi.',
    equipment: 'C04551: Purge Gas Absorber\nC04552: Off-gas Absorber\nC04553: Distillation Column',
    params: 'NH₃ slip ra C04551 < 25 ppm\nNhiệt độ khí vào ≈ 54°C'
  },
  {
    id: 8, stt: 9, factory: 'amo', factoryName: 'AMMONIA',
    name: '9. Thu hồi H₂', sub: 'HRU — Hydrogen Recovery Unit',
    goal: 'Thu hồi H₂ từ purge gas (khí xả) để tái sử dụng, tăng hiệu suất sản xuất. Phần Off-gas dùng làm nhiên liệu đốt cho Reformer.',
    input: 'Purge gas (chứa H₂, N₂, CH₄, Ar, NH₃)',
    output: 'H₂ thu hồi → về đầu hút K04431\nOff-gas → nhiên liệu cho F04201',
    principle: 'Sử dụng rây phân tử (Molecular Sieve/PSA) để tách H₂ dựa trên kích thước phân tử. Hiệu quả phụ thuộc vào chênh áp qua thiết bị.',
    equipment: 'Cụm PSA (Pressure Swing Adsorption)\nCác bình chứa rây phân tử',
    params: 'Chênh áp qua thiết bị < 10 MPaG\nH₂ thu hồi đưa về K04431'
  },
  {
    id: 9, stt: 10, factory: 'urea', factoryName: 'UREA',
    name: '1. Nén CO₂', sub: 'CO₂ Compression',
    goal: 'Nén CO₂ từ áp suất thấp (0.05 MPaG) lên áp suất cao (15.8 MPaG) để đưa vào tháp tổng hợp Urê.',
    input: 'CO₂ (99%) từ xưởng Ammonia\nÁp suất 0.05 MPaG, 45°C\nPassivation Air (O₂ 0.25-0.35%)',
    output: 'CO₂ nén áp cao (15.8 MPaG)\n→ Đưa vào tháp tổng hợp Urê R06101',
    principle: 'Máy nén ly tâm 4 cấp, mỗi cấp tăng áp dần:\nSau cấp 1: 0.37 → cấp 2: 2.05 → cấp 3: 7.85 → cấp 4: 15.8 MPaG.\nGiữa các cấp có intercooler và bình tách lỏng. Dẫn động bằng turbine hơi KT06101 (hơi HS). Có hệ thống Anti-surge bảo vệ.',
    equipment: 'K06101: CO₂ Compressor (4 cấp)\nKT06101: Steam Turbine dẫn động\nS06119: Bình tách đầu vào\nCác TĐN & bình tách trung gian',
    params: 'Áp suất đầu ra: 15.8 MPaG\nTurbine dùng hơi HS\nO₂ thụ động hóa: 0.25-0.35% V'
  },
  {
    id: 10, stt: 11, factory: 'urea', factoryName: 'UREA',
    name: '2. Tổng hợp Urê cao áp', sub: 'HP Synthesis',
    goal: 'Phản ứng tạo Urê từ NH₃ và CO₂ qua 2 bước: tạo Carbamate trung gian, sau đó khử nước thành Urê.',
    input: 'NH₃ lỏng (bơm P06101, 250 barG)\nCO₂ nén (158 barG)\nCarbamate tuần hoàn',
    output: 'Dung dịch Urê 34%\nCarbamate chưa chuyển hóa\n→ Đưa đến Stripper E06101',
    principle: '2NH₃ + CO₂ → NH₂COONH₄ (Carbamate, tỏa nhiệt)\nNH₂COONH₄ → CO(NH₂)₂ + H₂O (Urê, thu nhiệt)\nTháp R06101 có 17 đĩa, cao 42.5m. Duy trì NH₃/CO₂ = 3.2-3.6, nhiệt độ 188°C, thời gian lưu 45 phút. Độ chuyển hóa ≈ 68%.',
    equipment: 'R06101: Urea Synthesis Reactor (17 đĩa, 42.5m)\nP06101: NH₃ High Pressure Pump\nS06101: HP Separator',
    params: 'Nhiệt độ: 188°C\nÁp suất: 15.6 MPa(a)\nNH₃/CO₂ = 3.2-3.6\nH₂O/CO₂ = 0.4-1.0\nNồng độ Urê ra: 34%\nThời gian lưu: 45 phút'
  },
  {
    id: 11, stt: 12, factory: 'urea', factoryName: 'UREA',
    name: '3. Phân giải & Thu hồi cao áp', sub: 'HP Decomposition — Stripper',
    goal: 'Phân giải Carbamate chưa chuyển hóa thành CO₂ và NH₃ để tuần hoàn lại tháp tổng hợp, đồng thời tăng nồng độ dung dịch Urê từ 34% → 43%.',
    input: 'Dung dịch Urê 34% từ R06101\nHơi trung áp (MS) gia nhiệt',
    output: 'Dung dịch Urê 43%\nKhí NH₃ + CO₂ → ngưng tụ tại Carbamate Condenser → tuần hoàn về R06101',
    principle: 'Stripper E06101 dạng ống chùm, gia nhiệt bằng hơi MS (217°C, 21.5 barG). Dung dịch chảy xuống dạng màng trong ống, CO₂ bị strip bởi NH₃ sôi mãnh liệt → pha hơi (NH₃ + CO₂) thoát ra đỉnh → ngưng tụ tại E06105A/B → tuần hoàn về R06101.',
    equipment: 'E06101: HP Stripper\nE06105A/B: Carbamate Condenser\nS06101: HP Separator\nP06102: Carbamate Pump',
    params: 'Nhiệt độ đáy: 204°C\nHơi MS: 217°C, 21.5 barG\nÁp suất VH: 147 barG\nUrê ra: 43%'
  },
  {
    id: 12, stt: 13, factory: 'urea', factoryName: 'UREA',
    name: '4. Phân giải & Thu hồi trung áp', sub: 'MP Decomposition',
    goal: 'Tiếp tục phân giải Carbamate còn lại ở áp suất trung bình, tăng nồng độ Urê lên 63%. Thu hồi NH₃ và CO₂ tuần hoàn.',
    input: 'Dung dịch Urê 43% từ E06101\nGiảm áp từ 14.7 → 1.95 MPaG',
    output: 'Dung dịch Urê 63%\nNH₃ thu hồi → bồn T06105\nCarbamate tuần hoàn → R06101',
    principle: 'S06102 (MPD) gồm 3 phần: bình tách khí, thiết bị phân giải dạng màng lỏng E06102A/B, bồn chứa T06122. Khí NH₃+CO₂ tách ra được hấp thụ tại C06101, dịch Carbamate bơm P06102 tuần hoàn về cao áp, NH₃ dư ngưng tụ tại E06109 → chứa T06105.',
    equipment: 'S06102: MP Decomposer\nE06102A/B: MP Heaters\nC06101: MP Absorber\nE06109: NH₃ Condenser\nT06105: NH₃ Storage',
    params: 'Áp suất: 1.95 MPaG\nUrê ra: 63%\nNH₃ thu hồi → T06105'
  },
  {
    id: 13, stt: 14, factory: 'urea', factoryName: 'UREA',
    name: '5. Phân giải & Thu hồi thấp áp', sub: 'LP Decomposition',
    goal: 'Phân giải nốt Carbamate còn sót ở áp suất thấp, tiếp tục tăng nồng độ Urê.',
    input: 'Dung dịch Urê 63% từ T06122\nGiảm áp xuống 0.42 MPaG',
    output: 'Dung dịch Urê nồng độ cao hơn\nKhí NH₃ + CO₂ → thu hồi\n→ Đưa đến cụm cô đặc',
    principle: 'Tương tự trung áp nhưng ở áp suất thấp hơn (0.42 MPaG). Dung dịch được gia nhiệt phân giải, khí tách ra được hấp thụ và tuần hoàn.',
    equipment: 'S06103: LP Decomposer\nE06107: LP Heater\nE06108: LP Condenser\nC06102: LP Absorber',
    params: 'Áp suất: 0.42 MPaG\nNhiệt độ: ~130°C'
  },
  {
    id: 14, stt: 15, factory: 'urea', factoryName: 'UREA',
    name: '6. Cô đặc chân không', sub: 'Vacuum Concentration',
    goal: 'Cô đặc dung dịch Urê đến 96% trước khi đưa sang tạo hạt. Loại bỏ nước thừa.',
    input: 'Dung dịch Urê từ LPD\nChân không',
    output: 'Dung dịch Urê 96%\n→ Đưa sang xưởng Tạo hạt',
    principle: 'Bay hơi nước trong điều kiện chân không (áp suất thấp → nhiệt độ sôi giảm → tránh phân hủy Urê ở nhiệt độ cao). UFC85/HCHO 37% được thêm vào trước cô đặc để cải thiện cơ tính hạt.',
    equipment: 'Thiết bị cô đặc chân không\nP06106: Urê Feed Pump\nHệ thống bơm chân không',
    params: 'Nồng độ Urê ra: ~96%\nThêm UFC85 trước cô đặc'
  },
  {
    id: 15, stt: 16, factory: 'urea', factoryName: 'UREA',
    name: '7. Xử lý nước công nghệ', sub: 'Process Condensate Treatment',
    goal: 'Xử lý nước ngưng chứa Urê, NH₃, CO₂ để tái sử dụng hoặc thải đạt tiêu chuẩn.',
    input: 'Nước ngưng từ các cụm cô đặc, phân giải (chứa NH₃, CO₂, Urê hòa tan)',
    output: 'Nước sạch tái sử dụng\nNH₃ + CO₂ thu hồi → tuần hoàn',
    principle: 'Chưng cất/stripping để tách NH₃ và CO₂ khỏi nước, sau đó tuần hoàn lại hệ thống.',
    equipment: 'Cụm xử lý nước công nghệ\nTháp stripping',
    params: 'Nước đầu ra đạt tiêu chuẩn tái sử dụng'
  },
  {
    id: 16, stt: 17, factory: 'granule', factoryName: 'TẠO HẠT',
    name: '1. Tạo hạt tầng sôi', sub: 'Fluidized Bed Granulation',
    goal: 'Biến dung dịch Urê 96% thành hạt Urê rắn, kích cỡ đồng đều, cơ tính tốt (cứng, ít bụi, không vón cục).',
    input: 'Dung dịch Urê 96% từ xưởng Urê\nHạt mầm (hạt nhỏ + hạt nghiền tuần hoàn)\nKhông khí nóng',
    output: 'Hạt Urê thành phẩm\nHạt quá cỡ → nghiền\nHạt nhỏ → tuần hoàn làm mầm',
    principle: 'Công nghệ Toyo: Dung dịch Urê được phun vào buồng tạo hạt G07601. Các hạt mầm được giữ lơ lửng bởi dòng không khí nóng (tầng sôi). Urê phun lên bề mặt hạt → kết tinh → hạt lớn dần. Sàng rung S07601 phân loại 4 cỡ: sản phẩm, nhỏ, quá cỡ, dạng khối.',
    equipment: 'G07601: Buồng tạo hạt (Granulator)\nS07601: Sàng rung phân loại\nV07602/V07603/V07611: Băng tải\nMáy nghiền hạt quá cỡ',
    params: 'Công nghệ: Toyo (Nhật)\nHạt SP làm nguội đến 50°C\nPhân loại 4 cỡ hạt'
  },
  {
    id: 17, stt: 18, factory: 'granule', factoryName: 'TẠO HẠT',
    name: '2. Thu hồi bụi', sub: 'Dust Recovery',
    goal: 'Rửa sạch bụi Urê trong không khí thải ra từ buồng tạo hạt, đảm bảo môi trường (bụi < 30 mg/Nm³) và thu hồi Urê.',
    input: 'Không khí chứa bụi Urê từ G07601, E07605, E07606A/B',
    output: 'Khí sạch (bụi < 30 mg/Nm³) → xả ra môi trường\nDung dịch Urê loãng ~45% → tuần hoàn về xưởng Urê',
    principle: 'Tháp rửa bụi: Không khí chứa bụi đi từ dưới lên, dung dịch Urê loãng phun ngược từ trên xuống (trao đổi ngược dòng) → bụi bị rửa sạch. Dung dịch thu hồi ≈ 4% sản lượng.',
    equipment: 'C07601: Tháp rửa bụi (Dust Scrubber)\nQuạt hút\nLưới lọc, vòi phun, lớp đệm\nBơm tuần hoàn dung dịch',
    params: 'Bụi ra < 30 mg/Nm³\nDung dịch thu hồi ~45%\nThu hồi ≈ 4% sản lượng'
  },
  {
    id: 18, stt: 19, factory: 'granule', factoryName: 'TẠO HẠT',
    name: '3. Làm nguội sản phẩm', sub: 'Product Cooling',
    goal: 'Làm nguội hạt Urê từ nhiệt độ cao xuống 50°C trước khi đóng bao, tránh vón cục và giảm chất lượng khi lưu kho.',
    input: 'Hạt Urê nóng từ buồng tạo hạt\nKhông khí lạnh (qua E07604)',
    output: 'Hạt Urê ≤ 50°C → đóng bao/kho chứa rời',
    principle: 'E07604 làm lạnh không khí bằng NH₃ bay hơi: từ 30°C → 7°C (bão hòa + tách ẩm) → tăng lại 15°C (khí khô). E07605 chia 2 phần: phần 1 làm mát trực tiếp bằng quạt, phần 2 dùng khí khô qua E07604 → tránh hạ nhiệt đột ngột ảnh hưởng cơ tính hạt.',
    equipment: 'E07604: Air Cooler (NH₃ bay hơi)\nE07605: Product Cooler (2 phần)\nE07606A/B: Final Coolers\nB07605: Quạt cấp khí',
    params: 'Nhiệt độ hạt ra ≤ 50°C\nKhông khí: 30°C → 7°C → 15°C\nTránh giảm nhiệt đột ngột'
  },
  {
    id: 19, stt: 20, factory: 'granule', factoryName: 'TẠO HẠT',
    name: '4. Phụ gia UFC85', sub: 'UFC85 / HCHO',
    goal: 'Bổ sung phụ gia UFC85 (hoặc HCHO 37%) vào dung dịch Urê trước cô đặc/tạo hạt để nâng cao chất lượng sản phẩm.',
    input: 'UFC85 hoặc Formaldehyde 37%\nDung dịch Urê (trước P06106)',
    output: 'Dung dịch Urê có phụ gia → cô đặc → tạo hạt',
    principle: 'UFC85 phản ứng với Urê tạo liên kết chéo, giúp hạt cứng hơn, giảm bụi khi tạo hạt/vận chuyển, giảm kết tảng khi lưu kho.',
    equipment: 'Bồn chứa UFC85\nBơm định lượng UFC85\nNạp vào đầu hút P06106',
    params: 'Phụ gia bắt buộc cho CN tạo hạt tầng sôi\nTăng độ cứng hạt\nGiảm bụi và kết tảng'
  },
  {
    id: 20, stt: 21, factory: 'aux', factoryName: 'PHỤ TRỢ',
    name: '1. Hệ thống khí đầu vào', sub: 'Natural Gas Inlet',
    goal: 'Tiếp nhận, lọc sạch và phân phối khí tự nhiên (NG) từ GPP Cà Mau cho toàn nhà máy (nguyên liệu + nhiên liệu).',
    input: 'Khí tự nhiên từ GPP Cà Mau (CH₄ 82.2%, CO₂ 8.1%, C₂H₆ 6.6%...)',
    output: 'Khí sạch cấp cho xưởng Ammonia (nguyên liệu)\nKhí nhiên liệu cho đuốc, nồi hơi, reformer',
    principle: 'Khí NG qua S41001 (tách lỏng) → F41001A/B (lọc bụi 99.5%) → F41002 (lọc bụi mịn + condensate) → R41001 (hấp thụ thủy ngân bằng than hoạt tính nhiễm S) → phân phối.',
    equipment: 'S41001: Bình tách lỏng/bụi\nF41001A/B: Bộ lọc bụi (15 lõi sợi thủy tinh)\nF41002: Bộ lọc bụi mịn + condensate\nR41001: Mercury Guard (than hoạt tính)\nE41001: NG Heater',
    params: 'Hg vào < 0.9 µg/Nm³\nHg ra < 0.01 µg/Nm³\nF41001: loại 99.5% bụi ≥0.5µm\nÁp suất cấp: ~3.84-4.0 MPaG'
  },
  {
    id: 21, stt: 22, factory: 'aux', factoryName: 'PHỤ TRỢ',
    name: '2. Hệ thống khí nén', sub: 'Compressed Air / Instrument Air',
    goal: 'Cung cấp khí nén (Plant Air) và khí điều khiển (Instrument Air) cho toàn nhà máy: vận hành van, dụng cụ đo, khí công nghệ.',
    input: 'Không khí từ khí quyển',
    output: 'Plant Air (PA): khí nén thường\nInstrument Air (IA): khí khô, sạch (điểm sương -25°C)',
    principle: 'Máy nén K31001A~F (1.400 Nm³/h/máy) nén không khí → bình chứa T31001 (109.5 m³, dự trữ 10 phút). Để tạo IA: khí nén qua bộ lọc bụi S31001A/B → làm khô E31001A/B → lọc S31002A/B → bình chứa T31002 (235 m³, 15 phút).',
    equipment: 'K31001A~F: Máy nén khí (6 máy)\nT31001: Bình chứa PA (109.5 m³)\nS31001, E31001, S31002: Cụm lọc & làm khô\nT31002: Bình chứa IA (235 m³)',
    params: 'PA: 0.9 MPaG\nIA: 0.85 MPaG, điểm sương -25°C\nDự trữ PA: 10 phút\nDự trữ IA: 15 phút'
  },
  {
    id: 22, stt: 23, factory: 'aux', factoryName: 'PHỤ TRỢ',
    name: '3. Sản xuất Nitơ', sub: 'Nitrogen Production',
    goal: 'Cung cấp khí N₂ tinh khiết cho nhà máy: dùng làm khí trơ (purge, blanketing), bảo vệ thiết bị, startup/shutdown.',
    input: 'Khí nén từ hệ thống PA\nKhông khí',
    output: 'Khí N₂ tinh khiết ≥ 99.9%\nÁp suất 0.7 MPaG, 25°C',
    principle: 'Phương pháp chưng cất không khí lỏng: Không khí nén → hấp phụ H₂O, CO₂ (T31101A/B) → làm lạnh sâu qua TĐN E31102 → chưng cất trong tháp C31101 (HP Column). N₂ (sôi -195.8°C) bay lên đỉnh, O₂ (sôi -183°C) chìm xuống đáy.',
    equipment: 'T31101A/B: Adsorbent (hấp phụ H₂O, CO₂)\nE31102: Main Heat Exchanger\nC31101: HP Column (tháp chưng cất)\nK31101: Compressor\nT31202: Bồn chứa N₂ lỏng (25 m³)',
    params: 'N₂ ≥ 99.9% vol\nÁp suất: 0.7 MPaG\nNhiệt độ: 25°C\nBồn chứa lỏng: 25 m³'
  },
  {
    id: 23, stt: 24, factory: 'aux', factoryName: 'PHỤ TRỢ',
    name: '4. Hệ thống nước làm mát', sub: 'Fresh/Cooling Water',
    goal: 'Cung cấp nước làm mát tuần hoàn (Fresh Water) cho toàn bộ thiết bị trao đổi nhiệt trong nhà máy.',
    input: 'Nước từ nguồn\nHóa chất chống ăn mòn (Tract 109: NaOH + NaNO₂)\nHóa chất diệt khuẩn (Nalco 7330)',
    output: 'Nước mát (CWS) cấp cho xưởng Amo, Urê, Phụ trợ\nNước nóng (CWR) → giải nhiệt tại TĐN E21201A~J → quay lại',
    principle: 'Hệ thống tuần hoàn kín: Bơm P21201A~C (10.838 m³/h/bơm) đẩy nước mát đến các hộ tiêu thụ → nước hấp thu nhiệt → quay về giải nhiệt tại E21201A~J (dạng ống chùm) → tuần hoàn. P21201A chạy turbine hơi HS, B/C chạy motor.',
    equipment: 'P21201A~C: Bơm nước Fresh\nE21201A~J: Trao đổi nhiệt (10 cụm)\nT21201: Bồn nước Fresh\nHóa chất: Tract 109, Nalco 7330',
    params: 'Lưu lượng: ~20.000 m³/h (tổng)\nCWS: ~31°C\npH: ~9.8\nNO₂⁻: 500-600 ppm\nP21201A: turbine HS 38 barG'
  },
  {
    id: 24, stt: 25, factory: 'aux', factoryName: 'PHỤ TRỢ',
    name: '5. Bồn chứa Ammonia', sub: 'NH₃ Storage',
    goal: 'Tồn trữ NH₃ lỏng sản phẩm ở nhiệt độ thấp (-33°C), cấp NH₃ cho xưởng Urê, xuất bán, và vòng làm lạnh.',
    input: 'NH₃ lỏng từ xưởng Ammonia',
    output: 'NH₃ cấp xưởng Urê (P40001A/B)\nNH₃ xuất bán tàu\nNH₃ cấp vòng làm lạnh (P40002)',
    principle: 'Bồn T40001 dạng trụ đứng, bảo ôn cách nhiệt, vận hành ở -33°C, áp suất 10 kPaG. Máy nén K40001A/B nén hơi NH₃ bay hơi để duy trì nhiệt độ/áp suất. E40001 gia nhiệt NH₃ lỏng bằng methanol (từ -33°C lên 10°C) trước khi cấp Urê.',
    equipment: 'T40001: Bồn chứa NH₃ (16.400 m³)\nK40001A/B: Máy nén hơi NH₃\nP40001A/B: Bơm cấp NH₃ (ly tâm đứng, 11 cấp)\nP40002: Bơm cracking & cấp vòng lạnh\nE40001: TĐN gia nhiệt NH₃ (methanol)',
    params: 'Thể tích: 16.400 m³\nNhiệt độ: -33°C\nÁp suất: 10 kPaG\nP40001: áp đẩy 25 bar (Urê), 10-15 bar (tàu)\nK40001: 710 Nm³/h, áp đẩy 17 barG'
  },
  {
    id: 25, stt: 26, factory: 'aux', factoryName: 'PHỤ TRỢ',
    name: '6. Nồi hơi phụ trợ & Mạng hơi', sub: 'Auxiliary Boiler & Steam Network',
    goal: 'Sản xuất hơi cao áp (HS) để dẫn động turbine, gia nhiệt, và cấp năng lượng cho toàn nhà máy.',
    input: 'Khí tự nhiên (nhiên liệu)\nNước khử khoáng (Demi water)\nKhông khí (quạt FD Fan)',
    output: 'Hơi HS: 38 barG, 380°C\nHơi MS, LS trích từ turbine',
    principle: 'Nồi hơi F29101 đốt khí NG, cấp 200 tấn hơi HS/h. Nước Demi qua bộ khử khí U29201 (loại O₂, CO₂ ở 130°C) → bơm P29202A/B (57 barG) → nồi hơi → hơi HS. Hơi HS đi qua các turbine → trích hơi MS, LS cho các hộ tiêu thụ.',
    equipment: 'F29101: Nồi hơi phụ trợ\nU29201: Deaerator (400 tấn/h, 130°C)\nP29202A/B: BFW Pump (8 cấp, biến tần)\nB29101: FD Fan (215.000 m³/h)\nHóa chất: Elimin-Ox (khử O₂), Triact 1800 (pH)',
    params: 'Công suất: 200 tấn hơi HS/h\nHơi HS: 38 barG, 380°C\nDeaerator: 1.7 barG, 130°C\nBFW Pump: Pđẩy 57 barG'
  },
  {
    id: 26, stt: 27, factory: 'aux', factoryName: 'PHỤ TRỢ',
    name: '7. Hệ thống đuốc', sub: 'Flare System',
    goal: 'Đốt an toàn các khí thải, khí dư, khí xả sự cố từ toàn nhà máy. Đảm bảo không xả khí độc/cháy nổ ra môi trường.',
    input: 'Khí thải từ xưởng Amo, Urê\nKhí sự cố (trip, emergency)\nKhí NG pilot',
    output: 'Khí đã đốt cháy hoàn toàn → CO₂ + H₂O\nNước ngưng → xử lý nước thải',
    principle: 'Hệ thống gồm đuốc Amo và đuốc tổng hợp. Khí thải qua bồn làm kín (T51002/T51003, chống cháy ngược) → đỉnh đuốc → đốt cháy. Hệ thống đánh lửa tự động (interlock khi nhiệt độ <200°C). Bình tách T51001/T51004 thu hồi lỏng.',
    equipment: 'Đuốc Ammonia\nĐuốc tổng hợp (Synthesis Gas)\nT51001/T51004: Bình tách lỏng\nT51002/T51003: Bồn làm kín\nT51005: Bồn chứa\nP51001/P51002: Bơm\nHệ thống đánh lửa PLC18',
    params: 'Tự động đánh lửa khi <200°C\nBồn làm kín chống cháy ngược\nKiểm soát áp: PT > 2-5 kPa'
  },
  {
    id: 27, stt: 28, factory: 'aux', factoryName: 'PHỤ TRỢ',
    name: '8. Xử lý nước thải', sub: 'Wastewater Treatment',
    goal: 'Xử lý nước thải (nhiễm dầu, nhiễm NH₃, sinh hoạt) đạt tiêu chuẩn trước khi xả ra môi trường.',
    input: 'Nước thải nhiễm dầu\nNước thải nhiễm Ammonia\nNước thải sinh hoạt',
    output: 'Nước đạt tiêu chuẩn xả thải → môi trường',
    principle: '① Nước thải nhiễm dầu: Phương pháp tuyển nổi áp suất (DAF) — bão hòa khí dưới 1.5-4 atm → giảm áp → bọt khí mịn nổi lên kéo dầu theo. Chất phá nhũ CaCl₂ hỗ trợ.\n② Nước thải sinh hoạt: Công nghệ AAO (Yếm khí – Thiếu khí – Hiếu khí), công suất 10 m³/h.\n③ Nước thải nhiễm NH₃: Stripping/xử lý riêng.',
    equipment: 'Hệ thống DAF (tuyển nổi áp suất)\nT36001/T36002/T36003: Bể trung gian\nHệ thống AAO (xử lý sinh hoạt)\nT27015, T26001: Bể thu gom',
    params: 'DAF: áp suất 1.5-4 atm\nAAO: 10 m³/h\nHóa chất: CaCl₂ (phá nhũ)\n3 loại nước thải xử lý riêng'
  }
];

// ===== PFD PAGE MAPPING =====
// Map từ stt → page number trong PDF gốc (PVCFC training material 2023)
const PFD_PAGE_MAP = {
  1:  { page: 25, title: 'Cụm Khử lưu huỳnh', sub: 'Desulfurization (TK-250 / HTZ-5)' },
  2:  { page: 28, title: 'Cụm Reforming', sub: 'Primary + Secondary Reformer (F04201, R04203)' },
  3:  { page: 33, title: 'Cụm Chuyển hóa CO', sub: 'HTS + LTS (R04204, R04205)' },
  4:  { page: 37, title: 'Cụm Tách CO₂', sub: 'aMDEA Absorption (C04301, C04302)' },
  5:  { page: 43, title: 'Cụm Mê tan hóa', sub: 'Methanation (R04301, xt PK-7R)' },
  6:  { page: 46, title: 'Cụm Tổng hợp NH₃', sub: 'Synthesis Loop (R04501, K04431)' },
  7:  { page: 51, title: 'Cụm Làm lạnh NH₃', sub: 'Refrigeration (K441, S502, E506-E509)' },
  8:  { page: 52, title: 'Cụm Thu hồi NH₃ (ARU)', sub: 'Ammonia Recovery (C551, C552, C553)' },
  9:  { page: 53, title: 'Cụm Thu hồi H₂ (HRU)', sub: 'Hydrogen Recovery (PSA Z04601A-E)' },
  10: { page: 69, title: 'Cụm Nén CO₂', sub: 'CO₂ Compressor 4 cấp (K06101, KT06101)' },
  11: { page: 73, title: 'Tháp Tổng hợp Urê', sub: 'HP Synthesis (R06101, 17 đĩa, 42.5m)' },
  12: { page: 22, title: 'Cụm Phân giải HP', sub: 'HP Decomposition - xem PFD Ammonia tổng quan', noteOnly: true },
  13: { page: 77, title: 'Cụm Phân giải MP', sub: 'MP Decomposition (S06102, E06102, C06101)' },
  14: { page: 85, title: 'Cụm Phân giải LP', sub: 'LP Decomposition (S06103, E06107, E06108)' },
  15: { page: 88, title: 'Cụm Cô đặc chân không', sub: 'Vacuum Concentration (S06104, S06114, E06104)' },
  16: { page: 93, title: 'Cụm Xử lý nước CN', sub: 'Process Condensate Treatment (C06102, R06102)' },
  17: { page: 98, title: 'Cụm Tạo hạt tổng thể', sub: 'Granulation Section (G07601 + Dust Recovery + Cooling)' },
  18: { page: 98, title: 'Tháp rửa bụi', sub: 'Dust Scrubber (C07601) — xem trong PFD tổng cụm tạo hạt' },
  19: { page: 98, title: 'Cụm làm nguội hạt', sub: 'Product Cooling (E07604/E07605) — xem trong PFD tổng cụm tạo hạt' },
  20: { page: 88, title: 'Phụ gia UFC85', sub: 'UFC85 — nạp vào trước cụm cô đặc chân không' },
  21: { page: 115, title: 'Cụm khí đầu vào', sub: 'Natural Gas Inlet (S41001, F41001, R41001)' },
  22: { page: 124, title: 'Cụm khí nén PA/IA', sub: 'Plant Air & Instrument Air' },
  23: { page: 124, title: 'Cụm sản xuất N₂', sub: 'Nitrogen Production (xem cùng cụm khí nén)' },
  24: { page: 141, title: 'Cụm nước làm mát', sub: 'Cooling Water (T21101, P21101, E21201)' },
  25: { page: 51, title: 'Bồn chứa NH₃', sub: 'NH₃ Storage — xem trong PFD cụm làm lạnh' },
  26: { page: 135, title: 'Hệ Demi & Nồi hơi', sub: 'Demineralized Water + Auxiliary Boiler' },
  27: { page: 180, title: 'Hệ thống đuốc Ammonia', sub: 'Ammonia Flare (T51004, Z51002)' },
  28: { page: 93, title: 'Xử lý nước thải', sub: 'Wastewater Treatment — xem trong cụm PCT' },
};

const PFD_OVERVIEW = {
  amo: { page: 22, title: 'PFD tổng thể Xưởng Ammonia', sub: 'Toàn bộ chuỗi: NG → NH₃ → CO₂ → Urea' },
  block_amo: { page: 23, title: 'Sơ đồ khối Xưởng Ammonia', sub: '6 cụm chính từ khử S đến tổng hợp NH₃' },
  urea: { page: 65, title: 'PFD Công nghệ Urea', sub: 'Snamprogetti™ Urea Technology (Saipem)' },
  block_overall: { page: 20, title: 'Sơ đồ tổng quát Nhà máy', sub: 'Bố trí toàn bộ phân xưởng' },
};

// ===== STATE =====
let currentFilter = 'all';
let currentView = 'grid';
let currentMode = 'browse';
let fcItems = [];
let fcIndex = 0;
let fcFlipped = false;
let quizItems = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

const factoryColors = { amo: '#3b82f6', urea: '#10b981', granule: '#f59e0b', aux: '#8b5cf6' };
const factoryBadgeClass = { amo: 'badge-amo', urea: 'badge-urea', granule: 'badge-granule', aux: 'badge-aux' };
const factoryActiveClass = { amo: 'active-amo', urea: 'active-urea', granule: 'active-granule', aux: 'active-aux', all: 'active-all' };

// ===== INIT =====
function init() {
  buildSidebar();
  renderCards(data);
}

function buildSidebar() {
  const groups = { amo: [], urea: [], granule: [], aux: [] };
  data.forEach(d => groups[d.factory].push(d));

  Object.entries({ amo: 'sidebar-amo', urea: 'sidebar-urea', granule: 'sidebar-granule', aux: 'sidebar-aux' })
    .forEach(([fac, elId]) => {
      const el = document.getElementById(elId);
      el.innerHTML = groups[fac].map(d => `
        <div class="sidebar-item" onclick="openDetail(${d.id})" id="sb-${d.id}">
          <span class="sidebar-dot" style="background:${factoryColors[d.factory]}"></span>
          <span style="font-size:12px">${d.name}</span>
          <span class="sidebar-number">${d.stt}</span>
        </div>
      `).join('');
    });
}

// ===== RENDER CARDS =====
function renderCards(items) {
  const container = document.getElementById('cardsContainer');
  if (items.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="icon">🔍</div>Không tìm thấy kết quả</div>';
    return;
  }
  container.className = currentView === 'grid' ? 'cards-grid' : 'cards-list';
  container.innerHTML = items.map(d => buildCard(d)).join('');
}

function buildCard(d) {
  return `
    <div class="process-card animate-in" id="card-${d.id}" onclick="toggleCard(${d.id})">
      <div class="card-header">
        <span class="card-num">#${d.stt}</span>
        <div class="card-title-block">
          <div class="card-title">${d.name}</div>
          <div class="card-subtitle">${d.sub}</div>
        </div>
        <span class="card-factory-badge ${factoryBadgeClass[d.factory]}">${d.factoryName}</span>
        <span class="card-expand-icon">▼</span>
      </div>
      <div class="card-preview">
        <div style="color:var(--text3);font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px">🎯 Mục tiêu</div>
        <div style="margin-bottom:10px">${d.goal}</div>
        <div style="display:flex;gap:8px">
          <button onclick="event.stopPropagation();openDetail(${d.id})" style="padding:5px 12px;border-radius:5px;border:1px solid var(--border2);background:var(--bg3);color:var(--text2);cursor:pointer;font-size:12px;font-family:inherit">📖 Chi tiết đầy đủ</button>
        </div>
      </div>
    </div>
  `;
}

function toggleCard(id) {
  const card = document.getElementById('card-' + id);
  card.classList.toggle('expanded');
}

// ===== FILTER =====
function filterFactory(fac, el) {
  currentFilter = fac;

  document.querySelectorAll('.sidebar-item').forEach(i => {
    i.classList.remove('active', ...Object.values(factoryActiveClass));
  });

  if (el) {
    el.classList.add('active', factoryActiveClass[fac] || 'active-all');
  }

  const filtered = fac === 'all' ? data : data.filter(d => d.factory === fac);
  const titles = { all: 'Tất cả công đoạn', amo: 'Xưởng Ammonia', urea: 'Xưởng Urea', granule: 'Xưởng Tạo Hạt', aux: 'Xưởng Phụ Trợ' };
  document.getElementById('viewTitle').textContent = titles[fac] + ` (${filtered.length})`;
  document.getElementById('searchResults').classList.remove('show');
  document.getElementById('cardsContainer').style.display = '';
  document.getElementById('flowDiagram').style.display = fac === 'all' ? '' : 'none';
  document.getElementById('statsRow').style.display = fac === 'all' ? '' : 'none';
  renderCards(filtered);
}

// ===== SEARCH =====
function handleSearch(q) {
  const sr = document.getElementById('searchResults');
  const cc = document.getElementById('cardsContainer');

  if (!q.trim()) {
    sr.classList.remove('show');
    cc.style.display = '';
    return;
  }

  const qLow = q.toLowerCase();
  const results = data.filter(d =>
    [d.name, d.sub, d.goal, d.input, d.output, d.principle, d.equipment, d.params, d.factoryName]
      .some(t => t && t.toLowerCase().includes(qLow))
  );

  cc.style.display = 'none';
  sr.classList.add('show');

  if (results.length === 0) {
    sr.innerHTML = '<div class="empty-state"><div class="icon">🔍</div>Không tìm thấy kết quả phù hợp</div>';
    return;
  }

  function hl(text) {
    if (!text) return '';
    return text.replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>');
  }

  sr.innerHTML = `<div style="font-size:12px;color:var(--text3);margin-bottom:12px">Tìm thấy <strong style="color:var(--text)">${results.length}</strong> kết quả cho "<strong style="color:var(--amber)">${q}</strong>"</div>` +
    results.map(d => `
      <div class="search-result-item" onclick="openDetail(${d.id})">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
          <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text3);background:var(--bg3);border:1px solid var(--border);padding:2px 6px;border-radius:4px">#${d.stt}</span>
          <strong>${hl(d.name)}</strong> <span style="font-size:12px;color:var(--text3);font-style:italic">${hl(d.sub)}</span>
          <span class="card-factory-badge ${factoryBadgeClass[d.factory]}" style="margin-left:auto">${d.factoryName}</span>
        </div>
        <div style="font-size:12.5px;color:var(--text2)">${hl(d.goal.substring(0, 120))}${d.goal.length > 120 ? '...' : ''}</div>
      </div>
    `).join('');
}

// ===== DETAIL VIEW =====
function openDetail(id) {
  const d = data[id];
  if (!d) return;

  // Highlight sidebar
  document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active', ...Object.values(factoryActiveClass)));
  const sbItem = document.getElementById('sb-' + id);
  if (sbItem) sbItem.classList.add('active', factoryActiveClass[d.factory]);

  const paramChips = d.params.split('\n').map(p => `<span class="param-chip">${p.trim()}</span>`).join('');
  const equipItems = d.equipment.split('\n').map(e => {
    const parts = e.trim().split(':');
    return `<div class="equip-item"><span class="equip-code">${parts[0] || ''}</span><span class="equip-desc">${parts.slice(1).join(':').trim() || ''}</span></div>`;
  }).join('');

  // PFD section
  const pfdInfo = PFD_PAGE_MAP[d.stt];
  let pfdHtml = '';
  if (pfdInfo) {
    const pfdImg = getPfdImage(pfdInfo.page);
    if (pfdImg) {
      pfdHtml = `
        <div class="detail-section full">
          <div class="section-label"><span class="section-icon">📐</span> Sơ đồ công nghệ (PFD)</div>
          <div style="background:#fff;border-radius:8px;padding:6px;cursor:zoom-in;margin-bottom:8px" onclick="openPfdLightbox(${pfdInfo.page}, '${pfdInfo.title.replace(/'/g, "\\'")}')">
            <img src="${pfdImg}" alt="${pfdInfo.title}" style="width:100%;height:auto;display:block;border-radius:4px" loading="lazy">
          </div>
          <div style="font-size:11.5px;color:var(--text3);font-style:italic">📌 ${pfdInfo.title} — Nhấn để phóng to · Nguồn: PVCFC 2023, trang ${pfdInfo.page}</div>
        </div>
      `;
    }
  }

  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;z-index:1000;background:rgba(31,41,55,0.5);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:20px;overflow-y:auto';
  modal.innerHTML = `
    <div style="background:var(--card);border:1px solid var(--border2);border-radius:16px;max-width:820px;width:100%;max-height:90vh;overflow-y:auto;position:relative">
      <div style="position:sticky;top:0;background:var(--card);border-bottom:1px solid var(--border);padding:16px 20px;display:flex;align-items:center;gap:12px;z-index:10">
        <span class="card-factory-badge ${factoryBadgeClass[d.factory]}">${d.factoryName}</span>
        <strong style="font-size:16px">${d.name}</strong>
        <span style="font-size:12.5px;color:var(--text3);font-style:italic">${d.sub}</span>
        <button onclick="this.closest('[style]').remove()" style="margin-left:auto;background:var(--bg3);border:1px solid var(--border);color:var(--text2);padding:5px 10px;border-radius:6px;cursor:pointer;font-size:13px">✕ Đóng</button>
      </div>
      <div style="padding:24px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
          <div class="detail-section full">
            <div class="section-label"><span class="section-icon">🎯</span> Mục tiêu</div>
            <div class="section-content">${d.goal}</div>
          </div>
          <div class="detail-section">
            <div class="section-label"><span class="section-icon">📥</span> Đầu vào</div>
            <div class="section-content">${d.input.split('\n').join('<br>')}</div>
          </div>
          <div class="detail-section">
            <div class="section-label"><span class="section-icon">📤</span> Đầu ra</div>
            <div class="section-content">${d.output.split('\n').join('<br>')}</div>
          </div>
          <div class="detail-section full">
            <div class="section-label"><span class="section-icon">⚙️</span> Nguyên lý hoạt động</div>
            <div class="section-content">${d.principle.split('\n').join('<br>')}</div>
          </div>
          <div class="detail-section">
            <div class="section-label"><span class="section-icon">🔧</span> Thiết bị chính</div>
            <div class="equip-list">${equipItems}</div>
          </div>
          <div class="detail-section">
            <div class="section-label"><span class="section-icon">📊</span> Thông số vận hành</div>
            <div class="param-chips">${paramChips}</div>
          </div>
          ${pfdHtml}
        </div>
      </div>
    </div>
  `;
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
}

// ===== VIEW MODE =====
function setView(v, btn) {
  currentView = v;
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = currentFilter === 'all' ? data : data.filter(d => d.factory === currentFilter);
  renderCards(filtered);
}

// ===== MODE SWITCH =====
function setMode(mode) {
  currentMode = mode;
  document.getElementById('browseMode').style.display = mode === 'browse' ? '' : 'none';
  document.getElementById('pfdMode').style.display = mode === 'pfd' ? '' : 'none';
  document.getElementById('mindmapMode').style.display = mode === 'mindmap' ? '' : 'none';
  document.getElementById('flashcardMode').style.display = mode === 'flashcard' ? '' : 'none';
  document.getElementById('quizMode').style.display = mode === 'quiz' ? '' : 'none';

  if (mode === 'flashcard') initFlashcard();
  if (mode === 'quiz') renderQuizStart();
  if (mode === 'mindmap') ensureMindmapInit();
  if (mode === 'pfd') renderPfd('overview');
}

// ===== PFD VIEWER =====
function switchPfdTab(tab) {
  document.querySelectorAll('.pfd-tab').forEach(t => {
    t.classList.toggle('pfd-tab-active', t.getAttribute('data-pfd-tab') === tab);
  });
  renderPfd(tab);
}

function getPfdImage(page) {
  // PFD_IMAGES is loaded from injected base64 data
  if (typeof PFD_IMAGES === 'undefined') return null;
  return PFD_IMAGES[page] || null;
}

function buildPfdCard(processData, pfdInfo) {
  const img = getPfdImage(pfdInfo.page);
  const factoryBadge = `<span class="card-factory-badge ${factoryBadgeClass[processData.factory]}">${processData.factoryName}</span>`;
  const paramSummary = processData.params.split('\n').slice(0, 3).map(p => `<span class="pfd-meta-chip highlight">${p.trim()}</span>`).join('');
  const equipSummary = processData.equipment.split('\n').slice(0, 2).map(e => {
    const code = e.split(':')[0].trim();
    return `<span class="pfd-meta-chip">${code}</span>`;
  }).join('');

  return `
    <div class="pfd-card animate-in">
      <div class="pfd-card-header">
        <span class="pfd-card-num">#${processData.stt}</span>
        <div style="flex:1">
          <div class="pfd-card-title">${pfdInfo.title}</div>
          <div class="pfd-card-sub">${pfdInfo.sub}</div>
        </div>
        ${factoryBadge}
        <button class="pfd-card-zoom" onclick="openPfdLightbox(${pfdInfo.page}, '${pfdInfo.title.replace(/'/g, "\\'")}')">🔍 Phóng to</button>
        <button class="pfd-card-zoom" onclick="openDetail(${processData.id})">📖 Chi tiết</button>
      </div>
      <div class="pfd-image-wrap" onclick="openPfdLightbox(${pfdInfo.page}, '${pfdInfo.title.replace(/'/g, "\\'")}')">
        ${img ? `<img src="${img}" alt="${pfdInfo.title}" loading="lazy">` : `<div style="padding:40px;text-align:center;color:#666;background:#f5f5f5;border-radius:4px">⚠️ Không có ảnh PFD</div>`}
      </div>
      <div class="pfd-card-meta">
        ${equipSummary}
        ${paramSummary}
      </div>
    </div>
  `;
}

function buildPfdOverviewCard(info) {
  const img = getPfdImage(info.page);
  return `
    <div class="pfd-card animate-in">
      <div class="pfd-card-header">
        <div style="flex:1">
          <div class="pfd-card-title">${info.title}</div>
          <div class="pfd-card-sub">${info.sub}</div>
        </div>
        <button class="pfd-card-zoom" onclick="openPfdLightbox(${info.page}, '${info.title.replace(/'/g, "\\'")}')">🔍 Phóng to</button>
      </div>
      <div class="pfd-image-wrap" onclick="openPfdLightbox(${info.page}, '${info.title.replace(/'/g, "\\'")}')">
        ${img ? `<img src="${img}" alt="${info.title}" loading="lazy">` : `<div style="padding:40px;text-align:center;color:#666;background:#f5f5f5;border-radius:4px">⚠️ Không có ảnh PFD</div>`}
      </div>
    </div>
  `;
}

function renderPfd(tab) {
  const container = document.getElementById('pfdContent');

  if (tab === 'overview') {
    container.innerHTML = `
      <div class="pfd-section">
        <div class="pfd-section-title">📊 PFD tổng thể nhà máy</div>
        <div class="pfd-section-subtitle">Xem nhanh toàn bộ công nghệ sản xuất từ khí tự nhiên đến đạm urê thành phẩm</div>
        ${buildPfdOverviewCard(PFD_OVERVIEW.block_overall)}
        ${buildPfdOverviewCard(PFD_OVERVIEW.block_amo)}
        ${buildPfdOverviewCard(PFD_OVERVIEW.amo)}
        ${buildPfdOverviewCard(PFD_OVERVIEW.urea)}
      </div>
    `;
    return;
  }

  // Filter processes by factory
  const processes = data.filter(d => d.factory === tab);
  // Track shown pages to avoid duplicates
  const shownPages = new Set();

  let html = `<div class="pfd-section"><div class="pfd-section-title">${
    tab === 'amo' ? '🏭 Xưởng Ammonia' :
    tab === 'urea' ? '🧪 Xưởng Urea' :
    tab === 'granule' ? '⚪ Xưởng Tạo Hạt' :
    '🔧 Xưởng Phụ Trợ'
  }</div>
  <div class="pfd-section-subtitle">${processes.length} công đoạn — Sơ đồ công nghệ chi tiết theo từng cụm</div>`;

  processes.forEach(p => {
    const pfdInfo = PFD_PAGE_MAP[p.stt];
    if (pfdInfo) {
      html += buildPfdCard(p, pfdInfo);
    }
  });

  html += '</div>';
  container.innerHTML = html;
}

function openPfdLightbox(page, caption) {
  const img = getPfdImage(page);
  if (!img) { alert('Không có ảnh PFD cho trang này'); return; }

  let lightbox = document.getElementById('pfdLightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'pfdLightbox';
    lightbox.className = 'pfd-lightbox';
    lightbox.innerHTML = `
      <button class="pfd-lightbox-close" onclick="closePfdLightbox()">✕</button>
      <img id="pfdLightboxImg" src="" alt="">
      <div class="pfd-lightbox-caption" id="pfdLightboxCaption"></div>
    `;
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closePfdLightbox(); });
    document.body.appendChild(lightbox);
  }
  document.getElementById('pfdLightboxImg').src = img;
  document.getElementById('pfdLightboxCaption').textContent = `${caption} — Trang ${page} (PVCFC 2023)`;
  lightbox.classList.add('show');
  document.addEventListener('keydown', pfdLightboxKeyHandler);
}

function closePfdLightbox() {
  const lightbox = document.getElementById('pfdLightbox');
  if (lightbox) lightbox.classList.remove('show');
  document.removeEventListener('keydown', pfdLightboxKeyHandler);
}

function pfdLightboxKeyHandler(e) {
  if (e.key === 'Escape') closePfdLightbox();
}

// ===== FLASHCARD =====
function initFlashcard() {
  const fac = document.getElementById('fcFactory').value;
  fcItems = fac === 'all' ? [...data] : data.filter(d => d.factory === fac);
  // Shuffle
  for (let i = fcItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcItems[i], fcItems[j]] = [fcItems[j], fcItems[i]];
  }
  fcIndex = 0;
  fcFlipped = false;
  document.getElementById('flashcard').style.transform = 'rotateY(0deg)';
  renderFC();
}

function renderFC() {
  if (fcItems.length === 0) return;
  const d = fcItems[fcIndex];
  document.getElementById('fc-num').textContent = d.stt;
  document.getElementById('fc-name').textContent = d.name;
  document.getElementById('fc-sub').textContent = d.sub;
  document.getElementById('fc-factory-badge').innerHTML = `<span class="card-factory-badge ${factoryBadgeClass[d.factory]}">${d.factoryName}</span>`;
  document.getElementById('fc-progress').textContent = `${fcIndex + 1} / ${fcItems.length}`;

  const paramChips = d.params.split('\n').map(p => `<span class="param-chip" style="font-size:10.5px">${p.trim()}</span>`).join('');

  document.getElementById('fc-back-content').innerHTML = `
    <div style="font-size:11px;color:var(--text3);font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:12px">📖 Chi tiết công đoạn</div>
    <div style="margin-bottom:12px">
      <div style="font-size:10.5px;color:var(--text3);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px">🎯 Mục tiêu</div>
      <div style="font-size:13px;color:var(--text2);line-height:1.55">${d.goal}</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
      <div>
        <div style="font-size:10.5px;color:var(--text3);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px">📥 Đầu vào</div>
        <div style="font-size:12px;color:var(--text2)">${d.input.split('\n').join('<br>')}</div>
      </div>
      <div>
        <div style="font-size:10.5px;color:var(--text3);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px">📤 Đầu ra</div>
        <div style="font-size:12px;color:var(--text2)">${d.output.split('\n').join('<br>')}</div>
      </div>
    </div>
    <div>
      <div style="font-size:10.5px;color:var(--text3);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">📊 Thông số</div>
      <div class="param-chips">${paramChips}</div>
    </div>
  `;
}

function flipCard() {
  fcFlipped = !fcFlipped;
  document.getElementById('flashcard').style.transform = fcFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
}

function navigateFC(dir) {
  fcIndex = (fcIndex + dir + fcItems.length) % fcItems.length;
  fcFlipped = false;
  document.getElementById('flashcard').style.transform = 'rotateY(0deg)';
  setTimeout(renderFC, 50);
}

// ===== QUIZ =====
function renderQuizStart() {
  document.getElementById('quizArea').innerHTML = `
    <div class="quiz-card" style="text-align:center;padding:40px">
      <div style="font-size:40px;margin-bottom:16px">🧪</div>
      <h2 style="font-size:20px;margin-bottom:8px">Kiểm tra kiến thức</h2>
      <p style="color:var(--text2);font-size:14px;margin-bottom:24px">Chọn xưởng và bắt đầu làm bài. Mỗi câu hỏi có 4 lựa chọn.</p>
      <button class="btn btn-primary" onclick="startQuiz()" style="font-size:14px;padding:10px 28px">▶ Bắt đầu ngay</button>
    </div>
  `;
}

function startQuiz() {
  const fac = document.getElementById('quizFactory').value;
  const pool = fac === 'all' ? [...data] : data.filter(d => d.factory === fac);
  if (pool.length < 4) { alert('Cần ít nhất 4 công đoạn để làm quiz!'); return; }

  // Generate questions
  quizItems = generateQuestions(pool, Math.min(10, pool.length));
  quizIndex = 0;
  quizScore = 0;
  renderQuestion();
}

function generateQuestions(pool, count) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const types = ['goal', 'params', 'equipment', 'input', 'output'];
  return shuffled.slice(0, count).map(d => {
    const type = types[Math.floor(Math.random() * types.length)];
    const others = pool.filter(x => x.id !== d.id).sort(() => Math.random() - 0.5).slice(0, 3);

    let question, correctAnswer, wrongAnswers;

    if (type === 'goal') {
      question = `Mục tiêu chính của công đoạn "${d.name}" là gì?`;
      correctAnswer = d.goal.substring(0, 100) + (d.goal.length > 100 ? '...' : '');
      wrongAnswers = others.map(o => o.goal.substring(0, 100) + (o.goal.length > 100 ? '...' : ''));
    } else if (type === 'params') {
      const paramLines = d.params.split('\n').filter(p => p.trim());
      const param = paramLines[0];
      question = `Thông số vận hành nào đúng cho công đoạn "${d.name}"?`;
      correctAnswer = param;
      wrongAnswers = others.map(o => o.params.split('\n')[0]);
    } else if (type === 'equipment') {
      question = `Thiết bị nào là chính trong công đoạn "${d.name}"?`;
      const eq = d.equipment.split('\n')[0];
      correctAnswer = eq;
      wrongAnswers = others.map(o => o.equipment.split('\n')[0]);
    } else if (type === 'input') {
      question = `Đầu vào của công đoạn "${d.name}" là gì?`;
      correctAnswer = d.input.split('\n')[0];
      wrongAnswers = others.map(o => o.input.split('\n')[0]);
    } else {
      question = `Đầu ra của công đoạn "${d.name}" là gì?`;
      correctAnswer = d.output.split('\n')[0];
      wrongAnswers = others.map(o => o.output.split('\n')[0]);
    }

    const options = [{ text: correctAnswer, correct: true },
      ...wrongAnswers.map(w => ({ text: w, correct: false }))
    ].sort(() => Math.random() - 0.5);

    return { question, options, explanation: d.goal, processId: d.id, factoryBadge: `<span class="card-factory-badge ${factoryBadgeClass[d.factory]}">${d.factoryName}</span>` };
  });
}

function renderQuestion() {
  if (quizIndex >= quizItems.length) {
    renderQuizResult();
    return;
  }
  quizAnswered = false;
  const q = quizItems[quizIndex];
  const pct = (quizIndex / quizItems.length) * 100;

  document.getElementById('quizArea').innerHTML = `
    <div class="quiz-card animate-in">
      <div class="quiz-progress">
        <div class="quiz-bar"><div class="quiz-fill" style="width:${pct}%"></div></div>
        <span class="quiz-count">${quizIndex + 1}/${quizItems.length}</span>
        <span class="quiz-score">Đúng: <strong>${quizScore}</strong></span>
      </div>
      <div style="margin-bottom:10px">${q.factoryBadge}</div>
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-options" id="quizOptions">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" onclick="answerQuiz(${i})">${opt.text}</button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quizFeedback"></div>
      <div class="quiz-nav">
        <div></div>
        <button class="btn btn-primary" id="nextBtn" onclick="nextQuestion()" style="display:none">Tiếp theo →</button>
      </div>
    </div>
  `;
}

function answerQuiz(idx) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = quizItems[quizIndex];
  const opts = document.querySelectorAll('.quiz-option');
  const fb = document.getElementById('quizFeedback');
  opts.forEach(o => o.disabled = true);

  if (q.options[idx].correct) {
    quizScore++;
    opts[idx].classList.add('correct');
    fb.className = 'quiz-feedback correct-fb';
    fb.style.display = 'block';
    fb.innerHTML = `✅ <strong>Chính xác!</strong> ${q.explanation.substring(0, 120)}...`;
  } else {
    opts[idx].classList.add('wrong');
    const correctIdx = q.options.findIndex(o => o.correct);
    opts[correctIdx].classList.add('correct');
    fb.className = 'quiz-feedback wrong-fb';
    fb.style.display = 'block';
    fb.innerHTML = `❌ <strong>Chưa đúng.</strong> Đáp án đúng: <em>${q.options[correctIdx].text}</em>`;
  }
  document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
  quizIndex++;
  renderQuestion();
}

function renderQuizResult() {
  const pct = Math.round((quizScore / quizItems.length) * 100);
  const msg = pct >= 80 ? '🎉 Xuất sắc!' : pct >= 60 ? '👍 Khá tốt!' : '📚 Cần ôn thêm!';
  document.getElementById('quizArea').innerHTML = `
    <div class="quiz-card" style="text-align:center;padding:40px">
      <div style="font-size:48px;margin-bottom:16px">${msg.split(' ')[0]}</div>
      <h2 style="font-size:24px;margin-bottom:8px">${msg.substring(2)}</h2>
      <div style="font-size:52px;font-weight:800;font-family:'JetBrains Mono',monospace;color:${pct>=80?'var(--green)':pct>=60?'var(--amber)':'var(--red)'};margin:16px 0">${pct}%</div>
      <div style="color:var(--text2);margin-bottom:24px">Đúng <strong style="color:var(--text)">${quizScore}</strong> / ${quizItems.length} câu</div>
      <div style="display:flex;gap:10px;justify-content:center">
        <button class="btn btn-ghost" onclick="startQuiz()">🔄 Làm lại</button>
        <button class="btn btn-primary" onclick="setMode('browse')">📚 Ôn thêm</button>
      </div>
    </div>
  `;
}

// ===== MINDMAP =====
const mindmapNodes = [
  // ===== AUX zone (top, feeds the plant) =====
  { id: 'ng', stt: 21, x: 60, y: 80, w: 130, h: 50, label: 'Khí tự nhiên\n(GPP Cà Mau)', factory: 'aux', subtype: 'input' },
  { id: 'air', stt: null, x: 60, y: 150, w: 130, h: 40, label: 'Không khí', factory: 'aux', subtype: 'input' },
  { id: 'water', stt: 24, x: 60, y: 210, w: 130, h: 40, label: 'Nước làm mát', factory: 'aux', subtype: 'aux' },
  { id: 'n2', stt: 23, x: 60, y: 270, w: 130, h: 40, label: 'Sản xuất N₂', factory: 'aux', subtype: 'aux' },
  { id: 'comp-air', stt: 22, x: 60, y: 330, w: 130, h: 40, label: 'Khí nén PA/IA', factory: 'aux', subtype: 'aux' },

  // ===== AMMONIA zone =====
  { id: 'desulf', stt: 1, x: 250, y: 80, w: 140, h: 60, label: '1. Khử lưu huỳnh\nDesulfurization', factory: 'amo' },
  { id: 'reform', stt: 2, x: 420, y: 80, w: 140, h: 60, label: '2. Reforming\nPrimary + Secondary', factory: 'amo' },
  { id: 'shift', stt: 3, x: 590, y: 80, w: 140, h: 60, label: '3. Chuyển hóa CO\nHTS + LTS', factory: 'amo' },
  { id: 'co2rem', stt: 4, x: 760, y: 80, w: 140, h: 60, label: '4. Tách CO₂\n(aMDEA)', factory: 'amo' },
  { id: 'methan', stt: 5, x: 760, y: 180, w: 140, h: 60, label: '5. Mê tan hóa\nMethanation', factory: 'amo' },
  { id: 'synth', stt: 6, x: 590, y: 180, w: 140, h: 60, label: '6. Tổng hợp NH₃\nSynthesis Loop', factory: 'amo' },
  { id: 'refrig', stt: 7, x: 420, y: 180, w: 140, h: 60, label: '7. Vòng làm lạnh\nRefrigeration', factory: 'amo' },
  { id: 'aru', stt: 8, x: 420, y: 260, w: 140, h: 50, label: '8. Thu hồi NH₃ (ARU)', factory: 'amo' },
  { id: 'hru', stt: 9, x: 590, y: 260, w: 140, h: 50, label: '9. Thu hồi H₂ (HRU)', factory: 'amo' },

  // ===== STORAGE (bridges) =====
  { id: 'nh3-tank', stt: 25, x: 760, y: 290, w: 140, h: 60, label: '🛢️ Bồn chứa NH₃\n(-33°C, 16.400 m³)', factory: 'aux', subtype: 'storage' },
  { id: 'co2-supply', stt: null, x: 980, y: 80, w: 90, h: 50, label: 'CO₂\n1.790 t/d', factory: 'amo', subtype: 'product' },

  // ===== UREA zone =====
  { id: 'co2-comp', stt: 10, x: 980, y: 180, w: 140, h: 60, label: '1. Nén CO₂\nCO₂ Compression', factory: 'urea' },
  { id: 'hp-synth', stt: 11, x: 980, y: 280, w: 140, h: 60, label: '2. Tổng hợp Urê\nHP Synthesis', factory: 'urea' },
  { id: 'hp-decomp', stt: 12, x: 980, y: 380, w: 140, h: 60, label: '3. Phân giải HP\nStripper', factory: 'urea' },
  { id: 'mp-decomp', stt: 13, x: 980, y: 470, w: 140, h: 50, label: '4. Phân giải MP', factory: 'urea' },
  { id: 'lp-decomp', stt: 14, x: 980, y: 540, w: 140, h: 50, label: '5. Phân giải LP', factory: 'urea' },
  { id: 'concen', stt: 15, x: 980, y: 610, w: 140, h: 50, label: '6. Cô đặc chân không\n(Urê 96%)', factory: 'urea' },
  { id: 'water-trt', stt: 16, x: 800, y: 540, w: 140, h: 50, label: '7. Xử lý nước CN', factory: 'urea' },
  { id: 'ufc85', stt: 20, x: 800, y: 610, w: 140, h: 50, label: '🧪 Phụ gia UFC85', factory: 'granule', subtype: 'add' },

  // ===== GRANULE zone =====
  { id: 'granul', stt: 17, x: 1200, y: 380, w: 140, h: 60, label: '1. Tạo hạt tầng sôi\nFluidized Bed', factory: 'granule' },
  { id: 'cooling', stt: 19, x: 1200, y: 470, w: 140, h: 50, label: '3. Làm nguội hạt', factory: 'granule' },
  { id: 'dust', stt: 18, x: 1380, y: 380, w: 130, h: 50, label: '2. Thu hồi bụi', factory: 'granule' },

  // ===== FINAL PRODUCT =====
  { id: 'product', stt: null, x: 1200, y: 560, w: 140, h: 60, label: '✅ ĐẠM URÊ\nThành phẩm', factory: 'granule', subtype: 'product' },

  // ===== SUPPORT (bottom) =====
  { id: 'boiler', stt: 26, x: 250, y: 670, w: 130, h: 50, label: 'Nồi hơi & Mạng hơi', factory: 'aux', subtype: 'aux' },
  { id: 'flare', stt: 27, x: 410, y: 670, w: 130, h: 50, label: 'Hệ thống đuốc', factory: 'aux', subtype: 'aux' },
  { id: 'wastewater', stt: 28, x: 570, y: 670, w: 140, h: 50, label: 'Xử lý nước thải', factory: 'aux', subtype: 'aux' },
];

// Map stt to data id
function sttToDataId(stt) {
  if (stt == null) return null;
  const found = data.find(d => d.stt === stt);
  return found ? found.id : null;
}

const mindmapEdges = [
  // Inputs feeding ammonia
  { from: 'ng', to: 'desulf', color: 'blue', label: 'NG' },
  { from: 'air', to: 'reform', color: 'blue', label: 'không khí' },

  // Ammonia main flow (top row L→R)
  { from: 'desulf', to: 'reform', color: 'blue' },
  { from: 'reform', to: 'shift', color: 'blue' },
  { from: 'shift', to: 'co2rem', color: 'blue' },
  // Bend down to second row
  { from: 'co2rem', to: 'methan', color: 'blue' },
  { from: 'methan', to: 'synth', color: 'blue' },
  { from: 'synth', to: 'refrig', color: 'gray', label: 'làm lạnh', dashed: true },

  // CO2 to Urea
  { from: 'co2rem', to: 'co2-supply', color: 'amber' },
  { from: 'co2-supply', to: 'co2-comp', color: 'amber', label: 'CO₂ 99%' },

  // NH3 to storage and Urea
  { from: 'synth', to: 'nh3-tank', color: 'green', label: 'NH₃ lỏng' },
  { from: 'nh3-tank', to: 'hp-synth', color: 'green', label: 'NH₃' },

  // Recovery loops back to synth
  { from: 'synth', to: 'aru', color: 'gray', dashed: true, label: 'purge' },
  { from: 'synth', to: 'hru', color: 'gray', dashed: true },
  { from: 'aru', to: 'synth', color: 'green', dashed: true, label: 'NH₃ thu hồi' },
  { from: 'hru', to: 'synth', color: 'gray', dashed: true, label: 'H₂' },

  // Urea cascade
  { from: 'co2-comp', to: 'hp-synth', color: 'amber' },
  { from: 'hp-synth', to: 'hp-decomp', color: 'green', label: 'Urê 34%' },
  { from: 'hp-decomp', to: 'mp-decomp', color: 'green', label: '43%' },
  { from: 'mp-decomp', to: 'lp-decomp', color: 'green', label: '63%' },
  { from: 'lp-decomp', to: 'concen', color: 'green' },

  // Recycle loops in urea
  { from: 'hp-decomp', to: 'hp-synth', color: 'purple', dashed: true, label: 'Carbamate' },
  { from: 'mp-decomp', to: 'hp-synth', color: 'purple', dashed: true },
  { from: 'lp-decomp', to: 'water-trt', color: 'gray', dashed: true },
  { from: 'water-trt', to: 'lp-decomp', color: 'purple', dashed: true, label: 'tuần hoàn' },

  // Granulation
  { from: 'concen', to: 'granul', color: 'green', label: 'Urê 96%' },
  { from: 'ufc85', to: 'concen', color: 'purple', dashed: true, label: 'phụ gia' },
  { from: 'granul', to: 'cooling', color: 'green' },
  { from: 'granul', to: 'dust', color: 'gray', dashed: true, label: 'khí thải' },
  { from: 'dust', to: 'lp-decomp', color: 'purple', dashed: true, label: 'Urê thu hồi' },
  { from: 'cooling', to: 'product', color: 'green' },

  // Refrigeration to granule cooling
  { from: 'refrig', to: 'cooling', color: 'gray', dashed: true, label: 'NH₃ lạnh' },

  // Aux services (subtle dashed)
  { from: 'water', to: 'co2rem', color: 'purple', dashed: true },
  { from: 'water', to: 'mp-decomp', color: 'purple', dashed: true },
];

const mindmapZones = [
  { x: 30, y: 50, w: 200, h: 380, label: 'XƯỞNG PHỤ TRỢ', color: 'aux' },
  { x: 240, y: 50, w: 510, h: 280, label: 'XƯỞNG AMMONIA', color: 'amo' },
  { x: 750, y: 150, w: 230, h: 240, label: 'CẦU NỐI', color: 'mid' },
  { x: 970, y: 150, w: 160, h: 520, label: 'XƯỞNG UREA', color: 'urea' },
  { x: 1190, y: 360, w: 340, h: 260, label: 'XƯỞNG TẠO HẠT', color: 'granule' },
  { x: 240, y: 650, w: 480, h: 90, label: 'HỖ TRỢ VẬN HÀNH', color: 'aux' },
];

let mmZoom = 1, mmPanX = 0, mmPanY = 0;
let highlightFlows = false;

function renderMindmap() {
  const svg = document.getElementById('mindmapSvg');
  const zonesG = document.getElementById('zones');
  const zoneLabelsG = document.getElementById('zone-labels');
  const connG = document.getElementById('connections');
  const nodesG = document.getElementById('nodes');

  // Zones
  const zoneColors = {
    amo: { fill: 'rgba(0,86,211,0.04)', stroke: 'rgba(0,86,211,0.25)', text: '#0056d3' },
    urea: { fill: 'rgba(4,120,87,0.04)', stroke: 'rgba(4,120,87,0.25)', text: '#047857' },
    granule: { fill: 'rgba(217,119,6,0.04)', stroke: 'rgba(217,119,6,0.25)', text: '#d97706' },
    aux: { fill: 'rgba(124,58,237,0.04)', stroke: 'rgba(124,58,237,0.25)', text: '#7c3aed' },
    mid: { fill: 'rgba(0,0,0,0.02)', stroke: 'rgba(0,0,0,0.08)', text: '#6b7280' },
  };

  zonesG.innerHTML = mindmapZones.map(z => {
    const c = zoneColors[z.color];
    return `<rect x="${z.x}" y="${z.y}" width="${z.w}" height="${z.h}" rx="14" ry="14" fill="${c.fill}" stroke="${c.stroke}" stroke-width="1" stroke-dasharray="4 3"/>`;
  }).join('');

  zoneLabelsG.innerHTML = mindmapZones.map(z => {
    const c = zoneColors[z.color];
    return `<text x="${z.x + 14}" y="${z.y + 22}" font-family="'Be Vietnam Pro',sans-serif" font-size="11" font-weight="700" fill="${c.text}" letter-spacing="1.5">${z.label}</text>`;
  }).join('');

  // Connections
  const colorMap = {
    blue: '#3b82f6', green: '#10b981', amber: '#f59e0b', purple: '#8b5cf6', gray: '#5a6e96'
  };

  function getNode(id) { return mindmapNodes.find(n => n.id === id); }

  function buildPath(from, to) {
    // Center coords
    const fx = from.x + from.w / 2;
    const fy = from.y + from.h / 2;
    const tx = to.x + to.w / 2;
    const ty = to.y + to.h / 2;

    // Determine entry/exit points based on relative position
    const dx = tx - fx;
    const dy = ty - fy;

    let x1, y1, x2, y2;

    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal dominant
      if (dx > 0) { x1 = from.x + from.w; y1 = fy; x2 = to.x; y2 = ty; }
      else { x1 = from.x; y1 = fy; x2 = to.x + to.w; y2 = ty; }
    } else {
      // Vertical dominant
      if (dy > 0) { x1 = fx; y1 = from.y + from.h; x2 = tx; y2 = to.y; }
      else { x1 = fx; y1 = from.y; x2 = tx; y2 = to.y + to.h; }
    }

    // Use bezier with control points
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const isHoriz = Math.abs(x2 - x1) > Math.abs(y2 - y1);

    const cp1x = isHoriz ? mx : x1;
    const cp1y = isHoriz ? y1 : my;
    const cp2x = isHoriz ? mx : x2;
    const cp2y = isHoriz ? y2 : my;

    return { d: `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`, mx: (x1+x2)/2, my: (y1+y2)/2 };
  }

  connG.innerHTML = mindmapEdges.map((e, i) => {
    const from = getNode(e.from);
    const to = getNode(e.to);
    if (!from || !to) return '';
    const { d, mx, my } = buildPath(from, to);
    const color = colorMap[e.color] || '#5a6e96';
    const dash = e.dashed ? 'stroke-dasharray="5 4"' : '';
    const opacity = highlightFlows ? '1' : '0.55';
    const sw = highlightFlows ? '2.2' : '1.6';

    let labelEl = '';
    if (e.label) {
      labelEl = `
        <g class="edge-label" style="pointer-events:none">
          <rect x="${mx - e.label.length*3 - 4}" y="${my - 8}" width="${e.label.length*6 + 8}" height="16" rx="3" fill="rgba(255,255,255,0.95)" stroke="${color}" stroke-opacity="0.4"/>
          <text x="${mx}" y="${my + 3}" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="9" fill="${color}" font-weight="600">${e.label}</text>
        </g>
      `;
    }

    return `
      <g class="edge" data-from="${e.from}" data-to="${e.to}">
        <path d="${d}" fill="none" stroke="${color}" stroke-width="${sw}" ${dash} marker-end="url(#arr-${e.color})" opacity="${opacity}"/>
        ${labelEl}
      </g>
    `;
  }).join('');

  // Nodes
  const factoryFills = {
    amo: { bg: '#dbeafe', border: '#0056d3', text: '#1e3a8a' },
    urea: { bg: '#d1fae5', border: '#047857', text: '#064e3b' },
    granule: { bg: '#fef3c7', border: '#d97706', text: '#78350f' },
    aux: { bg: '#ede9fe', border: '#7c3aed', text: '#4c1d95' },
  };

  const subtypeStyles = {
    input: { ry: 22 },
    storage: { ry: 30 },
    product: { ry: 12 },
    add: { ry: 8 },
    aux: { ry: 8 },
  };

  nodesG.innerHTML = mindmapNodes.map(n => {
    const f = factoryFills[n.factory];
    const ry = (subtypeStyles[n.subtype] && subtypeStyles[n.subtype].ry) || 8;
    const dataId = sttToDataId(n.stt);
    const clickable = dataId !== null;
    const lines = n.label.split('\n');

    const lineHeight = 14;
    const startY = n.y + n.h/2 - ((lines.length - 1) * lineHeight) / 2 + 4;

    // Pill or rounded rectangle
    return `
      <g class="mm-node" data-id="${n.id}" data-data-id="${dataId !== null ? dataId : ''}" 
         style="cursor:${clickable ? 'pointer' : 'default'}">
        <rect x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="${ry}" ry="${ry}"
              fill="${f.bg}" stroke="${f.border}" stroke-width="${n.subtype === 'product' ? '2.5' : '1.5'}"
              ${n.subtype === 'product' ? 'filter="url(#glow)"' : ''}/>
        ${n.stt ? `<text x="${n.x + 8}" y="${n.y + 14}" font-family="'JetBrains Mono',monospace" font-size="9" font-weight="700" fill="${f.text}" opacity="0.6">#${n.stt}</text>` : ''}
        ${lines.map((line, i) => `
          <text x="${n.x + n.w/2}" y="${startY + i * lineHeight}" 
                text-anchor="middle"
                font-family="'Be Vietnam Pro',sans-serif" 
                font-size="${i === 0 ? '11.5' : '10'}" 
                font-weight="${i === 0 ? '700' : '500'}"
                fill="${f.text}">${line}</text>
        `).join('')}
      </g>
    `;
  }).join('');

  // Click handlers
  nodesG.querySelectorAll('.mm-node').forEach(el => {
    el.addEventListener('click', () => {
      const dataId = el.getAttribute('data-data-id');
      if (dataId !== '') openDetail(parseInt(dataId));
    });
    el.addEventListener('mouseenter', () => {
      const id = el.getAttribute('data-id');
      // Highlight connected edges
      connG.querySelectorAll('.edge').forEach(edge => {
        const isConn = edge.getAttribute('data-from') === id || edge.getAttribute('data-to') === id;
        edge.style.opacity = isConn ? '1' : '0.15';
      });
      el.style.filter = 'brightness(1.25)';
    });
    el.addEventListener('mouseleave', () => {
      connG.querySelectorAll('.edge').forEach(edge => edge.style.opacity = '');
      el.style.filter = '';
    });
  });

  applyMindmapTransform();
}

function applyMindmapTransform() {
  const svg = document.getElementById('mindmapSvg');
  svg.style.transform = `translate(${mmPanX}px, ${mmPanY}px) scale(${mmZoom})`;
}

function zoomMindmap(factor) {
  mmZoom = Math.max(0.4, Math.min(2.5, mmZoom * factor));
  applyMindmapTransform();
}

function resetMindmapZoom() {
  mmZoom = 1; mmPanX = 0; mmPanY = 0;
  applyMindmapTransform();
}

function toggleFlowsHighlight() {
  highlightFlows = !highlightFlows;
  document.getElementById('flowToggleBtn').classList.toggle('btn-primary', highlightFlows);
  document.getElementById('flowToggleBtn').classList.toggle('btn-ghost', !highlightFlows);
  renderMindmap();
}

function setupMindmapInteraction() {
  const container = document.getElementById('mindmapContainer');
  let isDragging = false, startX = 0, startY = 0, startPanX = 0, startPanY = 0;

  container.addEventListener('mousedown', e => {
    if (e.target.closest('.mm-node')) return;
    isDragging = true;
    startX = e.clientX; startY = e.clientY;
    startPanX = mmPanX; startPanY = mmPanY;
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    mmPanX = startPanX + (e.clientX - startX);
    mmPanY = startPanY + (e.clientY - startY);
    applyMindmapTransform();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('wheel', e => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.1 : 0.91;
    mmZoom = Math.max(0.4, Math.min(2.5, mmZoom * factor));
    applyMindmapTransform();
  }, { passive: false });

  // Touch support for mobile
  let touchStartDist = 0, touchStartZoom = 1;
  container.addEventListener('touchstart', e => {
    if (e.touches.length === 1) {
      isDragging = true;
      startX = e.touches[0].clientX; startY = e.touches[0].clientY;
      startPanX = mmPanX; startPanY = mmPanY;
    } else if (e.touches.length === 2) {
      isDragging = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStartDist = Math.sqrt(dx*dx + dy*dy);
      touchStartZoom = mmZoom;
    }
  });
  container.addEventListener('touchmove', e => {
    if (e.touches.length === 1 && isDragging) {
      mmPanX = startPanX + (e.touches[0].clientX - startX);
      mmPanY = startPanY + (e.touches[0].clientY - startY);
      applyMindmapTransform();
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx*dx + dy*dy);
      mmZoom = Math.max(0.4, Math.min(2.5, touchStartZoom * (dist / touchStartDist)));
      applyMindmapTransform();
    }
    e.preventDefault();
  }, { passive: false });
  container.addEventListener('touchend', () => { isDragging = false; });
}

let mindmapInitialized = false;
function ensureMindmapInit() {
  if (mindmapInitialized) return;
  renderMindmap();
  setupMindmapInteraction();
  mindmapInitialized = true;
}

// ===== START =====

// ===================================================
// OTHER SKILLS DATA (HTDK & DIEN)
// ===================================================
const OTHER_SKILLS = {

  htdk: {
    id: 'htdk',
    name: 'Tổng quan HTĐK nhà máy Đạm Cà Mau',
    icon: '🖥️',
    color: '#0891b2',
    categories: [
      { id: 'dcs', name: 'DCS', color: '#0056d3' },
      { id: 'esd', name: 'ESD', color: '#dc2626' },
      { id: 'plc', name: 'PLC & MPS & FGS', color: '#047857' },
      { id: 'net', name: 'Kết nối & So sánh', color: '#7c3aed' },
    ],
    data: [
      { id:0, stt:'I', cat:'dcs', name:'DCS – Distributed Control System', sub:'Yokogawa CENTUM VP', goal:'Điều khiển toàn bộ quá trình công nghệ (NH₃, Urea, Utility). Giám sát alarm, trend, interlock.', detail:'Phần cứng: Yokogawa CENTUM VP, System View R5.04.20\nFCS, HIS, EWS, OPC Server\nKhu vực: Ammonia, Urea, Utility (3 khu vực)\nGiao thức: Vnet/IP (nội bộ), Modbus RS-485 (với hệ thống khác)', equip:'7 FCS: Urea (2), Ammonia (2), Utility (2), Mở rộng (1)\n12 HIS: Urea (4), Ammonia (4), Utility (3), Trưởng ca (1)\nUser: UREA_OP, AMM_OP, UTY_OP', params:'Vnet/IP real-time\nModbus RS-485\nOPC → APC, MIS' },
      { id:1, stt:'II', cat:'plc', name:'MPS – Machinery Protection System', sub:'Bently Nevada Rack 3500 (GE)', goal:'Giám sát độ rung, nhiệt độ, độ dịch trục máy động. Phân tích trend orbit, waveform.', detail:'23 Rack 3500:\n• Amo: 12 rack\n• Urea: 7 rack\n• Utility: 4 rack\nMáy tính: 2 Server (System 1) + 5 Client (Citrix, read-only)', equip:'Rack 3500 – GE\nSystem 1 software\nNetwork: 192.168.0.x (MPS) | 192.168.10.x (Client)', params:'Modbus RS-485 → DCS\nEthernet → Client' },
      { id:2, stt:'III', cat:'esd', name:'ESD – Emergency Shutdown System', sub:'TRICONEX (Schneider/Invensys)', goal:'Đưa nhà máy về trạng thái an toàn khi thông số vượt ngưỡng. SIL-3, fail-safe.', detail:'Tiêu chuẩn IEC-61508, SIL-3\nNguyên lý: Fail-safe (energized bình thường → de-energized khi interlock)\n3 hệ ESD: ESD1 Ammonia, ESD2 Urea, ESD3 Utility/Offsite (tổng 16 IS)\nCPU 2oo3, I/O Redundancy, Nguồn Dual', equip:'TRICONEX (Schneider)\nES (kỹ thuật) + OPS (vận hành)\nMOS/POS: override switches', params:'Hardwire ↔ PLC\nModbus RS-485 ↔ DCS\nEthernet ↔ EWS' },
      { id:3, stt:'IV', cat:'plc', name:'PLC – Programmable Logic Controller', sub:'Siemens S7-400 / Allen-Bradley', goal:'Điều khiển máy nén, băng tải, BMS, Demi water, Waste water, Cooling water.', detail:'Máy nén nhỏ K04451/K40401: Allen-Bradley (YORK)\nMáy nén lớn K04421/31/41, K06101: Siemens H400 + FH400 + PLC Trident\nHệ thống phụ trợ: Siemens S7-400\nRedundancy: CPU, I/O, nguồn', equip:'Siemens S7-400, H400, FH400\nAllen-Bradley\nPLC Trident (tốc độ)', params:'Hardwire → ESD/DCS/MPS\nModbus RS-485 → DCS' },
      { id:4, stt:'V', cat:'plc', name:'FGS – Fire & Gas System', sub:'Notifier (Honeywell) + TRICONEX', goal:'Phát hiện cháy, khí độc, khí cháy nổ. Cảnh báo và kích hoạt interlock an toàn.', detail:'Fire Alarm: Notifier NFS2-640E (×5), NFS2-3030 (×1)\nGas Detection: TRICONEX SIL-3\n88 đầu dò NH₃, 15 đầu dò khí cháy nổ, 4 đầu dò CO\nCPU 2oo3, I/O Redundancy, Nguồn Dual', equip:'Notifier by Honeywell\nTRICONEX SIL-3\nMIMIC Panels (×3)', params:'Hardwire → ESD\nModbus → DCS, MIMIC\nEthernet → OPS\nNotifire Net (FA)' },
      { id:5, stt:'VI', cat:'net', name:'PRM – Plant Resource Manager', sub:'Yokogawa PRM', goal:'Quản lý thiết bị hiện trường. Online điều chỉnh & chẩn đoán thiết bị FF/HART.', detail:'Kết nối FF-H1 Fieldbus & HART Multiplexer.\nTất cả thiết bị FF/HART trong nhà máy.', equip:'Yokogawa PRM', params:'Vnet/IP → DCS\nRS-485 (HART MUX)' },
      { id:6, stt:'VI', cat:'net', name:'MIS – Management Information System', sub:'Historian + App Server', goal:'Hiển thị thông số vận hành DCS cho lãnh đạo. Trend, report (ghi chậm hơn DCS).', detail:'Historian Server + App Server\nClient tại phòng lãnh đạo/xưởng\nToàn nhà máy (read-only)', equip:'Historian Server\nApp Server\nClients', params:'OPC (lấy data từ DCS OPC Server)' },
      { id:7, stt:'VI', cat:'net', name:'Woodward Turbine Controller', sub:'Peak 150', goal:'Điều khiển turbine hơi cho bơm, quạt (BT04201, PT29201A, PT21101A, PT21201A).', detail:'Woodward Peak 150\nBơm, quạt truyền động turbine hơi', equip:'Woodward Peak 150', params:'Hardwire + Modbus → DCS, ESD' },
    ],
    mindmap: {
      nodes: [
        { id:'field', x:60, y:120, w:150, h:50, label:'⚙️ THIẾT BỊ\nHIỆN TRƯỜNG', cat:'aux', sub:'input' },
        { id:'sensor', x:60, y:220, w:150, h:50, label:'📡 Cảm biến\nTransmitter', cat:'aux', sub:'input' },
        { id:'valve', x:60, y:320, w:150, h:50, label:'🔧 Van điều khiển\nActuator', cat:'aux', sub:'input' },
        { id:'dcs', x:380, y:60, w:200, h:80, label:'DCS\nYokogawa CENTUM VP\n7 FCS · 12 HIS', cat:'dcs' },
        { id:'esd', x:380, y:200, w:200, h:70, label:'ESD\nTRICONEX SIL-3\n3 hệ · 16 IS', cat:'esd' },
        { id:'plc', x:380, y:330, w:200, h:70, label:'PLC\nSiemens S7-400\nMáy nén · Phụ trợ', cat:'plc' },
        { id:'mps', x:380, y:460, w:200, h:60, label:'MPS\nBently Nevada\n23 Rack 3500', cat:'plc' },
        { id:'fgs', x:380, y:570, w:200, h:60, label:'FGS\nNotifier + TRICONEX\n107 đầu dò', cat:'plc' },
        { id:'his', x:700, y:40, w:160, h:50, label:'👨‍💻 HIS\nOperator Station', cat:'dcs' },
        { id:'ews', x:700, y:120, w:160, h:50, label:'🔧 EWS\nEngineering Station', cat:'dcs' },
        { id:'opc', x:700, y:200, w:160, h:50, label:'📊 OPC Server', cat:'net' },
        { id:'apc', x:950, y:170, w:140, h:50, label:'🤖 APC\nAdvanced Control', cat:'net' },
        { id:'mis', x:950, y:250, w:140, h:50, label:'📋 MIS\nManagement Info', cat:'net' },
        { id:'prm', x:700, y:300, w:160, h:50, label:'🔍 PRM\nDevice Management', cat:'net' },
        { id:'es', x:700, y:400, w:160, h:50, label:'💻 ES / OPS\nESD Engineering', cat:'esd' },
        { id:'s1', x:700, y:480, w:160, h:50, label:'📈 System 1\nVibration Analysis', cat:'plc' },
        { id:'mimic', x:700, y:560, w:160, h:50, label:'🖥️ MIMIC Panel\nFire & Gas Display', cat:'plc' },
        { id:'wood', x:380, y:650, w:200, h:50, label:'Woodward Peak 150\nTurbine Controller', cat:'net' },
      ],
      edges: [
        { from:'sensor', to:'dcs', color:'blue', label:'4-20mA / FF' },
        { from:'dcs', to:'valve', color:'blue', label:'4-20mA' },
        { from:'sensor', to:'esd', color:'gray', label:'4-20mA 2oo3' },
        { from:'sensor', to:'plc', color:'gray' },
        { from:'dcs', to:'his', color:'blue', label:'Vnet/IP' },
        { from:'dcs', to:'ews', color:'blue', label:'Vnet/IP' },
        { from:'dcs', to:'opc', color:'blue', label:'Vnet/IP' },
        { from:'opc', to:'apc', color:'purple', label:'OPC' },
        { from:'opc', to:'mis', color:'purple', label:'OPC' },
        { from:'dcs', to:'esd', color:'amber', label:'Modbus RS-485' },
        { from:'dcs', to:'plc', color:'amber', label:'Modbus RS-485' },
        { from:'dcs', to:'mps', color:'amber', label:'Modbus RS-485' },
        { from:'dcs', to:'fgs', color:'amber', label:'Modbus RS-485' },
        { from:'esd', to:'plc', color:'gray', dashed:true, label:'Hardwire' },
        { from:'esd', to:'es', color:'green', label:'Ethernet' },
        { from:'plc', to:'mps', color:'gray', dashed:true, label:'Hardwire' },
        { from:'mps', to:'s1', color:'green', label:'TCP/IP' },
        { from:'fgs', to:'mimic', color:'amber', label:'Modbus' },
        { from:'fgs', to:'esd', color:'gray', dashed:true, label:'Hardwire' },
        { from:'prm', to:'dcs', color:'blue', label:'Vnet/IP' },
        { from:'wood', to:'dcs', color:'amber', label:'Modbus' },
        { from:'wood', to:'esd', color:'gray', dashed:true, label:'Hardwire' },
      ],
      zones: [
        { x:30, y:90, w:200, h:310, label:'HIỆN TRƯỜNG', color:'aux' },
        { x:250, y:30, w:360, h:130, label:'DCS', color:'amo' },
        { x:250, y:170, w:360, h:130, label:'ESD / SIS', color:'esd' },
        { x:250, y:310, w:360, h:340, label:'PLC · MPS · FGS', color:'granule' },
        { x:670, y:10, w:220, h:360, label:'GIÁM SÁT & QUẢN LÝ', color:'urea' },
        { x:920, y:140, w:200, h:180, label:'HỆ THỐNG CAO CẤP', color:'mid' },
      ],
      legend: [
        { label:'DCS (Yokogawa)', color:'#0056d3' },
        { label:'ESD (TRICONEX)', color:'#dc2626' },
        { label:'PLC / MPS / FGS', color:'#047857' },
        { label:'Kết nối & Quản lý', color:'#7c3aed' },
      ]
    },
    flashcards: [
      { q:'DCS nhà máy dùng phần mềm gì? Phiên bản?', a:'System View R5.04.20 của Yokogawa.', cat:'dcs' },
      { q:'FCS là gì? DCS có bao nhiêu FCS?', a:'Field Control Station – thực hiện điều khiển công nghệ. Có 7 FCS (Urea 2, Amo 2, Utility 3).', cat:'dcs' },
      { q:'HIS là gì? Tổng có bao nhiêu máy HIS?', a:'Human Interface Station – giao diện người vận hành. Có 12 máy HIS.', cat:'dcs' },
      { q:'DCS giao tiếp với ESD, PLC qua giao thức gì?', a:'Modbus RS-485.', cat:'dcs' },
      { q:'ESD đạt chuẩn an toàn nào? Phần cứng là gì?', a:'SIL-3. Phần cứng: TRICONEX (Schneider/Invensys).', cat:'esd' },
      { q:'ESD chia làm mấy hệ? Đó là những hệ nào?', a:'3 hệ: ESD1 Ammonia, ESD2 Urea, ESD3 Utility/Offsite – tổng 16 IS.', cat:'esd' },
      { q:'Nguyên lý fail-safe của ESD là gì?', a:'Energized bình thường → De-energized khi interlock kích hoạt.', cat:'esd' },
      { q:'MPS viết tắt là gì? Dùng phần cứng nào?', a:'Machinery Protection System. Bently Nevada Rack 3500 của GE, phần mềm System 1.', cat:'plc' },
      { q:'MPS có bao nhiêu rack 3500? Phân bổ thế nào?', a:'23 rack: Amo 12, Urea 7, Utility 4.', cat:'plc' },
      { q:'FGS gồm 2 thành phần chính là gì?', a:'Fire Alarm (Notifier/Honeywell NFS2) và Gas Detection (TRICONEX SIL-3 + Honeywell sensors).', cat:'plc' },
      { q:'Gas Detection có bao nhiêu đầu dò?', a:'88 đầu dò NH₃ + 15 đầu dò khí cháy nổ + 4 đầu dò CO = 107 đầu dò.', cat:'plc' },
      { q:'PRM là gì? Kết nối với DCS qua mạng nào?', a:'Plant Resource Manager – quản lý thiết bị FF/HART. Kết nối DCS qua Vnet/IP.', cat:'net' },
      { q:'MIS lấy dữ liệu từ đâu?', a:'Lấy qua OPC Server từ DCS. Hiển thị thông số vận hành cho lãnh đạo.', cat:'net' },
      { q:'Máy nén lớn K04421 điều khiển bằng hệ gì?', a:'PLC Siemens H400 (điều khiển chung) + FH400 (safety) + PLC Trident (tốc độ).', cat:'plc' },
      { q:'Cảnh báo Mức 2 (HH/LL) kích hoạt hành động gì?', a:'ESD kích hoạt Safety Interlock → ngừng thiết bị / công đoạn / toàn nhà máy.', cat:'esd' },
    ]
  },

  van: {
    id: 'van',
    name: 'Thiết bị chấp hành – Van điều khiển',
    icon: '🔧',
    color: '#7c3aed',
    renderMode: 'van',
    categories: [
      { id: 'body', name: 'Thân van (Body)',          color: '#0891b2' },
      { id: 'act',  name: 'Actuator',                 color: '#dc2626' },
      { id: 'pos',  name: 'Positioner & Phụ kiện',    color: '#047857' },
      { id: 'fs',   name: 'Fail-safe & Kết nối',      color: '#d97706' },
    ],

    /* ──────────────────────────────────────────────────────────────────
       CONCEPTS: Click vào chip bất kỳ trong card để xem giải thích
    ────────────────────────────────────────────────────────────────── */
    concepts: {
      eq_pct:   { title:'Equal Percentage (% đồng đều)', e:'📈',
        body:'Mỗi % thay đổi độ mở → % thay đổi Cv bằng nhau so với giá trị hiện tại.\nCông thức: Cv = Cv_min × R^(lift/max_lift)  với R = rangeability (~50:1).\nDùng khi ΔP qua van thay đổi theo lưu lượng – phổ biến nhất trong vòng PID.',
        note:'Hầu hết Globe valve điều tiết tại NM Đạm Cà Mau dùng đặc tính Equal%.' },
      linear:   { title:'Linear Characteristic (Tuyến tính)', e:'📏',
        body:'Cv thay đổi tuyến tính với % độ mở: Cv = Cv_max × (lift / max_lift).\nDùng khi ΔP qua van gần như không đổi.\nÍt phổ biến hơn Equal% trong điều khiển PID.' },
      fast_op:  { title:'Fast Opening / Quick Opening (Mở nhanh)', e:'⚡',
        body:'Cv tăng rất nhanh ở những % mở đầu tiên (25% hành trình → ~80% Cv max).\nDùng cho van ON-OFF – không dùng trong vòng điều khiển PID.\nPhổ biến: Gate valve, Ball valve full-bore, Butterfly concentric.' },
      da:       { title:'Direct Acting (DA) – Tác động thuận', e:'⬇️',
        body:'Khí nén cấp vào PHÍA TRÊN màng diaphragm → áp tăng → stem ĐI XUỐNG.\nQuy tắc fail-safe:\n  DA + ATO (Air-To-Open)  = Fail-Close (FC)\n  DA + ATC (Air-To-Close) = Fail-Open  (FO)',
        note:'Fisher 657 là DA actuator phổ biến nhất tại NM Đạm Cà Mau.' },
      ra:       { title:'Reverse Acting (RA) – Tác động nghịch', e:'⬆️',
        body:'Khí nén cấp vào PHÍA DƯỚI màng diaphragm → áp tăng → stem ĐI LÊN.\nQuy tắc fail-safe:\n  RA + ATO = Fail-Open  (FO)\n  RA + ATC = Fail-Close (FC)',
        note:'Fisher 667 là RA actuator tại NM Đạm Cà Mau.' },
      sa:       { title:'Single Acting (SA) – Tác động đơn', e:'1️⃣',
        body:'Chỉ 1 phía được cấp khí nén; phía còn lại là lò xo hồi vị.\nƯu điểm: Fail-safe TỰ NHIÊN khi mất khí → lò xo đưa van về FC hoặc FO.\nDùng phổ biến cho Rack & Pinion actuator (van bi, bướm, nút).' },
      dbl_act:  { title:'Double Acting (DA) – Tác động kép', e:'2️⃣',
        body:'Cả 2 phía đều cấp khí nén luân phiên → lực lớn hơn, kiểm soát chính xác hơn.\nKHÔNG có lò xo hồi vị → KHÔNG tự fail-safe khi mất khí.\nCần thêm Trip valve 377 hoặc Lock-up valve để xử lý fail-safe.',
        note:'Piston Double Acting + Trip Valve 377: 3 chế độ FC / FL / FO.' },
      bench:    { title:'Bench Set – Thông số quan trọng nhất', e:'🔑',
        body:'Bench set = khoảng áp suất khí nén để actuator di chuyển đủ hành trình (0%→100%) TẠI XƯỞNG, khi CHƯA gắn body vào đường ống (không có áp process).\nVí dụ: DA 3–13 psi = cần 3 psi để bắt đầu, 13 psi để đạt 100% stroke.\nKhi lắp vào line, áp process tác động lên plug → lệch bench set → cần In-service adjustment.',
        note:'GT-ĐK-028: Bench set là thông số QUAN TRỌNG NHẤT của actuator diaphragm.' },
      deadband: { title:'Dead Band – Vùng chết', e:'🎯',
        body:'Dead band = dải tín hiệu vào mà van KHÔNG di chuyển, do ma sát cơ học trong packing và gland.\nĐơn vị: % tín hiệu điều khiển (0–100%).\nTypical: < 0.5% (positioner tốt), 2–5% (ma sát lớn).\nDead band lớn → gây dao động (hunting) trong vòng PID.\nGiảm bằng: positioner chất lượng cao + giảm lực kẹp packing.' },
      travel:   { title:'Travel – Hành trình van', e:'↕️',
        body:'Travel (stroke): Khoảng cách di chuyển thực tế của stem từ đóng hoàn toàn đến mở hoàn toàn.\nĐơn vị: inch hoặc mm  (1 inch = 25.4 mm).\nGT-ĐK-028 ví dụ:\n  Travel 3.5" = 3.5 × 25.4 = 88.9 ≈ 89 mm\n  Travel 1.5" = 1.5 × 25.4 = 38.1 ≈ 38 mm\nPositioner đo % travel để phản hồi vị trí thực tế về DCS.' },
      fc:       { title:'Fail-Close (FC) – Đóng khi sự cố', e:'🔒',
        body:'Van tự ĐÓNG khi mất nguồn khí nén hoặc tín hiệu.\nDùng cho: Van cấp NH₃, HC, hóa chất nguy hiểm.\nThực hiện qua lò xo actuator:\n  DA + ATO = FC\n  RA + ATC = FC' },
      fo:       { title:'Fail-Open (FO) – Mở khi sự cố', e:'🔓',
        body:'Van tự MỞ khi mất nguồn khí nén hoặc tín hiệu.\nDùng cho: Van bypass làm mát, van cấp steam, van quench.\nThực hiện qua lò xo:\n  DA + ATC = FO\n  RA + ATO = FO' },
      fl:       { title:'Fail-Last / Fail-Lock (FL) – Giữ vị trí', e:'🔐',
        body:'Van giữ nguyên vị trí cuối cùng khi mất tín hiệu điều khiển.\nThực hiện bằng: Lock-up valve (giữ áp trong actuator) hoặc Trip valve 377 chế độ FL.\nDùng khi cả đóng lẫn mở đều nguy hiểm.',
        note:'Trip valve 377 chế độ FL = bịt kín 2 ngõ C&F → giữ áp cả 2 phía cylinder.' },
      t377:     { title:'Trip Valve Fisher 377', e:'🔀',
        body:'Trip valve 3-way dùng cho Piston Double Acting (không có lò xo tự nhiên).\nTích hợp 2 air relay bên trong, điều khiển 2 cổng cylinder.\n3 chế độ đấu nối:\n  FC – Bình tích áp 1 ngõ → mất tín hiệu → van đóng\n  FL – Bịt kín 2 ngõ C&F  → giữ vị trí cuối\n  FO – Đảo ngược cổng C&F → mất tín hiệu → van mở',
        note:'GT-ĐK-028: Trip valve 377 tích hợp 2 air relay. Khác air relay đơn (chỉ 1 bộ 3 ngõ).' },
      lockup:   { title:'Lock-up Valve – Van giữ áp', e:'🔐',
        body:'Tự động KHÓA khí trong actuator khi áp supply giảm đột ngột → van giữ vị trí (Fail-Last FL).\nKhác Trip valve: Lock-up chỉ giữ áp, không chủ động đổi trạng thái.\nSetpoint: 20–100 PSIG.' },
      solenoid: { title:'Solenoid Valve – Van điện từ', e:'⚡',
        body:'Van điện từ ON-OFF nguồn khí cho actuator hoặc trip valve.\nNguyên lý: Cuộn dây điện từ → lực từ → plunger → đóng/mở.\nTín hiệu: 24 VDC / 110/230 VAC.\nDe-energize-to-trip (DET): mất điện → fail-safe position.\nDùng trong ESD/SIS cho van on-off quan trọng.' },
      lsb:      { title:'Limit Switch Box (LSB) – Hộp báo vị trí', e:'📡',
        body:'LSB lắp trên actuator để báo trạng thái OPEN / CLOSE về DCS hoặc ESD.\nGồm 2 switch: 1 báo OPEN, 1 báo CLOSE.\nTín hiệu ra: Dry contact (NO/NC) → DCS Digital Input.\nLoại: Micro-switch cơ hoặc Proximity switch (từ / điện dung).',
        note:'Van bướm 04HV-5003 (Tomoe) tại NM có LSB báo trạng thái về DCS.' },
      vball:    { title:'V-Ball Valve – Van Bi Chữ V', e:'🅥',
        body:'Ball valve với cạnh cắt hình chữ V trên ball.\nMục đích: Tạo đặc tính Equal% → cho phép ĐIỀU TIẾT (không chỉ ON-OFF).\nDùng Rack & Pinion + Positioner để điều khiển chính xác góc mở.\nLợi thế: Ít bị tắc với lưu chất nhớt, slurry, sợi.\nVí dụ: Fisher V500, V300.' },
      weir:     { title:'Weir Type – Van Màng Kiểu Gờ', e:'🌊',
        body:'Diaphragm valve có "weir" (gờ nhô cao) giữa thân van.\nMàng ép xuống weir để đóng van.\nCó thể điều tiết lưu lượng → cần positioner.\nStraight-through type: không có weir → chỉ ON-OFF.\nƯu: vệ sinh, không khoang chết, phù hợp ăn mòn/tiệt trùng.' },
      smart_pos:{ title:'Smart HART Positioner', e:'🧠',
        body:'Positioner kỹ thuật số giao tiếp qua HART protocol.\nTín hiệu vào:  4-20 mA + HART digital\nTín hiệu ra:   Khí nén 0.2–1 bar → actuator\nChức năng:\n  Auto-calibration, Valve diagnostics (valve signature),\n  Partial Stroke Test (PST), Dead band monitor.\nGiao tiếp HART cho phép đọc/ghi từ xa qua DCS/AMS.' },
      dvc6200:  { title:'Fisher DVC6200 – Smart HART Positioner', e:'🔬',
        body:'DVC6200 (Digital Valve Controller) = smart positioner phổ biến nhất tại NM Đạm Cà Mau.\nGiao thức: HART.\nPST (Partial Stroke Test): Kiểm tra ESD valve định kỳ mà không dừng quá trình.\nAMS Device Manager: Giám sát, cấu hình, chẩn đoán từ xa.',
        note:'DVC6200 lắp trên hầu hết Globe valve điều tiết quan trọng tại NM.' },
      f657:     { title:'Fisher 657 – Direct Acting Diaphragm Actuator', e:'⬇️',
        body:'Diaphragm actuator loại Direct Acting (DA) phổ biến nhất tại NM.\nKhí nén cấp TRÊN màng → stem đi XUỐNG khi áp tăng.\nDA + ATO = Fail-Close (FC)\nDA + ATC = Fail-Open  (FO)',
        note:'Fisher 657 + DVC6200 = cặp đôi phổ biến nhất tại NM Đạm Cà Mau.' },
      f667:     { title:'Fisher 667 – Reverse Acting Diaphragm Actuator', e:'⬆️',
        body:'Diaphragm actuator loại Reverse Acting (RA).\nKhí nén cấp DƯỚI màng → stem đi LÊN khi áp tăng.\nRA + ATO = Fail-Open  (FO)\nRA + ATC = Fail-Close (FC)' },
      rotork:   { title:'Rotork / Auma / Biffi – Electric Actuator (MOV)', e:'⚡',
        body:'3 hãng MOV chính tại NM Đạm Cà Mau:\n• Rotork (UK) – IQ3 series: ON-OFF & modulating, HART/Profibus\n• Auma (Germany) – SA/SAR series: robust, phổ biến công nghiệp nặng\n• Biffi (Italy): Chuyên van khí đường kính lớn\nTất cả đều có: Local/Remote selector, Torque limiter, Position feedback 4-20mA, Local panel.' },
      ih_cvt:   { title:'I/H Converter – Biến đổi dòng / thủy lực', e:'🔄',
        body:'I/H (Current-to-Hydraulic): Biến đổi 4-20 mA → áp suất dầu thủy lực.\nTương tự I/P nhưng đầu ra là dầu thủy lực (100–300 bar) thay vì khí nén.\nDùng cho Electrohydraulic actuator: Turbine governor, Compressor speed control.\nYêu cầu đáp ứng < 100 ms.' },
      torque:   { title:'Torque – Moment xoắn', e:'🔧',
        body:'Torque (Nm): Lực xoay của Rack & Pinion actuator để đóng/mở van quay.\nActuator phải có torque đủ lớn ở mọi điều kiện process.\nYếu tố ảnh hưởng: áp process (unbalanced force), ma sát packing, kích thước van.\nTypical safety factor: 1.25–1.5 × breakaway torque.\nSo sánh: Thrust (N) cho linear actuator; Torque (Nm) cho rotary.' },
      dashpot:  { title:'Dash-pot – Giảm chấn thủy lực', e:'🛡️',
        body:'Dash-pot: thiết bị giảm chấn thủy lực gắn trên đĩa check valve.\nMục đích: Giảm tốc độ đóng đĩa khi dòng chảy đảo chiều → tránh water hammer.\nNguyên lý: Piston trong cylinder dầu → dầu chảy qua orifice nhỏ → chậm lại.\nWater hammer: Sóng áp suất khi van đóng quá nhanh → nguy cơ vỡ đường ống.' },
      regulator:{ title:'Pressure Regulator – Bộ điều áp khí', e:'🌬️',
        body:'Air regulator ổn định áp suất khí supply cho positioner/actuator đúng bench set.\nThường: Giảm từ 6–7 bar (header) xuống 1.4 bar (positioner) hoặc 4 bar (actuator direct).\nTích hợp filter: Lọc dầu, nước, bụi bẩn trong khí nén.\nFisher 67D/67C tại NM.' },
      booster:  { title:'Volume Booster – Bộ khuếch đại lưu lượng', e:'💨',
        body:'Tăng lưu lượng khí đến actuator MÀ KHÔNG thay đổi áp suất.\nMục đích: Giảm stroke time của van lớn.\nTỷ lệ: 1:1 áp suất, nhưng lưu lượng × 5–10 lần.\nFisher 2625 tại NM.\nLắp song song với positioner output.' },
    },

    /* ──────────────────────────────────────────────────────────────────
       DATA: 17 mục – mỗi mục có cells[] (hiển thị thẻ) + goal/detail (popup)
    ────────────────────────────────────────────────────────────────── */
    data: [
      /* ========== THÂN VAN (BODY) – B1–B7 ========== */
      { id:0, stt:'B1', cat:'body', name:'Van cầu – Globe Valve', sub:'Sliding-stem · Equal% · Điều tiết chính xác',
        cells:[
          { l:'Chuyển động',         v:'Tịnh tiến (Sliding-stem)' },
          { l:'Đặc tính lưu lượng',  c:[{t:'Equal %',k:'eq_pct'},{t:'Linear',k:'linear'},{t:'Fast-opening',k:'fast_op'}] },
          { l:'Actuator thường dùng',c:[{t:'Diaphragm/Spring',k:'f657'},{t:'Piston (van lớn)',k:'dbl_act'}], w:1 },
          { l:'Positioner',          v:'✓ Bắt buộc – Smart / Analog I/P / Pneumatic' },
          { l:'Fail-safe',           c:[{t:'FC (Fail-Close)',k:'fc'},{t:'FO (Fail-Open)',k:'fo'}] },
          { l:'Ghi chú NM',          v:'Fisher GX/ED/EZ – Rangeability 50:1' },
        ],
        goal:'Van điều tiết phổ biến nhất tại NM Đạm Cà Mau (hãng Fisher). Kiểm soát lưu lượng chính xác liên tục. Dùng với positioner Smart/Analog I/P.',
        detail:'Cấu tạo: Thân hình cầu, stem trượt lên/xuống điều chỉnh orifice (sliding-stem). Dòng chảy đổi hướng qua thân.\nĐặc tính lưu lượng: Equal percentage (phổ biến nhất cho PID), Linear, Fast-opening.\nActuator: Diaphragm màng lò xo (DA/RA) hoặc Piston (van lớn).\nBắt buộc có POSITIONER để điều tiết chính xác.\nFail-safe: FC hoặc FO qua lò xo actuator.',
        equip:'Fisher GX, ED, EZ (tại NM)\nPositioner: Fisher DVC6200 (HART)',
        params:'Rangeability: 50:1\nChar: equal%, linear, fast-opening\nPositioner: BẮT BUỘC' },

      { id:1, stt:'B2', cat:'body', name:'Van cửa – Gate Valve', sub:'On-off · Full-bore · ΔP thấp · 04HV-2082',
        cells:[
          { l:'Chuyển động',  v:'Tịnh tiến (Nâng đĩa – gate)' },
          { l:'Mục đích',     v:'ON-OFF – KHÔNG điều tiết' },
          { l:'Đặc tính',     c:[{t:'Fast-opening',k:'fast_op'},{t:'Full-bore ΔP≈0'}] },
          { l:'Actuator',     c:[{t:'Tay quay (manual)'},{t:'Piston',k:'dbl_act'},{t:'Rack & Pinion',k:'torque'},{t:'MOV',k:'rotork'}], w:1 },
          { l:'Positioner',   v:'✗ Không cần (ON-OFF)' },
          { l:'Ghi chú NM',   v:'04HV-2082 tại NM Đạm Cà Mau' },
        ],
        goal:'Đóng/mở hoàn toàn (on-off). Tổn thất áp suất thấp nhất khi mở hoàn toàn (full-bore). Chủ yếu tay quay, tự động dùng Piston/Rack & Pinion.',
        detail:'Cấu tạo: Gate (tấm chắn) trượt vuông góc với dòng chảy. Chỉ ở vị trí đóng hoàn toàn hoặc mở hoàn toàn.\nFull-bore: đường kính trong = đường kính ống → ΔP ≈ 0 khi mở.\nActuator: Chủ yếu TAY QUAY. Tự động: Piston, Rack & Pinion, Electric (Rotork, Auma).\nKHÔNG cần positioner (van on-off).',
        equip:'04HV-2082 (tại NM)\nWedge gate, Parallel slide\nActuator: Piston / Rack & Pinion / Rotork, Auma',
        params:'Char: Fast-opening\nFull-bore: ΔP ≈ 0 khi mở\nChỉ On-off, KHÔNG điều tiết\nKhông cần Positioner' },

      { id:2, stt:'B3', cat:'body', name:'Van nút – Plug Valve', sub:'Xoay 90° · 2-way / 3-way · Chuyển hướng dòng',
        cells:[
          { l:'Chuyển động',  v:'Xoay 90° (Rotary)' },
          { l:'Mục đích',     v:'ON-OFF hoặc chuyển hướng dòng 3-way' },
          { l:'Actuator',     c:[{t:'Tay quay (manual)'},{t:'Rack & Pinion',k:'torque'},{t:'MOV',k:'rotork'}], w:1 },
          { l:'Positioner',   v:'✗ Không cần (ON-OFF)' },
          { l:'Fail-safe',    c:[{t:'Single acting FC/FO',k:'sa'},{t:'Double acting + Trip 377',k:'t377'}], w:1 },
        ],
        goal:'Đóng/mở nhanh hoặc chuyển hướng dòng chảy (3-way mix/divert). Cấu trúc đơn giản. Chủ yếu tay quay, tự động dùng Rack & Pinion/Electric.',
        detail:'Cấu tạo: Plug hình trụ/côn có lỗ xoay 90° trong thân.\nLoại: 2-way (on-off), 3-way (phân phối hoặc trộn 2 dòng).\nActuator: Chủ yếu TAY QUAY. Tự động: Rack & Pinion hoặc Electric.\nKHÔNG cần positioner. Không dùng điều tiết.',
        equip:'2-way Plug valve\n3-way Plug valve (mix/divert)\nActuator: Rack & Pinion / Electric',
        params:'Stroke: 90°\nChar: Fast-opening\n3-way: mix hoặc divert\nKhông cần Positioner' },

      { id:3, stt:'B4', cat:'body', name:'Van bi – Ball Valve', sub:'Xoay 90° · On-off nhanh · V-ball điều tiết · Rotork/Auma/Biffi',
        cells:[
          { l:'Chuyển động',  v:'Xoay 90° (Rotary)' },
          { l:'Phân loại',    c:[{t:'Full Bore – ON-OFF'},{t:'V-ball – Điều tiết',k:'vball'}] },
          { l:'Actuator',     c:[{t:'Rack & Pinion (ON-OFF)',k:'torque'},{t:'MOV Rotork/Auma/Biffi',k:'rotork'}], w:1 },
          { l:'Positioner',   v:'Chỉ khi dùng V-ball điều tiết' },
          { l:'Fail-safe',    c:[{t:'Single acting FC/FO',k:'sa'},{t:'Double acting + Trip 377',k:'t377'},{t:'MOV + UPS',k:'rotork'}], w:1 },
        ],
        goal:'On-off nhanh, kín tốt. V-ball dùng điều tiết lưu chất nhớt/slurry. Actuator phổ biến: Rack & Pinion. Electric: Rotork, Auma, Biffi tại NM.',
        detail:'Cấu tạo: Ball hình cầu có lỗ xoay 90° giữa 2 vòng làm kín.\nFull-bore ball: đường kính lỗ = đường ống → on-off, fast-opening.\nV-ball (V-notch): đặc tính equal percentage → điều tiết slurry, nhớt.\nActuator: Rack & Pinion (phổ biến nhất, 90° rotary). Electric: Rotork, Auma, Biffi.\nPositioner: CHỈ dùng khi V-ball điều tiết.',
        equip:'Full-bore Ball (on-off)\nFisher V500, V300 (V-ball)\nRack & Pinion (Single/Double acting)\nRotork, Auma, Biffi (Electric MOV)',
        params:'Char: Fast-opening (full-bore)\nChar: Equal% (V-ball)\nPositioner: CHỈ khi V-ball\nLeakage: Class IV-VI' },

      { id:4, stt:'B5', cat:'body', name:'Van bướm – Butterfly Valve', sub:'Xoay 90° · Rack & Pinion · Tomoe 04HV-5003 · LSB',
        cells:[
          { l:'Chuyển động',  v:'Xoay 90° (Rotary – Disc)' },
          { l:'Loại',         c:[{t:'Concentric (ON-OFF)'},{t:'Double/Triple-eccentric (điều tiết)'}] },
          { l:'Actuator',     c:[{t:'Rack & Pinion Tomoe',k:'torque'},{t:'MOV Rotork/Auma',k:'rotork'}], w:1 },
          { l:'Positioner',   v:'Khi dùng điều tiết (triple eccentric)' },
          { l:'Phụ kiện',     c:[{t:'Limit Switch Box LSB',k:'lsb'},{t:'Solenoid valve',k:'solenoid'}] },
          { l:'Ghi chú NM',   v:'Hãng Tomoe – 04HV-5003, Rack & Pinion' },
        ],
        goal:'Tiết kiệm chi phí ống lớn. On-off và điều tiết thô. Actuator Rack & Pinion (Tomoe). Có Limit Switch Box báo trạng thái.',
        detail:'Cấu tạo: Disc hình đĩa xoay 90° quanh trục giữa trong thân.\nLoại: Concentric (fast-opening, kín kém), Double-eccentric, Triple-eccentric (metal-to-metal, equal%, PN cao).\nActuator: Rack & Pinion (Tomoe, 04HV-5003): Single hoặc Double acting.\nLimit Switch Box: báo trạng thái ON/OFF về DCS/ESD.',
        equip:'04HV-5003 – Tomoe (Rack & Pinion, NM)\nLimit Switch Box (LSB)\nRotork, Auma (Electric option)',
        params:'Stroke: 90°\nChar: Fast-opening (concentric)\nDN lớn ≥ DN100\nLSB báo trạng thái về DCS' },

      { id:5, stt:'B6', cat:'body', name:'Van màng – Diaphragm Valve', sub:'Lưu chất ăn mòn · Diaphragm actuator · ITT',
        cells:[
          { l:'Chuyển động',  v:'Tịnh tiến (Màng cao su/PTFE)' },
          { l:'Phân loại',    c:[{t:'Weir type (điều tiết)',k:'weir'},{t:'Straight-through (ON-OFF)'}] },
          { l:'Actuator',     c:[{t:'Diaphragm actuator (ITT)',k:'f657'}], w:1 },
          { l:'Positioner',   v:'Khi điều tiết Weir type' },
          { l:'Ứng dụng',     v:'Lưu chất ăn mòn, bùn, vô trùng – không packing' },
        ],
        goal:'Phù hợp lưu chất ăn mòn, hóa chất. Không tiếp xúc lưu chất và cơ cấu truyền động. Actuator Diaphragm màng lò xo. ITT tại NM.',
        detail:'Cấu tạo: Màng đàn hồi ép lên saddle/weir để chặn dòng. Không có packing tiếp xúc lưu chất.\nLoại: Weir type (tác động thẳng, có thể điều tiết), Straight-through.\nActuator: Diaphragm actuator DA, áp suất 2-7 bar.\nTại NM: hãng ITT với diaphragm actuator.',
        equip:'ITT Diaphragm Valve (tại NM)\nWeir type, Straight-through\nActuator: Diaphragm DA\nLining: PTFE, Rubber, EPDM',
        params:'Char: Linear (Weir type)\nPN thấp < 16 bar\nActuator: Diaphragm 2-7 bar' },

      { id:6, stt:'B7', cat:'body', name:'Van một chiều – Check Valve', sub:'Thụ động · Không cần actuator · Bảo vệ bơm/máy nén',
        cells:[
          { l:'Nguyên lý',     v:'Tự động theo áp suất dòng chảy (passive valve)' },
          { l:'Actuator',      v:'✗ KHÔNG CÓ – Van hoàn toàn thụ động' },
          { l:'Hỗ trợ thêm',  c:[{t:'Lò xo tăng lực đóng'},{t:'Dash-pot giảm sốc',k:'dashpot'},{t:'Counter-weight'}], w:1 },
          { l:'Ứng dụng',      v:'Ngăn dòng ngược – bảo vệ bơm/máy nén' },
        ],
        goal:'Tự động cho phép dòng chảy một chiều. Ngăn dòng ngược bảo vệ bơm, máy nén. Không cần actuator hay tín hiệu điều khiển.',
        detail:'Nguyên lý: Disc/ball/plate mở tự động khi áp xuôi > cracking pressure. Đóng tự động khi dòng ngược.\nLOẠI VAN THỤ ĐỘNG – KHÔNG CÓ actuator.\nLoại: Swing check, Lift check, Dual-plate (wafer), Piston check.\nHỗ trợ: lò xo (tăng lực đóng), dash-pot (giảm sốc), counter-weight.',
        equip:'Swing check (horizontal)\nDual-plate wafer check\nLift check (vertical upward)\nKHÔNG CÓ actuator',
        params:'Không cần actuator\nTự động theo dòng chảy\nCracking pressure: 0.05-0.5 bar' },

      /* ========== ACTUATOR – A1–A5 ========== */
      { id:7, stt:'A1', cat:'act', name:'Actuator Màng Lò Xo – Diaphragm/Spring', sub:'DA / RA · 2–7 bar · Fail-safe lò xo · Fisher 657/667',
        cells:[
          { l:'Nguyên lý',          v:'Khí nén → màng cao su → thắng lực lò xo → di chuyển stem' },
          { l:'Áp suất supply',     v:'2 – 7 bar (30 – 100 psi)' },
          { l:'Kiểu tác động',      c:[{t:'Direct Acting (DA)',k:'da'},{t:'Reverse Acting (RA)',k:'ra'}] },
          { l:'Thông số kỹ thuật',  c:[{t:'Bench Set',k:'bench'},{t:'Dead Band',k:'deadband'},{t:'Travel',k:'travel'}], w:1 },
          { l:'Hãng tại NM',        c:[{t:'Fisher 657 (DA)',k:'f657'},{t:'Fisher 667 (RA)',k:'f667'}] },
          { l:'Dùng với',           v:'Globe valve, Diaphragm valve (điều tiết)' },
        ],
        goal:'Phổ biến nhất cho van cầu Globe tại NM. Fail-safe tự nhiên nhờ lò xo. Đơn giản, bền, ít bảo trì.',
        detail:'Nguyên lý: Khí nén đẩy màng → thắng lực lò xo → dịch chuyển stem.\nDA (Fisher 657): Khí cấp phía TRÊN màng → stem đi XUỐNG.\nRA (Fisher 667): Khí cấp phía DƯỚI màng → stem đi LÊN.\nBench set: khoảng áp để đóng/mở hoàn toàn tại xưởng.\nDead band: khoảng hành trình không thay đổi do ma sát packing.\nFail-safe: Mất khí → lò xo → FC hoặc FO.',
        equip:'Fisher 657 (DA)\nFisher 667 (RA)\nFisher 1051, 1052 (rotary)',
        params:'Áp lực: 2-7 bar (30-100 psi)\nBench set: 3-13 (DA) / 5-15 (RA) psi\nFail-safe: tự nhiên nhờ lò xo' },

      { id:8, stt:'A2', cat:'act', name:'Actuator Rack & Pinion', sub:'Xoay 90° · Van bi/bướm/nút · Single/Double acting · Tomoe',
        cells:[
          { l:'Nguyên lý',      v:'Khí → piston tịnh tiến → rack & pinion → xoay 90°' },
          { l:'Góc xoay',       v:'0° – 90° (Quarter-turn)' },
          { l:'Kiểu tác động',  c:[{t:'Single Acting – SA',k:'sa'},{t:'Double Acting – DA',k:'dbl_act'}], w:1 },
          { l:'Fail-safe SA',   c:[{t:'FC (Fail-Close)',k:'fc'},{t:'FO (Fail-Open)',k:'fo'}] },
          { l:'Fail-safe DA',   c:[{t:'Trip valve 377',k:'t377'},{t:'hoặc Lock-up',k:'lockup'}] },
          { l:'Dùng với',       v:'Ball, Butterfly, Plug valve (rotary 90°)' },
        ],
        goal:'Actuator xoay 90° cho van bi, van bướm, van nút. Chuyển đổi chuyển động thẳng thành xoay qua cơ cấu bánh răng.',
        detail:'Nguyên lý: Piston khí nén di chuyển thẳng → rack & pinion chuyển thành xoay 90°.\nSingle acting: 1 phía khí + lò xo đối nghịch → fail-safe tự nhiên (FC hoặc FO).\nDouble acting: 2 phía khí thay nhau → lực lớn hơn, không fail-safe tự nhiên → cần trip valve 377.\nTomoe (tại NM): van bướm 04HV-5003.',
        equip:'Tomoe (04HV-5003 tại NM)\nSMC, Rotork, Festo\nSingle acting: fail-safe lò xo\nDouble acting: cần trip valve 377',
        params:'Stroke: 90° (rotary)\nSingle acting: FC hoặc FO\nDouble acting: cần trip valve\nDùng cho Ball/Butterfly/Plug' },

      { id:9, stt:'A3', cat:'act', name:'Actuator Piston – Lực lớn', sub:'≤10 bar · Linear & Rotary · Double acting · Van lớn',
        cells:[
          { l:'Nguyên lý',      v:'Khí nén → piston trong cylinder thép → stem' },
          { l:'Áp suất',        v:'Đến 10 bar (150 psi) – Cao hơn Diaphragm nhiều' },
          { l:'Kiểu tác động',  c:[{t:'Single Acting (lò xo hồi)',k:'sa'},{t:'Double Acting (lực tối đa)',k:'dbl_act'}], w:1 },
          { l:'Fail-safe DA',   c:[{t:'Trip valve 377',k:'t377'},{t:'Volume tank bình tích áp'}] },
          { l:'Dùng với',       v:'Globe valve lớn (>4"), Gate valve tự động hóa' },
          { l:'Ưu điểm',        v:'Lực lớn hơn diaphragm, áp cao, hành trình dài' },
        ],
        goal:'Lực nâng lớn hơn nhiều so với diaphragm. Dùng cho van cầu lớn, van cửa lớn, áp suất công nghệ cao.',
        detail:'Nguyên lý: Khí nén tác động lên piston trong cylinder thép → chuyển động thẳng.\nSingle acting: lò xo trả về → có fail-safe. Double acting: khí 2 phía → lực lớn nhất → KHÔNG fail-safe tự nhiên → cần trip valve 377 + volume tank.\nScotch-yoke: piston linear → xoay 90° cho ball/butterfly lớn.',
        equip:'Fisher 585C, 685 (linear piston)\nFisher 1080 (scotch-yoke rotary)\nTrip valve 377 cho double acting\nVolume tank (bình tích áp)',
        params:'Áp lực: đến 10 bar (150 psi)\nDouble acting: lực lớn nhất\nSingle acting: lực + fail-safe lò xo' },

      { id:10, stt:'A4', cat:'act', name:'Actuator Electrohydraulic', sub:'Governor máy nén · Fisher · Đáp ứng nhanh ms',
        cells:[
          { l:'Nguyên lý',          v:'Motor điện → bơm dầu thủy lực → cylinder → stem' },
          { l:'Tín hiệu điều khiển',c:[{t:'I/H Converter (4-20mA → dầu)',k:'ih_cvt'}], w:1 },
          { l:'Đáp ứng',            v:'< 100 ms – Nhanh nhất trong các loại actuator' },
          { l:'Dùng với',           v:'Turbine governor, Compressor suction throttle' },
          { l:'Nhược điểm',         v:'Phức tạp, cần hệ thống dầu riêng, bảo trì cao' },
        ],
        goal:'Điều khiển van governor của máy nén tốc độ cao. Đáp ứng cực nhanh (milliseconds), lực lớn, độ chính xác cao.',
        detail:'Nguyên lý: Bơm thủy lực điện tử + servo valve (I/H converter) điều khiển dầu thủy lực → tác động lên piston → dịch chuyển stem.\nI/H converter: chuyển đổi tín hiệu điện sang thủy lực.\nỨng dụng: van governor (speed control) của máy nén NH₃, CO₂ tại NM – cần đáp ứng ms.',
        equip:'Fisher Electrohydraulic Actuator\nI/H Converter (điện → thủy lực)\nBơm thủy lực tích hợp\nServo valve điều khiển dầu',
        params:'Đáp ứng: < 100 ms\nLực: rất lớn (thủy lực)\nDùng cho governor van máy nén' },

      { id:11, stt:'A5', cat:'act', name:'Actuator Motor Điện – MOV', sub:'Rotork · Auma · Biffi · 24V–380VAC · Không cần khí nén',
        cells:[
          { l:'Nguyên lý',       v:'Motor điện → hộp số giảm tốc → xoay stem/shaft' },
          { l:'Nguồn điện',      v:'24 VDC / 110–230 VAC / 380 VAC 3-pha' },
          { l:'Kiểu vận hành',   c:[{t:'ON-OFF'},{t:'Modulating (điều tiết)'}] },
          { l:'Hãng tại NM',     c:[{t:'Rotork IQ3/AQ',k:'rotork'},{t:'Auma SA/SAR',k:'rotork'},{t:'Biffi',k:'rotork'}] },
          { l:'Fail-safe',       v:'Cần UPS hoặc spring-return module' },
          { l:'Dùng với',        v:'Gate, Ball, Butterfly, Plug valve' },
        ],
        goal:'Dùng cho khu vực không có khí nén. Tích hợp bus truyền thông HART/Profibus. Rotork, Auma, Biffi tại NM.',
        detail:'Nguyên lý: Motor điện AC/DC + hộp số → xoay (part-turn 90°) hoặc nhiều vòng (multi-turn).\nLoại: Multi-turn: gate, globe. Part-turn: ball, butterfly, plug (90°).\nHãng tại NM: Rotork, Auma, Biffi.\nFail-safe: không tự nhiên → cần UPS hoặc spring-return.',
        equip:'Rotork IQ3, AQ (multi-turn, part-turn)\nAuma SAR, SA (AC 3-pha)\nBiffi (part-turn)',
        params:'Nguồn: 24VDC / 110-380VAC\nTốc độ: 10-60 s/stroke\nComm: HART, Profibus, Modbus\nFail-safe: cần UPS hoặc spring-return' },

      /* ========== POSITIONER & PHỤ KIỆN – P1–P3 ========== */
      { id:12, stt:'P1', cat:'pos', name:'Positioner – Bộ định vị van', sub:'3 loại: Pneumatic · Analog I/P · Smart HART/FF · Fisher DVC6200',
        cells:[
          { l:'Chức năng',      v:'PID vòng kín thứ 2: SP = tín hiệu DCS, PV = vị trí van, MV = áp khí actuator' },
          { l:'3 loại',         c:[{t:'Smart HART/FF',k:'smart_pos'},{t:'Analog I/P (4-20mA→khí)'},{t:'Pneumatic (3-15psi→khí)'}], w:1 },
          { l:'Hãng tại NM',    c:[{t:'Fisher DVC6200',k:'dvc6200'}] },
          { l:'Cần cho van nào',v:'✓ Van điều tiết (Globe). ✗ Không cần van ON-OFF' },
          { l:'Tín hiệu ra',    v:'Khí nén 0.2–1 bar (3–15 psi) → Actuator' },
        ],
        goal:'Điều chỉnh vị trí van chính xác theo tín hiệu điều khiển. Hoạt động như PID thứ 2.',
        detail:'KHÁI NIỆM: Positioner so sánh vị trí thực van (cảm biến) với setpoint từ DCS → điều chỉnh áp khí cấp/xả actuator → đưa van về vị trí chính xác.\n3 LOẠI:\n1. Pneumatic: in 3-15 psi → out 3-15 psi. Cổ điển.\n2. Analog I/P: in 4-20mA → out 3-15 psi.\n3. Smart/Digital: 4-20mA + HART/FF. Tự chẩn đoán, giao tiếp DCS/AMS.',
        equip:'Fisher DVC6200 (Smart HART, tại NM)\nFisher 3582 (pneumatic)\nSiemens SIPART PS2',
        params:'Pneumatic: 3-15 psi → 3-15 psi\nAnalog I/P: 4-20mA → 3-15 psi\nSmart: HART / FF / Profibus PA' },

      { id:13, stt:'P2', cat:'pos', name:'Regulator · Volume Booster · I/P Converter', sub:'Điều áp · Khuếch đại lưu lượng · Chuyển đổi tín hiệu',
        cells:[
          { l:'Regulator (Fisher 67D)',      c:[{t:'Ổn định áp supply → đúng Bench Set',k:'regulator'}] },
          { l:'Volume Booster (Fisher 2625)',c:[{t:'Tăng lưu lượng khí → Stroke nhanh hơn',k:'booster'}] },
          { l:'I/P Converter (Fisher 546)',  v:'4-20mA → 3-15 psi  (open-loop, không feedback vị trí)' },
          { l:'Khi nào dùng',               v:'Regulator: tất cả actuator. Booster: van lớn. I/P: van on-off / van cũ' },
        ],
        goal:'Regulator cài đặt áp nguồn khí đúng bench set. Volume Booster tăng tốc độ đáp ứng van lớn.',
        detail:'REGULATOR (Fisher 67D/67C): Điều áp supply → đúng bench set. Tích hợp filter lọc dầu/nước.\nVOLUME BOOSTER (Fisher 2625): Khuếch đại lưu lượng, 1:1 áp suất, lưu lượng ×5-10 lần.\nI/P CONVERTER (Fisher 546): 4-20mA → 3-15 psi open-loop. Dùng thay positioner cho van on-off/cũ.',
        equip:'Fisher 67D, 67C (Regulator)\nFisher 2625, 2625NS (Volume Booster)\nFisher 546, 546E (I/P Converter)',
        params:'Regulator: ổn áp 20-100 PSIG\nBooster: tăng Cv lưu lượng khí\nI/P: 4-20mA → 3-15 psi open-loop' },

      { id:14, stt:'P3', cat:'pos', name:'Lock-up · Air Relay · Trip Valve 377 · Solenoid · LSB', sub:'Phụ kiện an toàn và giám sát vị trí van',
        cells:[
          { l:'Lock-up Valve',  c:[{t:'Giữ vị trí khi mất khí – FL',k:'lockup'}] },
          { l:'Trip Valve 377', c:[{t:'FC / FL / FO cho Piston DA',k:'t377'}] },
          { l:'Solenoid Valve', c:[{t:'ON-OFF khí nén theo tín hiệu điện',k:'solenoid'}] },
          { l:'Limit Switch Box',c:[{t:'Báo OPEN/CLOSE về DCS/ESD',k:'lsb'}] },
          { l:'Air Relay',      v:'Chuyển hướng tín hiệu khí – 3 ngõ (1, 2, 3)' },
        ],
        goal:'Các phụ kiện đảm bảo fail-safe (lock-up, trip valve 377), on-off nhanh (solenoid), giám sát vị trí (LSB).',
        detail:'LOCK-UP VALVE: Giữ khí trong actuator khi mất áp nguồn → van giữ vị trí (FL).\nAIR RELAY: 3 ngõ, chuyển hướng tín hiệu khí khi có/mất air signal.\nTRIP VALVE FISHER 377: Tích hợp 2 air relay, dùng cho piston double acting. 3 chế độ: FC, FL, FO.\nSOLENOID VALVE: De-energize = fail-safe.\nLIMIT SWITCH BOX: Báo vị trí đóng/mở về DCS/ESD (DI).',
        equip:'Fisher 377 Trip Valve (piston DA)\nBifold SPR-08 (Air Relay)\nASCO, Parker (Solenoid)\nTopwork LSB (tại NM)',
        params:'Lock-up: FL giữ vị trí\n377: FC/FL/FO cho piston DA\nSolenoid: de-energ = fail\nLSB: DI → DCS/ESD feedback' },

      /* ========== FAIL-SAFE & KẾT NỐI – F1–F2 ========== */
      { id:15, stt:'F1', cat:'fs', name:'Fail-safe: DA/RA × ATC/ATO → FC/FO/FL', sub:'Ma trận vị trí an toàn khi mất tín hiệu',
        cells:[
          { l:'Actuator action',c:[{t:'DA: áp↑ → stem xuống',k:'da'},{t:'RA: áp↑ → stem lên',k:'ra'}] },
          { l:'Kết hợp → FC', c:[{t:'DA + ATO = FC',k:'fc'},{t:'RA + ATC = FC',k:'fc'}] },
          { l:'Kết hợp → FO', c:[{t:'DA + ATC = FO',k:'fo'},{t:'RA + ATO = FO',k:'fo'}] },
          { l:'Kết hợp → FL', c:[{t:'Piston DA + Lock-up',k:'fl'},{t:'Piston DA + Trip 377',k:'t377'}] },
          { l:'Dùng FC cho',   v:'Lưu chất nguy hiểm: NH₃, HC, hóa chất độc' },
          { l:'Dùng FO cho',   v:'Làm mát, quench, cấp steam bảo vệ' },
        ],
        goal:'Xác định vị trí van khi mất tín hiệu, khí nén hoặc điện. Thiết kế fail-safe theo yêu cầu an toàn (SIL, HAZOP).',
        detail:'ACTUATOR ACTION:\n• DA: áp tăng → stem xuống. RA: áp tăng → stem lên.\nBODY ACTION:\n• ATC (Air-To-Close): cấp khí → đóng. ATO (Air-To-Open): cấp khí → mở.\nKẾT HỢP:\n• DA + ATO = FC; RA + ATC = FC.\n• DA + ATC = FO; RA + ATO = FO.\n• Piston DA + Lock-up = FL.',
        equip:'Lò xo trong actuator (FC/FO)\nLock-up Valve (FL)\nFisher 377 Trip Valve (FL/FC/FO piston DA)',
        params:'FC: dòng nguy hiểm (NH₃, HC)\nFO: làm mát / quench / steam\nFL: giữ vị trí, cần lock-up\nFisher 377: 3 chế độ đấu nối' },

      { id:16, stt:'F2', cat:'fs', name:'Vòng lặp điều khiển P&ID & Ký hiệu van', sub:'Control Loop · FT→FIC→FY→van→FT · Ký hiệu ISA',
        cells:[
          { l:'Vòng lặp FIC', v:'FT → 4-20mA → DCS (FIC) → 4-20mA → Positioner → Khí → Actuator → Van → FT', w:1 },
          { l:'Ký hiệu P&ID', c:[{t:'FC – Đóng khi sự cố',k:'fc'},{t:'FO – Mở khi sự cố',k:'fo'},{t:'FL – Giữ vị trí',k:'fl'}], w:1 },
          { l:'Solenoid ký hiệu',c:[{t:'2-way NC/NO',k:'solenoid'},{t:'3-way P-E-C',k:'solenoid'},{t:'4-way P-E-A-B',k:'solenoid'}], w:1 },
          { l:'FY / PY',      v:'FY = I/P Converter; PY = Positioner output trên P&ID' },
        ],
        goal:'Hiểu vòng lặp điều khiển hoàn chỉnh qua van trên P&ID. Đọc ký hiệu van FC/FO/FL và symbol solenoid theo ISA.',
        detail:'VÒNG LẶP:\n• FT → DCS (FIC) → 4-20mA → FY (I/P) → 3-15 psi → Positioner → Khí → Actuator → Van → FT.\nKÝ HIỆU P&ID:\n• FC: mất tín hiệu → đóng.\n• FO: mất tín hiệu → mở.\n• FL: mất tín hiệu → giữ nguyên.',
        equip:'FT: transmitter lưu lượng\nFIC: controller DCS\nFY: I/P converter\nPositioner (DVC6200)',
        params:'DCS out: 4-20mA → FY (I/P)\nI/P: 3-15 psi → positioner\nPositioner: feedback + điều chỉnh' },
    ],

    /* ─── MINDMAP (giữ nguyên) ─── */
    mindmap: {
      nodes: [
        { id:'globe',     x:30,  y:48,  w:190, h:48, label:'Van cầu (Globe)\nEqual% · DA/RA · Fisher', cat:'body', sub:'product' },
        { id:'gate',      x:30,  y:112, w:190, h:44, label:'Van cửa (Gate)\nOn-off · Full-bore · 04HV-2082', cat:'body' },
        { id:'ball',      x:30,  y:172, w:190, h:44, label:'Van bi (Ball)\nR&P · V-ball · Rotork', cat:'body' },
        { id:'butterfly', x:30,  y:232, w:190, h:44, label:'Van bướm (Butterfly)\nTomoe · R&P · 04HV-5003', cat:'body' },
        { id:'plug',      x:30,  y:292, w:190, h:44, label:'Van nút (Plug)\nXoay 90° · 3-way', cat:'body' },
        { id:'diaphm',    x:30,  y:352, w:190, h:44, label:'Van màng (Diaphragm)\nĂn mòn · ITT', cat:'body' },
        { id:'check',     x:30,  y:412, w:190, h:44, label:'Van 1 chiều (Check)\nThụ động · Không actuator', cat:'body' },
        { id:'spr',    x:285, y:62,  w:200, h:62, label:'Diaphragm/Spring\nDA 657 · RA 667 · 2-7 bar\nFail-safe lò xo tự nhiên', cat:'act', sub:'product' },
        { id:'rp',     x:285, y:152, w:200, h:55, label:'Rack & Pinion\nXoay 90° · Single/Double\nBall · Butterfly · Plug', cat:'act' },
        { id:'piston', x:285, y:230, w:200, h:55, label:'Piston Actuator\n≤10 bar · Lực lớn\nDouble: cần trip valve', cat:'act' },
        { id:'eh',     x:285, y:313, w:200, h:52, label:'Electrohydraulic\nGovernor máy nén\nFisher · I/H · Nhanh ms', cat:'act' },
        { id:'mov',    x:285, y:386, w:200, h:55, label:'Electric Motor (MOV)\nRotork · Auma · Biffi\n24V-380VAC · Không khí', cat:'act' },
        { id:'smart',  x:555, y:48,  w:190, h:58, label:'Smart Positioner\nHART · FF · Profibus\nFisher DVC6200 (NM)', cat:'pos', sub:'product' },
        { id:'ip',     x:555, y:132, w:190, h:44, label:'Analog I/P\n4-20mA → 3-15 psi\nFisher 546', cat:'pos' },
        { id:'pneu',   x:555, y:192, w:190, h:44, label:'Pneumatic Positioner\n3-15 psi → 3-15 psi\nFisher 3582', cat:'pos' },
        { id:'reg',    x:555, y:254, w:190, h:44, label:'Regulator\nĐiều áp bench set\nFisher 67D/67C', cat:'pos' },
        { id:'boost',  x:555, y:314, w:190, h:44, label:'Volume Booster\nKhuếch đại lưu lượng\nFisher 2625', cat:'pos' },
        { id:'sv',     x:555, y:374, w:190, h:44, label:'Solenoid Valve\n24VDC · 2/3/4-way\nDe-energ = fail', cat:'pos' },
        { id:'lsb',    x:555, y:430, w:190, h:44, label:'Limit Switch Box\nOpen/Close DI\nTopwork (NM)', cat:'pos' },
        { id:'fc',    x:820, y:62,  w:190, h:52, label:'FC – Fail Close\nDA+ATO hoặc RA+ATC\nDòng nguy hiểm NH₃/HC', cat:'fs' },
        { id:'fo',    x:820, y:142, w:190, h:52, label:'FO – Fail Open\nDA+ATC hoặc RA+ATO\nLàm mát · Quench', cat:'fs' },
        { id:'fl',    x:820, y:222, w:190, h:52, label:'FL – Fail Last\nPiston + Lock-up\nGiữ vị trí cuối', cat:'fs' },
        { id:'t377',  x:820, y:306, w:190, h:55, label:'Trip Valve 377\n2 Air Relay tích hợp\nFC / FL / FO cho Piston', cat:'fs' },
        { id:'loop',  x:1080, y:155, w:210, h:90, label:'Control Loop\nFT→FIC→FY→POS\n→ACT→VAN→FT\nDCS PID 4-20mA', cat:'fs', sub:'product' },
      ],
      edges: [
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
        { from:'spr',    to:'smart',  color:'green', label:'Positioner' },
        { from:'spr',    to:'ip',     color:'green' },
        { from:'spr',    to:'pneu',   color:'green' },
        { from:'piston', to:'smart',  color:'green' },
        { from:'piston', to:'t377',   color:'amber', label:'Fail-safe' },
        { from:'rp',     to:'sv',     color:'orange', label:'On-off' },
        { from:'mov',    to:'smart',  color:'green', label:'HART' },
        { from:'reg',    to:'spr',    color:'gray',  dashed:true, label:'Ổn áp' },
        { from:'boost',  to:'spr',    color:'gray',  dashed:true, label:'Tăng lưu lượng' },
        { from:'sv',     to:'spr',    color:'orange' },
        { from:'sv',     to:'rp',     color:'orange' },
        { from:'lsb',    to:'loop',   color:'green', label:'DI feedback' },
        { from:'spr',  to:'fc',    color:'gray', dashed:true, label:'Lò xo FC' },
        { from:'spr',  to:'fo',    color:'gray', dashed:true, label:'Lò xo FO' },
        { from:'t377', to:'fc',    color:'amber', label:'Đấu nối FC' },
        { from:'t377', to:'fl',    color:'amber', label:'Đấu nối FL' },
        { from:'t377', to:'fo',    color:'amber' },
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

    /* ─── FLASHCARDS (giữ nguyên 29 câu) ─── */
    flashcards: [
      { q:'Positioner trong van điều khiển dùng để làm gì?', a:'Để điều chỉnh vị trí van cho chính xác. Positioner hoạt động như bộ điều khiển PID thứ 2: vị trí van là PV, tín hiệu DCS là SP, áp khí đến actuator là MV.', cat:'pos' },
      { q:'Sự khác nhau giữa van 2 ngả và van 3 ngả là gì?', a:'Van 2 ngả: khống chế/điều tiết dòng lưu chất (on-off hoặc throttling). Van 3 ngả: trộn 2 dòng lưu chất hoặc chuyển hướng dòng lưu chất.', cat:'body' },
      { q:'Hai yếu tố cơ bản để van điều khiển "điều khiển được" là gì?', a:'Độ chênh lệch áp suất qua van (ΔP) và lưu lượng qua van (Q). Công thức: Q = Cv × √(ΔP/SG). Áp suất giảm qua van lớn hơn → lưu lượng cao hơn.', cat:'body' },
      { q:'11 bar bằng bao nhiêu Pa và PSI?', a:'11 bar = 1.100.000 Pa = 159,5 PSI. (1 bar = 100.000 Pa = 14,504 PSI; 11 × 14,504 = 159,5 PSI)', cat:'act' },
      { q:'Áp suất rơi trên van và lưu lượng qua van có mối quan hệ thế nào?', a:'ΔP trên van CÀNG LỚN → lưu lượng qua van CÀNG LỚN (Q = Cv × √ΔP). Khi ΔP quá lớn xảy ra choked flow – lưu lượng không tăng thêm.', cat:'body' },
      { q:'Đặc tính lưu lượng X=fast opening, Y=linear, Z=equal percentage: đặc điểm từng loại?', a:'Fast-opening (X): mở nhỏ đã cho lưu lượng lớn (25%→~80% max) – dùng on-off.\nLinear (Y): lưu lượng tỷ lệ tuyến tính với độ mở – dùng áp suất ổn định.\nEqual% (Z): mỗi % hành trình tăng % Cv bằng nhau – dùng PID, áp suất thay đổi.', cat:'body' },
      { q:'Khi cần điều khiển với độ chính xác cao, thường dùng loại van nào?', a:'Van cầu (Globe valve). Có positioner, đặc tính equal% hoặc linear, rangeability 50:1. Phổ biến nhất tại NM Đạm Cà Mau, hãng Fisher.', cat:'body' },
      { q:'Nhận biết tên 3 loại van qua hình ký hiệu P&ID: globe, check, butterfly?', a:'Globe valve: ký hiệu hình tam giác/bowtie với vòng tròn. Check valve: ký hiệu có mũi tên 1 chiều. Butterfly valve: ký hiệu đĩa tròn xoay. (Theo ISA 5.1)', cat:'body' },
      { q:'Van on-off có cần positioner không? Tại sao?', a:'KHÔNG cần positioner. Van on-off chỉ cần 2 vị trí (đóng/mở hoàn toàn), không cần feedback vị trí liên tục. Positioner chỉ cần cho van ĐIỀU TIẾT.', cat:'pos' },
      { q:'Sắp xếp các chi tiết actuator diaphragm theo thứ tự từ trên xuống?', a:'(1) Diaphragm (màng). (2) Actuator spring (lò xo). (3) Spring seat (đế lò xo). (4) Actuator stem (ty actuator). (5) Stem connector (khớp nối ty). (6) Indicator scale (thước chỉ thị hành trình).', cat:'act' },
      { q:'Positioner dùng để làm gì trong van điều khiển? (Câu hỏi ôn tập lần 2)', a:'Điều chỉnh vị trí van cho chính xác bằng cách so sánh vị trí thực (PV) với tín hiệu đặt (SP) và điều chỉnh áp khí đến actuator (MV) theo nguyên lý PID thu nhỏ.', cat:'pos' },
      { q:'Sắp xếp các chi tiết van cầu từ ngoài vào trong: Packing, bonnet, body, plug, seat?', a:'(1) Packing. (2) Bonnet. (3) Body. (4) Plug. (5) Seat. Trim = Plug + Seat + Cage.', cat:'body' },
      { q:'Actuator màng lò xo DA (stem xuống khi cấp khí) kết hợp body ATO → đây là loại van nào?', a:'Fail Close (FC). Khi mất khí: lò xo đẩy stem lên → ATO → van mở... Sai! Đúng là DA+ATO=FC: mất khí → lò xo đẩy stem ngược (lên), với ATO thì lên=đóng → FC.', cat:'fs' },
      { q:'Actuator màng lò xo DA kết hợp body ATC → đây là loại van nào?', a:'Fail Open (FO). DA + ATC = FO: mất khí → lò xo đẩy stem lên → ATC (stem lên = mở) → van mở khi mất khí = FO.', cat:'fs' },
      { q:'Positioner pneumatic + bộ điều khiển xuất tín hiệu điện 4-20mA → cần thêm thiết bị gì?', a:'Cần I/P Converter. I/P nhận 4-20mA DC → xuất 3-15 psi cho positioner pneumatic. Ký hiệu: FY trên P&ID.', cat:'pos' },
      { q:'Có bao nhiêu loại positioner (bộ định vị van)? Kể tên.', a:'3 loại: (1) Pneumatic: in 3-15 psi → out 3-15 psi. (2) Analog I/P: in 4-20mA → out 3-15 psi. (3) Smart/Digital: HART, Foundation Fieldbus hoặc Profibus PA.', cat:'pos' },
      { q:'Thiết bị nào dùng để điều chỉnh áp suất nguồn khí cho phù hợp bench set của actuator?', a:'Bộ điều áp – Pressure Regulator (Fisher 67D/67C). Điều chỉnh áp nguồn khí cấp vào actuator/positioner đúng giá trị bench set.', cat:'pos' },
      { q:'Regulator lắp đặt trên thân van dùng để làm gì?', a:'Cài đặt áp suất cấp vào actuator đúng theo giá trị bench set cho phép. Bench set là khoảng áp để đóng/mở hoàn toàn van (VD: 3-13 psi, 5-15 psi).', cat:'pos' },
      { q:'Thiết bị nào giữ khí nén trong actuator làm cho van giữ nguyên vị trí khi mất khí?', a:'Lock-up Valve. Khi mất áp nguồn khí: lock-up valve cô lập/khóa khí trong actuator → van không thay đổi vị trí = Fail Last (FL).', cat:'pos' },
      { q:'Travel (hành trình) van 3,5 inch bằng bao nhiêu mm?', a:'3,5 inch × 25,4 mm/inch = 88,9 mm ≈ 89 mm.', cat:'act' },
      { q:'Travel (hành trình) van 1,5 inch bằng bao nhiêu mm?', a:'1,5 inch × 25,4 mm/inch = 38,1 mm ≈ 38 mm.', cat:'act' },
      { q:'Đồng hồ áp suất đầu vào positioner DVC6010S có phạm vi 0-4 bar. Chọn đồng hồ psi thay thế?', a:'4 bar × 14,504 = 58 psi → chọn đồng hồ 0-60 psi (phù hợp nhất, bao phủ được 58 psi).', cat:'pos' },
      { q:'Positioner dùng tín hiệu điều khiển khí nén 3-15 psi là loại positioner nào?', a:'Bộ định vị khí nén (Pneumatic Positioner). Tín hiệu vào 3-15 psi khí nén → ra 3-15 psi. Cổ điển, cần I/P trước nó nếu DCS xuất 4-20mA. Fisher 3582.', cat:'pos' },
      { q:'Hệ số Cv của van là gì? Công thức tính Cv?', a:'Cv = số GPM nước (60°F) chảy qua van mở hoàn toàn với ΔP = 1 psi. Công thức: Cv = Q × √(SG/ΔP) với Q (GPM), SG (tỷ trọng), ΔP (psi).', cat:'body' },
      { q:'Lực tác động lên valve stem: diện tích màng 200 mm², áp suất 15 psi. Tính lực F?', a:'F = A × P = 200×10⁻⁶ m² × (15 × 6894 N/m²) = 0,0002 × 103.410 = 20,682 N. (1 psi = 6.894 Pa)', cat:'act' },
      { q:'Bench set là gì? Tại sao là thông số quan trọng nhất của actuator?', a:'Bench set = khoảng áp suất khí tác động lên màng để van đi từ mở hoàn toàn đến đóng hoàn toàn (không gắn body). VD: DA 3-13 psi, RA 5-15 psi. Quan trọng vì xác định phạm vi điều tiết và tuning của positioner.', cat:'act' },
      { q:'Dead band của van điều khiển là gì? Nguyên nhân?', a:'Dead band = khoảng hành trình van KHÔNG thay đổi khi áp suất màng thay đổi. Nguyên nhân: ma sát packing & seal. Biểu thị bằng % span. Positioner giúp giảm dead band (kín vòng lặp vị trí).', cat:'act' },
      { q:'Trip valve 377 (Fisher) là gì? Khác air relay thế nào?', a:'Trip valve 377 = tích hợp 2 air relay trong 1 thiết bị. Dùng cho piston double acting. 3 chế độ: FC (bình tích áp 1 ngõ), FL (bịt kín 2 ngõ C&F), FO (đảo C&F). Air relay đơn chỉ có 1 bộ, 3 ngõ.', cat:'fs' },
      { q:'Actuator Rack & Pinion: Single acting vs Double acting – fail-safe khác nhau thế nào?', a:'Single acting: 1 phía khí nén + lò xo → fail-safe tự nhiên (FC hoặc FO khi mất khí). Double acting: 2 phía khí nén → lực lớn hơn NHƯNG không fail-safe tự nhiên → cần trip valve 377 hoặc lock-up valve.', cat:'act' },
    ]
  },
  dien: {
    id: 'dien',
    name: 'Chuyên môn điện - tự động hóa',
    icon: '⚡',
    color: '#ea580c',
    categories: [
      { id: 'basic', name: 'Điện cơ bản', color: '#0056d3' },
      { id: 'acdc', name: 'AC vs DC', color: '#047857' },
      { id: 'device', name: 'Khí cụ điện', color: '#d97706' },
      { id: 'logic', name: 'Linh kiện & Logic', color: '#7c3aed' },
      { id: 'plcio', name: 'Tín hiệu PLC I/O', color: '#dc2626' },
    ],
    data: [
      { id:0, stt:'1', cat:'basic', name:'Định luật Ohm & Công suất', sub:'V, I, R, P', goal:'Nắm vững các công thức cơ bản: V=IR, P=VI=I²R=V²/R.', detail:'V (Volt): Hiệu điện thế. I (Ampere): Dòng điện. R (Ohm): Điện trở. P (Watt): Công suất.\nVí dụ: 24VDC panel PLC, 220VAC lưới, Motor 7.5kW, Cảm biến 4-20mA.', equip:'Ký hiệu: V(U), I, R, P, E(W), G', params:'V=IR, I=V/R, R=V/I\nP=VI=I²R=V²/R\nE=P×t (kWh)' },
      { id:1, stt:'2', cat:'basic', name:'Dụng cụ đo & Phương pháp đo', sub:'VOM, Clamp Meter, Megger', goal:'Sử dụng đúng dụng cụ đo: DMM, Clamp meter, Megger, Oscilloscope.', detail:'DMM: V/R song song, I nối tiếp. Độ chính xác ±0.5–2%.\nClamp meter: kẹp quanh 1 dây, đo dòng AC (Hall cho DC). ±2–3%.\nMegger: đo cách điện MΩ, ngắt nguồn trước khi đo.\nOscilloscope: xem dạng sóng, debug encoder/PWM.', equip:'Digital Multimeter\nClamp Meter\nMegger\nOscilloscope\nPower Analyzer', params:'DMM: ±0.5%–2%\nClamp: ±2–3% AC\nMegger: 500V/1000V test' },
      { id:2, stt:'3', cat:'acdc', name:'So sánh AC vs DC', sub:'Dạng sóng, RMS, Tần số', goal:'Phân biệt AC (xoay chiều) và DC (một chiều) về mọi khía cạnh.', detail:'AC: Hình sin, 50Hz (VN), Vrms=0.707×Vpeak. 220VAC→Vpeak=311V.\nDC: Đường thẳng, 0Hz. 24VDC, 48VDC, 125VDC.\nAn toàn: ≥50VAC nguy hiểm, ≥120VDC nguy hiểm. Hồ quang DC khó dập hơn.', equip:'MBA, máy phát (AC)\nSMPS, chỉnh lưu (DC)\nUPS: DC→AC', params:'Vrms=Vpeak/√2\nVpp=2×Vpeak\nω=2πf' },
      { id:3, stt:'4', cat:'acdc', name:'Công thức RMS & Chuyển đổi', sub:'Vpeak, Vrms, Vpp, Công suất', goal:'Chuyển đổi giữa Vpeak, Vrms, Vpp. Tính công suất AC 1 pha & 3 pha.', detail:'Vpeak = Vrms × √2\nP(1 pha) = Vrms × Irms × cosφ\nP(3 pha) = √3 × VL × IL × cosφ\nXL = 2πfL, XC = 1/(2πfC)', equip:'DMM đo RMS\nScope đo Vpeak/Vpp', params:'220VAC→311V peak\nP=√3×380×I×cosφ' },
      { id:4, stt:'5', cat:'device', name:'Relay & Contactor & OLR & Timer', sub:'Khí cụ điện thông dụng', goal:'Hiểu nguyên lý, thông số, ứng dụng của 4 khí cụ điện chính.', detail:'Relay: chuyển mạch tín hiệu nhỏ, 5-10A.\nContactor: đóng/ngắt mạch động lực dòng lớn 9A-95A, có buồng dập hồ quang.\nOLR: bảo vệ quá tải motor (bimetal).\nTimer: tạo delay cho mạch điều khiển.', equip:'Relay: 5V/12V/24VDC, 110/220VAC\nContactor: AC3 rating\nOLR: chỉnh 1-52A\nTimer: ON-delay', params:'Relay: 10M lần\nContactor: 1M lần (điện)\nOLR: Ith≥1.25×In' },
      { id:5, stt:'6', cat:'device', name:'Mạch điều khiển Motor', sub:'Start/Stop, Self-holding, Interlock', goal:'Thiết kế mạch start/stop có self-holding và interlock đảo chiều.', detail:'Mạch điều khiển: L+ → E-STOP(NC) → STOP(NC) → OLR(NC) → [START(NO) // KM1 phụ(NO)] → KM1 coil → L-\nMạch động lực: L1L2L3 → CB → KM1 → OLR → Motor 3P\nInterlock đảo chiều: KM1 có NC của KM2 và ngược lại.\nSao-Tam giác: KM_main + KM_star → delay → KM_delta.', equip:'MCCB, Contactor\nOLR, Timer\nPush buttons', params:'Self-holding: KM phụ NO\nY/Δ: 3-10s delay\nInterlock: cơ + điện' },
      { id:6, stt:'7', cat:'logic', name:'Linh kiện thụ động & tích cực', sub:'R, C, L, Transistor, MOSFET, Diode', goal:'Hiểu nguyên lý các linh kiện điện tử cơ bản và ứng dụng trong DCS/PLC.', detail:'Điện trở: pull-up 10kΩ cho PLC input.\nTụ điện: bypass nguồn 24VDC, lọc nhiễu VFD.\nCuộn cảm: ferrite chống EMI.\nTransistor NPN/PNP: cảm biến 3 dây.\nMOSFET: driver valve solenoid.\nDiode: freewheeling qua contactor coil.', equip:'R, C, L (thụ động)\nBJT, MOSFET (tích cực)\nDiode, Zener', params:'Pull-up 10kΩ\nBypass 100nF\nVBE≈0.7V (BJT)' },
      { id:7, stt:'8', cat:'logic', name:'Đại số Boolean & Cổng logic', sub:'AND, OR, NOT, NAND, NOR, XOR', goal:'Hiểu bảng chân trị và ứng dụng cổng logic trong PLC/DCS.', detail:'AND: nối tiếp, cả 2 ON mới ON. Mạch an toàn.\nOR: song song, 1 trong 2 ON là ON. Start nhiều vị trí.\nNOT: đảo, NC contact.\nDe Morgan: NOT(A·B) = Ā+B̄\nĐịnh lý: luật bù, lũy đẳng, phân phối.', equip:'Ladder logic PLC\nFunction Block DCS', params:'AND: Y=A·B\nOR: Y=A+B\nNOT: Y=Ā' },
      { id:8, stt:'9', cat:'plcio', name:'Tín hiệu Analog vs Digital', sub:'4-20mA, 0-10V, 24VDC', goal:'Phân biệt tín hiệu analog và digital, các chuẩn thông dụng.', detail:'Analog: liên tục, 4-20mA phổ biến nhất (4mA=0%, 20mA=100%, <4mA=wire break).\n0-10V: nhạy nhiễu hơn, không phân biệt đứt dây.\nDigital: rời rạc ON/OFF, 24VDC.\nADC: 12-bit (4096 bước), 16-bit (65536 bước).', equip:'AI module 4-20mA\nAI module 0-10V\nDI module 24VDC', params:'4mA=0%, 20mA=100%\n<3.6mA=NAMUR Low\n>21mA=NAMUR High' },
      { id:9, stt:'10', cat:'plcio', name:'Source / Sink – NPN / PNP', sub:'Ngõ vào PLC & Cảm biến', goal:'Phân biệt Source/Sink input PLC và NPN/PNP output cảm biến.', detail:'SINK (NPN): PLC hút dòng vào, COM=0V. Dùng NPN sensor.\nSOURCE (PNP): PLC đẩy dòng ra, COM=24V. Dùng PNP sensor.\nPNP/Source phổ biến hơn ở châu Âu.\nĐấu sai → không nhận hoặc luôn ON.', equip:'DI module NPN/PNP\nCảm biến 3 dây\nProximity sensor', params:'NPN: kéo xuống 0V\nPNP: kéo lên 24V\n⚠️ Đấu đúng loại!' },
      { id:10, stt:'11', cat:'plcio', name:'NO / NC & Fail-Safe', sub:'Tiếp điểm & Mạch an toàn', goal:'Hiểu NO/NC và nguyên tắc fail-safe dùng NC cho mạch an toàn.', detail:'NO (Normally Open): bình thường hở, tác động thì đóng. Nút START.\nNC (Normally Closed): bình thường đóng, tác động thì hở. Nút STOP, E-stop.\nFail-safe: dùng NC → đứt dây/mất nguồn = DỪNG (an toàn).\nE-stop chuỗi NC: 24V → ESTOP1(NC) → ESTOP2(NC) → DOOR(NC) → Safety relay.', equip:'Push button NO/NC\nE-stop NC\nSafety relay\nOLR (NC)', params:'NC cho an toàn\nIEC 62061\nISO 13849' },
      { id:11, stt:'12', cat:'plcio', name:'Đấu nối thực tế & Debug', sub:'Cảm biến 3 dây, Loop 4-20mA', goal:'Hướng dẫn đấu nối cảm biến, loop 4-20mA, xử lý lỗi thường gặp.', detail:'Cảm biến 3 dây: Brown=+24V, Blue=0V, Black=OUT.\nLoop 4-20mA 2-wire: 24V→Tx+, Tx−→AI+, AI−→0V.\nShield 1 đầu phía PLC.\nGround loop: dùng isolator galvanic.', equip:'Loop calibrator HART\nDMM DC mA mode\nScope', params:'R_load ≤ 600Ω\nV_loop ≥ 24V\nShield 1 đầu' },
    ],
    mindmap: {
      nodes: [
        { id:'ohm', x:60, y:60, w:140, h:50, label:'⚡ Định luật Ohm\nV=IR, P=VI', cat:'basic' },
        { id:'measure', x:60, y:140, w:140, h:50, label:'🔧 Dụng cụ đo\nDMM, Clamp, Megger', cat:'basic' },
        { id:'ac', x:280, y:60, w:140, h:50, label:'🔌 AC – Xoay chiều\n220V/50Hz', cat:'acdc' },
        { id:'dc', x:280, y:140, w:140, h:50, label:'🔋 DC – Một chiều\n24VDC PLC', cat:'acdc' },
        { id:'rms', x:280, y:220, w:140, h:50, label:'📐 Công thức RMS\nVpeak, Vpp', cat:'acdc' },
        { id:'relay', x:500, y:60, w:140, h:50, label:'Relay\nChuyển mạch nhỏ', cat:'device' },
        { id:'contactor', x:500, y:140, w:140, h:50, label:'Contactor\nĐóng/ngắt động lực', cat:'device' },
        { id:'olr', x:500, y:220, w:140, h:50, label:'OLR\nBảo vệ quá tải', cat:'device' },
        { id:'timer', x:500, y:300, w:140, h:50, label:'Timer\nTrễ thời gian', cat:'device' },
        { id:'motor', x:500, y:390, w:160, h:60, label:'🏭 Mạch Motor\nStart/Stop/Interlock', cat:'device' },
        { id:'resistor', x:720, y:60, w:140, h:45, label:'R – Điện trở\nPull-up 10kΩ', cat:'logic' },
        { id:'capacitor', x:720, y:120, w:140, h:45, label:'C – Tụ điện\nBypass 100nF', cat:'logic' },
        { id:'transistor', x:720, y:180, w:140, h:45, label:'BJT NPN/PNP\nCảm biến 3 dây', cat:'logic' },
        { id:'boolean', x:720, y:260, w:160, h:55, label:'Boolean Logic\nAND·OR·NOT\nDe Morgan', cat:'logic' },
        { id:'analog', x:960, y:60, w:150, h:55, label:'📡 Analog Signal\n4-20mA · 0-10V', cat:'plcio' },
        { id:'digital', x:960, y:140, w:150, h:55, label:'🔘 Digital Signal\n24VDC ON/OFF', cat:'plcio' },
        { id:'srcsink', x:960, y:220, w:150, h:55, label:'Source / Sink\nNPN / PNP', cat:'plcio' },
        { id:'nonc', x:960, y:310, w:150, h:55, label:'NO / NC\nFail-Safe Design', cat:'plcio' },
        { id:'wiring', x:960, y:400, w:150, h:55, label:'🔌 Đấu nối thực tế\nDebug & Lỗi', cat:'plcio' },
        { id:'plc-center', x:1180, y:200, w:160, h:70, label:'📟 PLC / DCS\nĐiều khiển tự động', cat:'plcio', sub:'product' },
      ],
      edges: [
        { from:'ohm', to:'ac', color:'blue' },
        { from:'ohm', to:'dc', color:'blue' },
        { from:'ohm', to:'measure', color:'gray', dashed:true },
        { from:'ac', to:'rms', color:'green' },
        { from:'ac', to:'contactor', color:'amber', label:'380VAC 3P' },
        { from:'dc', to:'relay', color:'amber', label:'24VDC coil' },
        { from:'relay', to:'motor', color:'green' },
        { from:'contactor', to:'motor', color:'green' },
        { from:'olr', to:'motor', color:'green' },
        { from:'timer', to:'motor', color:'green', dashed:true },
        { from:'resistor', to:'boolean', color:'purple', dashed:true },
        { from:'capacitor', to:'boolean', color:'purple', dashed:true },
        { from:'transistor', to:'srcsink', color:'orange', label:'NPN/PNP' },
        { from:'boolean', to:'nonc', color:'purple' },
        { from:'analog', to:'plc-center', color:'blue', label:'AI/AO' },
        { from:'digital', to:'plc-center', color:'green', label:'DI/DO' },
        { from:'srcsink', to:'plc-center', color:'orange' },
        { from:'nonc', to:'plc-center', color:'gray' },
        { from:'wiring', to:'plc-center', color:'gray', dashed:true },
        { from:'motor', to:'plc-center', color:'amber', label:'Control' },
      ],
      zones: [
        { x:40, y:30, w:180, h:180, label:'ĐIỆN CƠ BẢN', color:'amo' },
        { x:260, y:30, w:180, h:260, label:'AC / DC', color:'urea' },
        { x:480, y:30, w:200, h:440, label:'KHÍ CỤ & MOTOR', color:'granule' },
        { x:700, y:30, w:200, h:310, label:'LINH KIỆN & LOGIC', color:'aux' },
        { x:940, y:30, w:190, h:450, label:'TÍN HIỆU PLC I/O', color:'esd' },
        { x:1160, y:170, w:210, h:130, label:'HỆ THỐNG ĐIỀU KHIỂN', color:'mid' },
      ],
      legend: [
        { label:'Điện cơ bản', color:'#0056d3' },
        { label:'AC / DC', color:'#047857' },
        { label:'Khí cụ & Motor', color:'#d97706' },
        { label:'Linh kiện & Logic', color:'#7c3aed' },
        { label:'Tín hiệu PLC I/O', color:'#dc2626' },
      ]
    },
    flashcards: [
      { q:'Định luật Ohm: V = ?', a:'V = I × R. Ví dụ: 24VDC / 10kΩ = 2.4mA.', cat:'basic' },
      { q:'Công thức công suất AC 3 pha?', a:'P = √3 × VL × IL × cosφ. Ví dụ: P = 1.732 × 380 × I × cosφ.', cat:'acdc' },
      { q:'220VAC có Vpeak bao nhiêu?', a:'Vpeak = 220 × √2 = 311V. Vpp = 622V.', cat:'acdc' },
      { q:'4-20mA: 12mA tương ứng bao nhiêu %?', a:'% = (12-4)/(20-4) × 100 = 50%.', cat:'plcio' },
      { q:'Tín hiệu < 4mA nghĩa là gì?', a:'Wire break fault (đứt dây). NAMUR: <3.6mA = Low fault.', cat:'plcio' },
      { q:'NPN sensor dùng với loại PLC input nào?', a:'SINK input (COM = 0V). NPN kéo output xuống 0V khi active.', cat:'plcio' },
      { q:'PNP sensor dùng với loại PLC input nào?', a:'SOURCE input (COM = 24V). PNP kéo output lên 24V khi active. Phổ biến châu Âu.', cat:'plcio' },
      { q:'Tại sao dùng NC cho mạch an toàn?', a:'Fail-safe: đứt dây/mất nguồn → mạch hở → DỪNG (an toàn). E-stop luôn dùng NC.', cat:'plcio' },
      { q:'Contactor chọn dòng như thế nào?', a:'Ith ≥ 1.25 × In_motor (dư 25%). AC3 utilization cho start/stop thường.', cat:'device' },
      { q:'Self-holding (duy trì) hoạt động thế nào?', a:'Nhấn START → KM có điện → tiếp điểm phụ NO đóng (song song START) → nhả START, KM vẫn duy trì.', cat:'device' },
      { q:'De Morgan 1: NOT(A AND B) = ?', a:'NOT(A) OR NOT(B). NAND = OR của các NOT.', cat:'logic' },
      { q:'Cảm biến 3 dây: Brown, Blue, Black là gì?', a:'Brown = +24V, Blue = 0V (GND), Black = Output signal.', cat:'plcio' },
    ]
  }
};

// ===================================================
// SKILL SWITCHING
// ===================================================
let currentSkillId = 'nhamay';
let otherCurrentSkill = 'htdk';
let otherCurrentFilter = 'all';
let otherCurrentView = 'grid';
let otherCurrentMode = 'browse';
let oMmZoom = 1, oMmPanX = 0, oMmPanY = 0;
let oFcCards = [], oFcIndex = 0, oFcFlipped = false;
let oQuizItems = [], oQuizIndex = 0, oQuizScore = 0;
let oMmInited = false;

function switchSkill(skillId) {
  currentSkillId = skillId;
  document.querySelectorAll('.skill-chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.skill-chip[data-skill="' + skillId + '"]').classList.add('active');
  if (skillId === 'nhamay') {
    document.getElementById('nm-container').style.display = '';
    document.getElementById('other-container').style.display = 'none';
    document.getElementById('nm-search').style.display = '';
    document.getElementById('nm-actions').style.display = '';
    document.getElementById('other-actions').style.display = 'none';
    setMode('browse');
  } else {
    document.getElementById('nm-container').style.display = 'none';
    document.getElementById('other-container').style.display = '';
    document.getElementById('nm-search').style.display = 'none';
    document.getElementById('nm-actions').style.display = 'none';
    document.getElementById('other-actions').style.display = '';
    otherCurrentSkill = skillId;
    otherCurrentFilter = 'all';
    oMmInited = false;
    oMmZoom = 1; oMmPanX = 0; oMmPanY = 0;
    otherBuildFilterSelects();
    otherRenderSidebar();
    otherSetMode('browse');
  }
}

function otherRenderSidebar() {
  const skill = OTHER_SKILLS[otherCurrentSkill];
  let html = '<div class="sidebar-section"><div class="sidebar-label">' + skill.icon + ' ' + skill.name + '</div>';
  html += '<div class="sidebar-item ' + (otherCurrentFilter==='all'?'active':'') + '" data-cat="all" onclick="otherFilterCat(this.dataset.cat)" style="border-left-color:' + skill.color + '">';
  html += '<span class="sidebar-dot" style="background:' + skill.color + '"></span>Tất cả<span class="sidebar-number">' + skill.data.length + '</span></div></div>';
  skill.categories.forEach(cat => {
    const count = skill.data.filter(d => d.cat === cat.id).length;
    const active = otherCurrentFilter === cat.id;
    html += '<div class="sidebar-section"><div class="sidebar-label">' + cat.name + '</div>';
    html += '<div class="sidebar-item ' + (active?'active':'') + '" data-cat="' + cat.id + '" onclick="otherFilterCat(this.dataset.cat)" style="' + (active?'border-left-color:'+cat.color:'') + '">';
    html += '<span class="sidebar-dot" style="background:' + cat.color + '"></span>' + cat.name + '<span class="sidebar-number">' + count + '</span></div></div>';
  });
  document.getElementById('otherSidebar').innerHTML = html;
}

function otherFilterCat(cat) {
  otherCurrentFilter = cat;
  otherRenderSidebar();
  if(otherCurrentSkill==='van')renderVanBrowse();else otherRenderCards();
}

function otherSetMode(mode) {
  otherCurrentMode = mode;
  ['otherBrowseMode','otherMindmapMode','otherFlashcardMode','otherQuizMode'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  if (mode==='browse') { document.getElementById('otherBrowseMode').style.display=''; if(otherCurrentSkill==='van')renderVanBrowse();else otherRenderCards(); }
  if (mode==='mindmap') { document.getElementById('otherMindmapMode').style.display=''; otherRenderMindmap(); }
  if (mode==='flashcard') { document.getElementById('otherFlashcardMode').style.display=''; otherBuildFilterSelects(); otherInitFlashcard(); }
  if (mode==='quiz') { document.getElementById('otherQuizMode').style.display=''; otherBuildFilterSelects(); otherRenderQuizStart(); }
}

function otherSetView(v, btn) {
  otherCurrentView = v;
  document.querySelectorAll('#otherMain .view-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  if(otherCurrentSkill==='van')renderVanBrowse();else otherRenderCards();
}

function otherRenderCards() {
  const skill = OTHER_SKILLS[otherCurrentSkill];
  let items = skill.data;
  if (otherCurrentFilter !== 'all') items = items.filter(d => d.cat === otherCurrentFilter);
  const container = document.getElementById('otherCardsContainer');
  container.className = otherCurrentView === 'grid' ? 'other-cards-grid' : 'cards-list';
  document.getElementById('otherBrowseTitle').textContent = '📚 ' + skill.name;
  container.innerHTML = items.map(d => {
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
  }).join('');
}

function openPopup(skillId, id) {
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
    '<div class="popup-section full"><div class="popup-section-label">🎯 MỤC TIÊU</div><div class="popup-section-content">' + d.goal + '</div></div>' +
    '<div class="popup-section full"><div class="popup-section-label">📖 CHI TIẾT / NGUYÊN LÝ</div><div class="popup-section-content">' + (d.detail||'').replace(/\n/g,'<br>') + '</div></div>' +
    (d.equip ? '<div class="popup-section"><div class="popup-section-label">⚙️ THIẾT BỊ</div><div class="popup-section-content">' + d.equip.replace(/\n/g,'<br>') + '</div></div>' : '') +
    (d.params ? '<div class="popup-section"><div class="popup-section-label">📊 THÔNG SỐ</div><div class="popup-section-content">' + d.params.replace(/\n/g,'<br>') + '</div></div>' : '') +
    '</div>';
  document.getElementById('popupOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePopup(e) {
  if (e && e.target !== document.getElementById('popupOverlay')) return;
  document.getElementById('popupOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { document.getElementById('popupOverlay').classList.remove('open'); document.body.style.overflow = ''; }
});

function otherRenderMindmap() {
  const skill = OTHER_SKILLS[otherCurrentSkill];
  const mm = skill.mindmap;
  if (!mm) return;
  document.getElementById('otherMindmapTitle').textContent = '🗺️ ' + skill.name + ' — Sơ đồ tổng quan';
  let lgHtml = '<div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px;font-weight:700">Chú giải</div>';
  mm.legend.forEach(l => { lgHtml += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px"><span style="width:10px;height:10px;border-radius:2px;background:' + l.color + '"></span>' + l.label + '</div>'; });
  document.getElementById('otherMmLegend').innerHTML = lgHtml;
  const zonesG=document.getElementById('o-zones'),zlG=document.getElementById('o-zone-labels'),connG=document.getElementById('o-connections'),nodesG=document.getElementById('o-nodes');
  const zc = {
    amo:{fill:'rgba(0,86,211,0.04)',stroke:'rgba(0,86,211,0.25)',text:'#0056d3'},
    urea:{fill:'rgba(4,120,87,0.04)',stroke:'rgba(4,120,87,0.25)',text:'#047857'},
    granule:{fill:'rgba(217,119,6,0.04)',stroke:'rgba(217,119,6,0.25)',text:'#d97706'},
    aux:{fill:'rgba(124,58,237,0.04)',stroke:'rgba(124,58,237,0.25)',text:'#7c3aed'},
    esd:{fill:'rgba(220,38,38,0.04)',stroke:'rgba(220,38,38,0.25)',text:'#dc2626'},
    mid:{fill:'rgba(0,0,0,0.02)',stroke:'rgba(0,0,0,0.08)',text:'#6b7280'},
  };
  zonesG.innerHTML = mm.zones.map(z => { const c=zc[z.color]||zc.mid; return '<rect x="'+z.x+'" y="'+z.y+'" width="'+z.w+'" height="'+z.h+'" rx="14" ry="14" fill="'+c.fill+'" stroke="'+c.stroke+'" stroke-width="1" stroke-dasharray="4 3"/>'; }).join('');
  zlG.innerHTML = mm.zones.map(z => { const c=zc[z.color]||zc.mid; return '<text x="'+(z.x+14)+'" y="'+(z.y+22)+'" font-family="\'Be Vietnam Pro\',sans-serif" font-size="11" font-weight="700" fill="'+c.text+'" letter-spacing="1.5">'+z.label+'</text>'; }).join('');
  const cm={blue:'#3b82f6',green:'#10b981',amber:'#f59e0b',purple:'#8b5cf6',gray:'#5a6e96',orange:'#ea580c',cyan:'#0891b2'};
  function gn(id){return mm.nodes.find(n=>n.id===id);}
  function bp(f,t){
    const fx=f.x+f.w/2,fy=f.y+f.h/2,tx=t.x+t.w/2,ty=t.y+t.h/2,dx=tx-fx,dy=ty-fy;
    let x1,y1,x2,y2;
    if(Math.abs(dx)>Math.abs(dy)){if(dx>0){x1=f.x+f.w;y1=fy;x2=t.x;y2=ty}else{x1=f.x;y1=fy;x2=t.x+t.w;y2=ty}}else{if(dy>0){x1=fx;y1=f.y+f.h;x2=tx;y2=t.y}else{x1=fx;y1=f.y;x2=tx;y2=t.y+t.h}}
    const isH=Math.abs(x2-x1)>Math.abs(y2-y1),mx=(x1+x2)/2,my=(y1+y2)/2;
    return {d:'M '+x1+' '+y1+' C '+(isH?mx:x1)+' '+(isH?y1:my)+', '+(isH?mx:x2)+' '+(isH?y2:my)+', '+x2+' '+y2,mx,my};
  }
  connG.innerHTML = mm.edges.map(e=>{
    const f=gn(e.from),t=gn(e.to);if(!f||!t)return'';
    const {d,mx,my}=bp(f,t),color=cm[e.color]||'#5a6e96',dash=e.dashed?'stroke-dasharray="5 4"':'';
    let lbl='';
    if(e.label){lbl='<g><rect x="'+(mx-e.label.length*3-4)+'" y="'+(my-8)+'" width="'+(e.label.length*6+8)+'" height="16" rx="3" fill="rgba(255,255,255,0.95)" stroke="'+color+'" stroke-opacity="0.4"/><text x="'+mx+'" y="'+(my+3)+'" text-anchor="middle" font-family="\'JetBrains Mono\',monospace" font-size="9" fill="'+color+'" font-weight="600">'+e.label+'</text></g>';}
    return '<g><path d="'+d+'" fill="none" stroke="'+color+'" stroke-width="1.8" '+dash+' marker-end="url(#oarr-'+e.color+')"/>' + lbl + '</g>';
  }).join('');
  const cats={};
  skill.categories.forEach(c=>{cats[c.id]=c.color;});
  nodesG.innerHTML = mm.nodes.map(n=>{
    const color=cats[n.cat]||skill.color;
    function h2r(h){const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return{r,g,b};}
    const rgb=h2r(color);
    const bg='rgba('+rgb.r+','+rgb.g+','+rgb.b+',0.08)';
    const ry=n.sub==='product'?12:n.sub==='input'?22:8;
    const lines=n.label.split('\n');
    const lh=14,sy=n.y+n.h/2-((lines.length-1)*lh)/2+4;
    return '<g class="omm-node" data-skillid="'+otherCurrentSkill+'" data-nlabel="'+encodeURIComponent(lines[0])+'" style="cursor:pointer">' +
      '<rect x="'+n.x+'" y="'+n.y+'" width="'+n.w+'" height="'+n.h+'" rx="'+ry+'" ry="'+ry+'" fill="'+bg+'" stroke="'+color+'" stroke-width="'+(n.sub==='product'?'2.5':'1.5')+'" '+(n.sub==='product'?'filter="url(#oglow)"':'')+'/>' +
      lines.map((line,i)=>'<text x="'+(n.x+n.w/2)+'" y="'+(sy+i*lh)+'" text-anchor="middle" font-family="\'Be Vietnam Pro\',sans-serif" font-size="'+(i===0?'11.5':'10')+'" font-weight="'+(i===0?'700':'500')+'" fill="'+color+'">'+line+'</text>').join('') +
      '</g>';
  }).join('');
  nodesG.querySelectorAll('.omm-node').forEach(el=>{
    el.addEventListener('click',()=>{
      const skId=el.getAttribute('data-skillid');
      const lbl=decodeURIComponent(el.getAttribute('data-nlabel')).toLowerCase().substring(0,6);
      const sk2=OTHER_SKILLS[skId];
      const match=sk2.data.find(d=>d.name.toLowerCase().includes(lbl)||(d.sub&&d.sub.toLowerCase().includes(lbl)));
      if(match) openPopup(skId,match.id);
    });
    el.addEventListener('mouseenter',()=>{connG.querySelectorAll('g').forEach(g=>g.style.opacity='0.15');el.style.filter='brightness(1.25)';});
    el.addEventListener('mouseleave',()=>{connG.querySelectorAll('g').forEach(g=>g.style.opacity='');el.style.filter='';});
  });
  if(!oMmInited){
    const cont=document.getElementById('otherMmContainer');
    let iD=false,sx=0,sy=0,spx=0,spy=0;
    cont.addEventListener('mousedown',e=>{if(e.target.closest('.omm-node'))return;iD=true;sx=e.clientX;sy=e.clientY;spx=oMmPanX;spy=oMmPanY;cont.style.cursor='grabbing';});
    window.addEventListener('mousemove',e=>{if(!iD)return;oMmPanX=spx+(e.clientX-sx);oMmPanY=spy+(e.clientY-sy);applyOtherMmT();});
    window.addEventListener('mouseup',()=>{iD=false;cont.style.cursor='grab';});
    cont.addEventListener('wheel',e=>{e.preventDefault();oMmZoom=Math.max(0.4,Math.min(2.5,oMmZoom*(e.deltaY<0?1.1:0.91)));applyOtherMmT();},{passive:false});
    oMmInited=true;
  }
  applyOtherMmT();
}
function applyOtherMmT(){document.getElementById('otherMmSvg').style.transform='translate('+oMmPanX+'px,'+oMmPanY+'px) scale('+oMmZoom+')';}
function otherZoom(f){oMmZoom=Math.max(0.4,Math.min(2.5,oMmZoom*f));applyOtherMmT();}
function otherResetZoom(){oMmZoom=1;oMmPanX=0;oMmPanY=0;applyOtherMmT();}

function otherBuildFilterSelects(){
  const skill=OTHER_SKILLS[otherCurrentSkill];
  ['otherFcFilter','otherQuizFilter'].forEach(sid=>{
    const sel=document.getElementById(sid);if(!sel)return;
    sel.innerHTML='<option value="all">Tất cả</option>'+skill.categories.map(c=>'<option value="'+c.id+'">'+c.name+'</option>').join('');
  });
}
function otherInitFlashcard(){
  const skill=OTHER_SKILLS[otherCurrentSkill];
  const filter=document.getElementById('otherFcFilter').value;
  const pool=filter==='all'?[...skill.flashcards]:skill.flashcards.filter(f=>f.cat===filter);
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  oFcCards=pool;oFcIndex=0;oFcFlipped=false;
  document.getElementById('otherFcCard').style.transform='rotateY(0deg)';
  otherRenderFC();
}
function otherRenderFC(){
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
}
function otherFlipCard(){
  oFcFlipped=!oFcFlipped;
  document.getElementById('otherFcCard').style.transform=oFcFlipped?'rotateY(180deg)':'rotateY(0deg)';
}
function otherNavigateFC(dir){
  oFcIndex=(oFcIndex+dir+oFcCards.length)%oFcCards.length;
  oFcFlipped=false;
  document.getElementById('otherFcCard').style.transform='rotateY(0deg)';
  setTimeout(otherRenderFC,50);
}
function otherRenderQuizStart(){
  document.getElementById('otherQuizArea').innerHTML='<div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:40px;text-align:center"><div style="font-size:40px;margin-bottom:16px">🧪</div><h2 style="font-size:20px;margin-bottom:8px">Kiểm tra kiến thức</h2><p style="color:var(--text2);font-size:14px;margin-bottom:24px">Chọn chủ đề và nhấn Bắt đầu.</p><button class="btn btn-primary" onclick="otherStartQuiz()" style="font-size:14px;padding:10px 28px">▶ Bắt đầu ngay</button></div>';
}
function otherStartQuiz(){
  const skill=OTHER_SKILLS[otherCurrentSkill];
  const filter=document.getElementById('otherQuizFilter').value;
  const pool=filter==='all'?[...skill.flashcards]:skill.flashcards.filter(f=>f.cat===filter);
  if(pool.length<2){alert('Cần ít nhất 2 câu!');return;}
  oQuizItems=[...pool].sort(()=>Math.random()-0.5).slice(0,Math.min(10,pool.length));
  oQuizIndex=0;oQuizScore=0;
  otherRenderOQ();
}
function otherRenderOQ(){
  if(oQuizIndex>=oQuizItems.length){otherQuizResult();return;}
  const q=oQuizItems[oQuizIndex];
  const pct=(oQuizIndex/oQuizItems.length)*100;
  document.getElementById('otherQuizArea').innerHTML=
    '<div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:28px">' +
    '<div style="display:flex;align-items:center;gap:12px;margin-bottom:24px"><div style="flex:1;height:4px;background:var(--border);border-radius:2px"><div style="width:'+pct+'%;height:100%;background:var(--blue);border-radius:2px"></div></div><span style="font-size:12px;color:var(--text3);font-family:\'JetBrains Mono\',monospace">'+(oQuizIndex+1)+'/'+oQuizItems.length+'</span></div>' +
    '<div style="font-size:16px;font-weight:700;margin-bottom:20px;line-height:1.45">'+q.q+'</div>' +
    '<div style="padding:16px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;margin-bottom:16px;cursor:pointer;color:var(--text3);font-size:13px" onclick="otherShowA()">👆 Nhấn để xem đáp án</div>' +
    '<div id="oQA" style="display:none;padding:16px;background:rgba(4,120,87,0.06);border:1px solid rgba(4,120,87,0.25);border-radius:8px;margin-bottom:16px;font-size:14px;line-height:1.7;color:var(--green)">'+q.a+'</div>' +
    '<div style="display:flex;justify-content:flex-end"><button class="btn btn-primary" id="oQNext" style="display:none" onclick="otherNextQ()">Tiếp theo →</button></div></div>';
}
function otherShowA(){document.getElementById('oQA').style.display='block';document.getElementById('oQNext').style.display='block';oQuizScore++;}
function otherNextQ(){oQuizIndex++;otherRenderOQ();}
function otherQuizResult(){
  const pct=Math.round((oQuizScore/oQuizItems.length)*100);
  const msg=pct>=80?'🎉 Xuất sắc!':pct>=60?'👍 Khá tốt!':'📚 Cần ôn thêm!';
  document.getElementById('otherQuizArea').innerHTML='<div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:40px;text-align:center"><div style="font-size:48px;margin-bottom:16px">'+msg.split(' ')[0]+'</div><h2 style="margin-bottom:8px">'+(msg.substring(2))+'</h2><div style="font-size:52px;font-weight:800;font-family:\'JetBrains Mono\',monospace;color:'+(pct>=80?'var(--green)':pct>=60?'var(--amber)':'var(--red)')+';margin:16px 0">'+pct+'%</div><div style="color:var(--text2);margin-bottom:24px">Đã xem <strong>'+oQuizScore+'</strong> / '+oQuizItems.length+' câu đáp án</div><div style="display:flex;gap:10px;justify-content:center"><button class="btn btn-ghost" onclick="otherStartQuiz()">🔄 Làm lại</button><button class="btn btn-primary" onclick="otherSetMode(\'browse\')">📚 Ôn thêm</button></div></div>';
}

// ===================================================
// INIT
// ===================================================
init();


// =====================================================
// VAN SKILL – CUSTOM BROWSE RENDERING
// =====================================================
function renderVanBrowse() {
  const skill = OTHER_SKILLS['van'];
  const sections = [
    { id:'body', label:'THÂN VAN (BODY)',        color:'#0891b2', e:'🔵' },
    { id:'act',  label:'ACTUATOR',               color:'#dc2626', e:'🔴' },
    { id:'pos',  label:'POSITIONER & PHỤ KIỆN',  color:'#047857', e:'🟢' },
    { id:'fs',   label:'FAIL-SAFE & KẾT NỐI',    color:'#d97706', e:'🟡' },
  ];
  document.getElementById('otherBrowseTitle').textContent = '📚 ' + skill.name;
  const activeSections = (otherCurrentFilter === 'all')
    ? sections
    : sections.filter(sec => sec.id === otherCurrentFilter);
  let html = '';
  activeSections.forEach(sec => {
    const items = skill.data.filter(d => d.cat === sec.id);
    if (!items.length) return;
    html +=
      '<div class="van-section">' +
        '<div class="van-sec-hdr">' +
          '<span class="van-sec-bar" style="background:' + sec.color + '"></span>' +
          '<span class="van-sec-title" style="color:' + sec.color + '">' + sec.e + ' ' + sec.label + '</span>' +
          '<span class="van-sec-cnt">' + items.length + ' mục</span>' +
        '</div>' +
        '<div class="van-grid">' +
          items.map(d => renderVanCard(skill, d)).join('') +
        '</div>' +
      '</div>';
  });
  const cont = document.getElementById('otherCardsContainer');
  cont.className = '';
  cont.innerHTML = html;
}

function renderVanCard(skill, d) {
  const cat   = skill.categories.find(c => c.id === d.cat);
  const color = cat ? cat.color : skill.color;
  const catNm = cat ? cat.name  : '';
  const cellsHtml = (d.cells || []).map(cell => {
    const wide = cell.w ? ' full' : '';
    let inner;
    if (cell.c) {
      inner = '<div class="van-cchips">' +
        cell.c.map(chip => {
          const hasCpt = !!chip.k;
          return '<span class="van-chip ' + (hasCpt ? 'cpt' : 'nc') + '"' +
            (hasCpt ? ' onclick="openConceptPopup(\'van\',\'' + chip.k + '\')"' : '') +
            '>' + chip.t + '</span>';
        }).join('') +
      '</div>';
    } else {
      inner = '<div class="van-cv">' + (cell.v || '') + '</div>';
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
    '<div class="van-card-ft" onclick="openPopup(\'van\',' + d.id + ')"><span>Xem chi tiết ↗</span></div>' +
  '</div>';
}

function openConceptPopup(skillId, cptKey) {
  if (!cptKey) return;
  const skill = OTHER_SKILLS[skillId];
  if (!skill || !skill.concepts || !skill.concepts[cptKey]) return;
  const cpt = skill.concepts[cptKey];
  document.getElementById('popupNum').textContent    = cpt.e || '💡';
  document.getElementById('popupTitle').textContent  = cpt.title;
  document.getElementById('popupSubtitle').textContent = 'Khái niệm kỹ thuật – Van điều khiển';
  const badge = document.getElementById('popupBadge');
  badge.textContent  = 'Khái niệm';
  badge.style.cssText = 'background:#7c3aed18;color:#7c3aed;border:1px solid #7c3aed35;';
  document.getElementById('popupNum').style.color = '#7c3aed60';
  document.getElementById('popupBody').innerHTML =
    '<div class="popup-sections">' +
      '<div class="popup-section full">' +
        '<div class="popup-section-label">📖 GIẢI THÍCH</div>' +
        '<div class="popup-section-content">' + (cpt.body || '').replace(/\n/g, '<br>') + '</div>' +
      '</div>' +
      (cpt.note
        ? '<div class="popup-section full">' +
            '<div class="popup-section-label">📌 GHI CHÚ TẠI NHÀ MÁY</div>' +
            '<div class="popup-section-content">' + cpt.note + '</div>' +
          '</div>'
        : '') +
    '</div>';
  document.getElementById('popupOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

