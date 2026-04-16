import Link from "next/link";
import { notFound } from "next/navigation";
import { allItems, contactEmail, location, findItemBySlug } from "@/data/offer";
import Gallery from "@/app/components/Gallery";
import Markdown from "@/app/components/Markdown";
import { formatPriceDetail } from "@/app/lib/format";

export function generateStaticParams() {
  return allItems.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = findItemBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.name} — Oferta sprzedaży`,
    description: item.descriptionMd.slice(0, 160),
  };
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = findItemBySlug(slug);
  if (!item) notFound();

  const subject = encodeURIComponent(`Rezerwacja: ${item.name}`);
  const body = encodeURIComponent(
    `Dzień dobry, chciałbym zarezerwować "${item.name}". Proszę o kontakt.\n\n—`,
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Topbar */}
      <div className="sticky top-0 z-20 bg-slate-900 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 md:px-9 py-3 flex justify-between items-center">
          <Link
            href="/"
            className="bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded text-sm transition-colors"
          >
            ← Wróć do listy
          </Link>
          <span className="hidden md:inline font-semibold tracking-wider text-sm">
            OFERTA SPRZEDAŻY · WARSZAWA
          </span>
          <a
            href={`mailto:${contactEmail}?subject=Zapytanie: ${encodeURIComponent(item.name)}`}
            className="text-sm hover:underline"
          >
            Kontakt ✉
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-5 md:p-8">
        {/* Hero */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-8 bg-white rounded-xl overflow-hidden shadow-lg">
          <Gallery photos={item.photos} alt={item.name} />
          <div className="p-6 md:p-9 flex flex-col justify-between">
            <div>
              <div className="flex gap-2 flex-wrap mb-3">
                {item.liveOnOlx && (
                  <span className="inline-block bg-blue-50 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded tracking-wide">
                    ● AKTYWNE NA OLX
                  </span>
                )}
                {item.hasInvoice && (
                  <span className="inline-block bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded tracking-wide">
                    ✓ FAKTURA VAT
                  </span>
                )}
                {item.qty > 1 && (
                  <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded">
                    ×{item.qty} dostępnych
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {item.name}
              </h1>
              {item.category && (
                <div className="text-slate-500 text-xs mt-2">
                  {item.category}
                </div>
              )}
              <div
                className="mt-5 p-5 rounded-xl text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #0f3460 0%, #0d4f8b 100%)",
                }}
              >
                <div className="text-[11px] tracking-wider uppercase text-blue-200">
                  Cena
                </div>
                <div
                  className="text-3xl md:text-4xl font-extrabold mt-1"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {formatPriceDetail(item.price)}
                </div>
                <div className="text-xs text-blue-200 mt-1">
                  {item.qty > 1 ? `/ szt. (dostępne: ${item.qty})` : "1 sztuka"}
                </div>
                <div className="text-[11px] text-blue-200 italic mt-2.5">
                  Możliwa negocjacja · rabat przy zakupie kilku pozycji
                </div>
              </div>
              <div className="flex gap-2.5 mt-4 flex-wrap">
                <a
                  href={`mailto:${contactEmail}?subject=${subject}&body=${body}`}
                  className="inline-flex items-center gap-1.5 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-sm shadow-md hover:shadow-lg transition-all"
                >
                  Zarezerwuj / Zapytaj
                </a>
                {item.olxUrl && (
                  <a
                    href={item.olxUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg text-sm"
                  >
                    Zobacz na OLX →
                  </a>
                )}
              </div>
            </div>
            <div className="flex gap-5 mt-6 pt-4 px-4 py-3 bg-blue-50 border-l-4 border-blue-500 rounded-r text-sm text-slate-700 flex-wrap">
              <span>📍 {location} · odbiór osobisty</span>
              <span>
                🧾 {item.hasInvoice ? "Faktura VAT dostępna" : "Stan: używany, sprawny"}
              </span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="bg-white mt-6 p-6 md:p-9 rounded-xl shadow-sm">
          <h2 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-4">
            Opis i specyfikacja
          </h2>
          <Markdown source={item.descriptionMd} />
        </div>
      </div>

      <footer className="text-center py-6 text-xs text-slate-500">
        Kontakt: {contactEmail} · Ceny brutto (z VAT) · Sprzęt w Warszawie
      </footer>
    </div>
  );
}
