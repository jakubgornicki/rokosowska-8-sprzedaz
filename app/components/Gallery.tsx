"use client";

import { useState, useEffect } from "react";

export default function Gallery({
  photos,
  alt,
}: {
  photos: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") setActive((a) => (a + 1) % photos.length);
      if (e.key === "ArrowLeft")
        setActive((a) => (a - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, photos.length]);

  if (photos.length === 0) {
    return (
      <div className="bg-slate-900 rounded-lg p-6 flex items-center justify-center h-[460px] text-slate-400 text-sm tracking-wider uppercase">
        📷 Zdjęcia w przygotowaniu
      </div>
    );
  }

  return (
    <>
      <div className="bg-slate-900 rounded-lg p-6">
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="block w-full h-[460px] overflow-hidden rounded-lg bg-black cursor-zoom-in"
        >
          <img
            src={photos[active]}
            alt={alt}
            className="w-full h-full object-contain"
            loading="eager"
          />
        </button>
        {photos.length > 1 && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {photos.map((p, i) => (
              <button
                key={p}
                type="button"
                onClick={() => setActive(i)}
                className={`w-[70px] h-[70px] rounded border-2 overflow-hidden transition-opacity ${
                  i === active
                    ? "border-blue-500 opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={p}
                  alt={`${alt} ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center cursor-zoom-out"
          onClick={() => setLightbox(false)}
        >
          <img
            src={photos[active]}
            alt={alt}
            className="max-w-[92vw] max-h-[92vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((a) => (a - 1 + photos.length) % photos.length);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((a) => (a + 1) % photos.length);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center"
              >
                ›
              </button>
              <div className="absolute bottom-6 text-white/80 text-sm">
                {active + 1} / {photos.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
