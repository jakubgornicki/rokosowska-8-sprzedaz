import Link from "next/link";
import type { OfferItem } from "@/data/offer";
import { formatPrice } from "@/app/lib/format";

export default function ItemCard({ item }: { item: OfferItem }) {
  const photo = item.photos[0];
  const isNew =
    /nowy|nieużywan/i.test(item.descriptionMd.slice(0, 300)) || false;

  return (
    <article
      className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-200 transition-all flex flex-col"
      data-search={`${item.name} ${item.slug} ${item.category}`.toLowerCase()}
    >
      <Link href={`/item/${item.slug}`} className="block relative aspect-[4/3] bg-slate-100 overflow-hidden">
        {photo ? (
          <img
            src={photo}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs uppercase tracking-wider">
            📷 zdjęcia wkrótce
          </div>
        )}
        <div className="absolute top-2 left-2 flex gap-1.5">
          {item.liveOnOlx && (
            <span className="text-[10px] font-bold bg-orange-500 text-white px-2 py-0.5 rounded tracking-wide">
              OLX
            </span>
          )}
          {item.qty > 1 && (
            <span className="text-[10px] font-bold bg-slate-900/90 text-white px-2 py-0.5 rounded">
              ×{item.qty}
            </span>
          )}
          {!item.liveOnOlx && item.qty === 1 && isNew && (
            <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded tracking-wide">
              NOWY
            </span>
          )}
        </div>
      </Link>
      <div className="p-3.5 flex-1 flex flex-col gap-1.5">
        <div className="text-sm font-semibold text-slate-900 leading-snug min-h-[40px]">
          {item.name}
        </div>
        <div className="mt-auto pt-2 flex justify-between items-end">
          <div>
            <div
              className="text-lg font-extrabold leading-tight"
              style={{ color: item.price === null ? "#94a3b8" : "#0d4f8b", fontVariantNumeric: "tabular-nums" }}
            >
              {formatPrice(item.price)}
            </div>
            {item.qty > 1 && (
              <div className="text-[10px] text-slate-500 -mt-0.5">/ szt.</div>
            )}
          </div>
          <span className="text-[11px] text-slate-500">{item.qty} szt.</span>
        </div>
      </div>
      <div className="flex gap-1.5 px-3.5 pb-3.5">
        <Link
          href={`/item/${item.slug}`}
          className="flex-1 text-center py-2 px-3 rounded-md text-xs font-semibold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
        >
          Zobacz szczegóły
        </Link>
        {item.olxUrl && (
          <a
            href={item.olxUrl}
            target="_blank"
            rel="noopener"
            className="py-2 px-3 rounded-md text-xs font-semibold border border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-colors"
          >
            OLX →
          </a>
        )}
      </div>
    </article>
  );
}
