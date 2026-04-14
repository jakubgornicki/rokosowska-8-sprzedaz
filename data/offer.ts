export interface OfferItem {
  lp: number;
  name: string;
  qty: number;
  unit: string;
  price: number | null;
}

export interface OfferSection {
  icon: string;
  title: string;
  color: string;
  items: OfferItem[];
}

export const offerDate = "14.04.2026";

export const sections: OfferSection[] = [
  {
    icon: "📺",
    title: "Monitory profesjonalne / Wyświetlacze",
    color: "#0D4F8B",
    items: [
      { lp: 1,  name: 'Monitor Sony FW-98BZ50L (98", 4K profesjonalny)',         qty: 1,  unit: "szt.", price: 27000 },
      { lp: 2,  name: 'Telewizor Sony BRAVIA XR-75Z9J (75", 8K Full Array LED)', qty: 1,  unit: "szt.", price: 13000 },
      { lp: 3,  name: 'Monitor Sony FW-55BZ40L (55", profesjonalny)',             qty: 1,  unit: "szt.", price: 4160 },
      { lp: 4,  name: 'Monitor Sony FW-50BZ30L (50", profesjonalny)',             qty: 1,  unit: "szt.", price: 3440 },
      { lp: 5,  name: 'Monitor Sony FW-43BZ30L (43")',                            qty: 7,  unit: "szt.", price: 1800 },
      { lp: 6,  name: 'Monitor Sony FW-43BZ20L (43")',                            qty: 1,  unit: "szt.", price: 1800 },
      { lp: 7,  name: 'Monitor Sony FW-32BZ30J1 (32", profesjonalny)',            qty: 2,  unit: "szt.", price: 1500 },
    ],
  },
  {
    icon: "🎥",
    title: "Kamery / Kontrolery PTZ",
    color: "#0A3F70",
    items: [
      { lp: 8,  name: "Kamera Sony SRG-A40BC (PTZ, 4K, AI Framing)",      qty: 3, unit: "szt.", price: 13000 },
      { lp: 9,  name: "Kontroler Sony RM-IP500/ACM (PTZ Advanced)",        qty: 1, unit: "szt.", price: 11000 },
    ],
  },
  {
    icon: "🔊",
    title: "Audio / Nagłośnienie",
    color: "#094060",
    items: [
      { lp: 10, name: "Amplituner Onkyo TX-RZ70 BK",                                    qty: 1,  unit: "szt.", price: 9600 },
      { lp: 11, name: "Głośnik instalacyjny Focal 300 IW LCR6 (ścienny)",               qty: 3,  unit: "szt.", price: 3263.32 },
      { lp: 12, name: "Subwoofer Klipsch RP-1400SW",                                    qty: 2,  unit: "szt.", price: 3039.20 },
      { lp: 13, name: "Głośnik instalacyjny Focal 300 IW6 (ścienny)",                   qty: 4,  unit: "szt.", price: 1767.32 },
      { lp: 14, name: "Głośnik instalacyjny Focal 300 ICW 6 (sufitowy)",                qty: 4,  unit: "szt.", price: 1427.32 },
      { lp: 15, name: "Rode Wireless GO II (bezprzewodowy zestaw mikrofonowy)",          qty: 1,  unit: "szt.", price: 766.40 },
      { lp: 16, name: "Rode PodMic USB (mikrofon dynamiczny broadcast)",                 qty: 1,  unit: "szt.", price: 638.40 },
      { lp: 17, name: "Statyw mikrofonowy Dynawid SM-3200",                              qty: 2,  unit: "szt.", price: 295.20 },
      { lp: 18, name: "Dibox Klark Technik DN-200 V2",                                   qty: 2,  unit: "szt.", price: 530 },
      { lp: 19, name: "Kabel mikrofonowy Rig Stage Cordial+Neutrik 10m",                qty: 10, unit: "szt.", price: 88 },
      { lp: 20, name: "Kabel mikrofonowy Rig Stage Cordial+Neutrik 5m",                 qty: 7,  unit: "szt.", price: 72 },
    ],
  },
  {
    icon: "🖥️",
    title: "Infrastruktura RACK",
    color: "#1A5276",
    items: [
      { lp: 21, name: 'Szafa RACK GETFORT 19" 42U 600×800 mm stojąca perforowana', qty: 1, unit: "szt.", price: 2000 },
      { lp: 22, name: 'Listwa zasilająca RACK 19" GETFORT LGF-06-Z 6×230V 1U',    qty: 6, unit: "szt.", price: 87 },
      { lp: 23, name: 'Półka RACK 19" głębokość 800mm 1U',                         qty: 8, unit: "szt.", price: 96 },
      { lp: 24, name: 'Panel wentylatorów (2×) do szafy RACK 19" 1U',             qty: 2, unit: "szt.", price: 183 },
    ],
  },
  {
    icon: "💻",
    title: "IT / Sieć / Komputery",
    color: "#0B4880",
    items: [
      { lp: 25, name: "Drukarka Brother DCP-L5510DW (Laser A4, Wi-Fi)",         qty: 1, unit: "szt.", price: 2000 },
      { lp: 26, name: "Router ASUS ExpertWiFi EBM68 (zestaw 2-pack)",           qty: 1, unit: "kpl.", price: 1039.20 },
      { lp: 27, name: "Blackmagic Design ATEM Mini Pro (switcher/streamer)",     qty: 1, unit: "szt.", price: 1035.20 },
      { lp: 28, name: "Router Asus 4G-AC68U",                                   qty: 1, unit: "szt.", price: 919.20 },
      { lp: 29, name: 'MacBook Pro 13" M1 (16GB/512GB, 2020)',                  qty: 1, unit: "szt.", price: 1800 },
    ],
  },
  {
    icon: "📱",
    title: "Elektronika / Akcesoria",
    color: "#0A3F70",
    items: [
      { lp: 30, name: 'Tablet Samsung Galaxy Tab A9+ (11", 4/64 GB)',                          qty: 2,  unit: "szt.", price: 600 },
      { lp: 31, name: "Tablet Samsung Galaxy Tab A9+ (X210)",                                  qty: 7,  unit: "szt.", price: 600 },
      { lp: 32, name: "Elgato Key Light (LED Studio, 2800lm, regulacja temperatury barwowej)", qty: 3,  unit: "szt.", price: 559 },
      { lp: 33, name: "Osuszacz przemysłowy SKIVA OPPS-70X (70L/24h, 1300W)",                  qty: 1,  unit: "szt.", price: 2239.20 },
      { lp: 34, name: "Peak Design Universal Bar Mount (Mobile)",                               qty: 1,  unit: "szt.", price: 223.20 },
      { lp: 35, name: "Peak Design Stand Wallet (Mobile)",                                      qty: 1,  unit: "szt.", price: 215.20 },
      { lp: 36, name: "Peak Design Universal Adapter (Mobile)",                                 qty: 1,  unit: "szt.", price: 111.20 },
      { lp: 37, name: 'Uchwyt do tabletu Barkan Premium 360° 7–12"',                           qty: 1,  unit: "szt.", price: 96 },
      { lp: 38, name: 'Uchwyt do tabletu Nedis TWMT100SI Fixed 7–12"',                         qty: 1,  unit: "szt.", price: 56 },
      { lp: 39, name: "Kabel HDMI Zeskit Maya Ultra High Speed 2.1 48Gbps",                    qty: 1,  unit: "szt.", price: 79.20 },
      { lp: 40, name: "Kabel HDMI PureLink Benchmark PureInstall",                             qty: 1,  unit: "szt.", price: 72 },
      { lp: 41, name: "Kabel HDMI Clicktronic Super Slim 4K 3m",                               qty: 1,  unit: "szt.", price: 56 },
      { lp: 42, name: "Kabel HDMI HD2.1V Premium 8K HDMI 2.1 3m",                             qty: 1,  unit: "szt.", price: 17.60 },
      { lp: 43, name: "Kabel HDMI VAYOX v2.1 8K 1,5m",                                        qty: 1,  unit: "szt.", price: null },
      { lp: 44, name: 'Telewizor Xiaomi MI TV 4S (43")',                                       qty: 1,  unit: "szt.", price: 500 },
    ],
  },
  {
    icon: "🪑",
    title: "Meble",
    color: "#0D4F8B",
    items: [
      { lp: 45, name: "Krzesło ażurowe czarne UNO z podłokietnikami",                    qty: 30, unit: "szt.", price: 96 },
      { lp: 46, name: "Krzesło plastikowe REFRESCO żółte (PP, 100kg)",                    qty: 5,  unit: "szt.", price: 97.42 },
      { lp: 47, name: "Fotel biurowy welurowy HARIS DC-6096H (zielony pikowany)",         qty: 4,  unit: "szt.", price: 239.20 },
      { lp: 48, name: "Stolik kawiarniany 60×60 cm dąb lefkas, noga czarna",              qty: 4,  unit: "szt.", price: 168.50 },
      { lp: 49, name: "IKEA KALLAX regał 182×182 cm czarnobrązowy (5×5)",                 qty: 1,  unit: "szt.", price: 639.20 },
      { lp: 50, name: "Hoker barowy ASTER welurowy miedziany, regulowany",                qty: 4,  unit: "szt.", price: 265 },
      { lp: 51, name: "Puf welurowy WISCONSIN 36×36×39 cm (fioletowy)",                   qty: 4,  unit: "szt.", price: 145 },
    ],
  },
];
