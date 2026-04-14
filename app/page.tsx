"use client";

import { sections, offerDate } from "@/data/offer";

function fmt(price: number | null): { text: string; isNull: boolean } {
  if (price === null) return { text: "na zapytanie", isNull: true };
  return {
    text: price.toLocaleString("pl-PL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " PLN",
    isNull: false,
  };
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#f0f2f5" }}>
      <div
        className="page-container max-w-4xl mx-auto my-8 bg-white overflow-hidden"
        style={{ borderRadius: 8, boxShadow: "0 4px 24px rgba(0,0,0,.12)" }}
      >
        {/* Header */}
        <header
          style={{ background: "#1a1a2e" }}
          className="px-9 pt-7 pb-5 text-white"
        >
          <h1 className="text-xl font-bold tracking-wide">
            OFERTA SPRZEDAŻY SPRZĘTU
          </h1>
          <p className="text-xs mt-1.5" style={{ color: "#aaa" }}>
            Data oferty: {offerDate}&nbsp;&nbsp;|&nbsp;&nbsp;Ceny brutto (z
            VAT)&nbsp;&nbsp;|&nbsp;&nbsp;Możliwość negocjacji
          </p>
        </header>

        {/* Toolbar */}
        <div
          className="no-print px-9 py-2.5 flex gap-3"
          style={{ background: "#16213e" }}
        >
          <button
            onClick={() => window.print()}
            className="text-white text-xs px-4 py-1.5 rounded cursor-pointer border-0"
            style={{ background: "#0f3460" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background = "#1a5276")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "#0f3460")
            }
          >
            🖨 Drukuj / Zapisz PDF
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr style={{ background: "#0f3460", color: "#fff" }}>
                <th
                  className="text-left font-semibold text-xs uppercase tracking-wider py-2.5 px-3"
                  style={{ width: 40 }}
                >
                  Lp.
                </th>
                <th className="text-left font-semibold text-xs uppercase tracking-wider py-2.5 px-3">
                  Nazwa / Model
                </th>
                <th
                  className="text-right font-semibold text-xs uppercase tracking-wider py-2.5 px-3 whitespace-nowrap"
                  style={{ width: 60 }}
                >
                  Ilość
                </th>
                <th
                  className="text-right font-semibold text-xs uppercase tracking-wider py-2.5 px-3 whitespace-nowrap"
                  style={{ width: 50 }}
                >
                  J.m.
                </th>
                <th
                  className="text-right font-semibold text-xs uppercase tracking-wider py-2.5 px-3 whitespace-nowrap"
                  style={{ width: 150 }}
                >
                  Cena / szt.
                </th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section) => (
                <>
                  {/* Section header */}
                  <tr key={`sec-${section.title}`} className="section-header">
                    <td
                      colSpan={5}
                      className="py-2 px-3 text-xs font-bold text-white uppercase tracking-widest"
                      style={{ background: section.color }}
                    >
                      <span className="mr-1.5">{section.icon}</span>
                      {section.title}
                    </td>
                  </tr>

                  {/* Items */}
                  {section.items.map((item, idx) => {
                    const priceF = fmt(item.price);
                    const isEven = idx % 2 === 0;

                    return (
                      <tr
                        key={item.lp}
                        style={{ background: isEven ? "#fff" : "#f5f7fb" }}
                        className="hover:bg-blue-50 transition-colors"
                      >
                        <td
                          className="py-2 px-3 text-center text-xs border-b"
                          style={{
                            color: "#999",
                            borderColor: "#e8eaf0",
                            width: 40,
                          }}
                        >
                          {item.lp}
                        </td>
                        <td
                          className="py-2 px-3 border-b leading-snug"
                          style={{
                            borderColor: "#e8eaf0",
                            maxWidth: 360,
                          }}
                        >
                          {item.name}
                        </td>
                        <td
                          className="py-2 px-3 text-center border-b"
                          style={{ color: "#444", borderColor: "#e8eaf0" }}
                        >
                          {item.qty}
                        </td>
                        <td
                          className="py-2 px-3 text-center border-b"
                          style={{ color: "#444", borderColor: "#e8eaf0" }}
                        >
                          {item.unit}
                        </td>
                        <td
                          className="py-2 px-3 text-right border-b whitespace-nowrap font-semibold"
                          style={{
                            borderColor: "#e8eaf0",
                            fontVariantNumeric: "tabular-nums",
                            color: priceF.isNull ? "#bbb" : "#0d4f8b",
                          }}
                        >
                          {priceF.isNull ? (
                            <span style={{ fontStyle: "italic", fontSize: 11 }}>
                              {priceF.text}
                            </span>
                          ) : (
                            priceF.text
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <footer
          className="px-9 py-4 text-xs border-t"
          style={{ background: "#f5f7fb", color: "#777", borderColor: "#e0e3ea" }}
        >
          Kontakt: jakub.gornicki@gmail.com&nbsp;&nbsp;·&nbsp;&nbsp;Wszystkie
          ceny brutto z VAT&nbsp;&nbsp;·&nbsp;&nbsp;Możliwy rabat przy zakupie
          kilku pozycji jednocześnie&nbsp;&nbsp;·&nbsp;&nbsp;Pozycje &ldquo;na
          zapytanie&rdquo; wymagają indywidualnej wyceny
        </footer>
      </div>
    </div>
  );
}
