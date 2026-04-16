import { sections, allItems, contactEmail, location } from "@/data/offer";
import ItemCard from "@/app/components/ItemCard";
import SearchFilter from "@/app/components/SearchFilter";

export default function Home() {
  const totalItems = allItems.length;
  const totalPhotos = allItems.reduce((n, i) => n + i.photos.length, 0);
  const totalOlx = allItems.filter((i) => i.liveOnOlx).length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <header
        className="relative overflow-hidden text-white px-9 pt-10 pb-7"
        style={{
          background:
            "linear-gradient(135deg, #0a1f3d 0%, #0f3460 60%, #0d4f8b 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute -top-1/2 -right-1/5 w-[600px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,.18) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-2">
            Sprzedaż sprzętu eventowego i biurowego
          </h1>
          <p className="text-slate-300 max-w-3xl leading-relaxed">
            Kompletne wyposażenie sali eventowej/konferencyjnej do odbioru w{" "}
            {location}: profesjonalne wyświetlacze Sony, kamery PTZ, nagłośnienie
            Focal/Klipsch, infrastruktura IT, meble. Wszystko sprawne, większość
            z fakturą VAT.
          </p>
          <div className="flex gap-5 mt-5 flex-wrap">
            <div className="bg-white/10 backdrop-blur border border-white/10 rounded-lg px-4 py-2.5">
              <div className="text-2xl font-bold">{totalItems}</div>
              <div className="text-[11px] text-slate-300 tracking-wider uppercase">
                Pozycji
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/10 rounded-lg px-4 py-2.5">
              <div className="text-2xl font-bold">{totalPhotos}</div>
              <div className="text-[11px] text-slate-300 tracking-wider uppercase">
                Zdjęć produktowych
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/10 rounded-lg px-4 py-2.5">
              <div className="text-2xl font-bold">{totalOlx}</div>
              <div className="text-[11px] text-slate-300 tracking-wider uppercase">
                Aktywne na OLX
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky nav */}
      <nav className="sticky top-0 z-20 bg-white shadow-sm overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-1 items-center">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-1.5 text-[11px] md:text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded whitespace-nowrap"
            >
              {s.icon} {s.title}
            </a>
          ))}
          <a
            href={`mailto:${contactEmail}?subject=Oferta%20sprzeda%C5%BCy`}
            className="ml-auto bg-emerald-600 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-emerald-700 whitespace-nowrap"
          >
            ✉ Kontakt
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 md:px-9 py-6 pb-12">
        {/* Bulk banner */}
        <div className="bg-white border-2 border-dashed border-amber-500 rounded-xl px-5 py-4 mb-6 flex gap-4 items-center flex-wrap">
          <span className="text-3xl">🎁</span>
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-amber-900 font-semibold text-sm mb-1">
              Rabat przy zakupie pakietowym
            </h3>
            <p className="text-amber-900/80 text-sm">
              Zainteresowany kilkoma pozycjami? Napisz — wyślemy indywidualną
              wycenę z rabatem. Możliwy odbiór całości jednego dnia.
            </p>
          </div>
          <a
            href={`mailto:${contactEmail}?subject=Zapytanie%20pakietowe&body=Interesuj%C4%85%20mnie%20pozycje:%20`}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-2.5 rounded text-sm whitespace-nowrap"
          >
            Wyceń pakiet
          </a>
        </div>

        <div className="mb-5">
          <SearchFilter totalItems={totalItems} />
        </div>

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            data-section
            className="mt-9 scroll-mt-20"
          >
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5 mb-1">
              <span>{section.icon}</span>
              <span>{section.title}</span>
            </h2>
            <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-4">
              {section.items.length} pozycji w kategorii
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.items.map((item) => (
                <ItemCard key={item.slug} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="text-center py-7 px-4 text-xs text-slate-500 leading-relaxed">
        Kontakt:{" "}
        <a
          href={`mailto:${contactEmail}`}
          className="text-blue-700 hover:underline"
        >
          {contactEmail}
        </a>
        {" "}· Wszystkie ceny brutto (z VAT) · Możliwa negocjacja przy zakupie
        kilku pozycji
        <br />
        Odbiór osobisty {location} · Wysyłka wg indywidualnych ustaleń
      </footer>
    </div>
  );
}
