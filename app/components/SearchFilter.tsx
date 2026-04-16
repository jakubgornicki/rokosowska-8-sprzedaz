"use client";

import { useState, useEffect } from "react";

export default function SearchFilter({ totalItems }: { totalItems: number }) {
  const [q, setQ] = useState("");

  useEffect(() => {
    const query = q.trim().toLowerCase();
    const cards = document.querySelectorAll<HTMLElement>("[data-search]");
    cards.forEach((c) => {
      const t = (c.dataset.search || "").toLowerCase();
      c.style.display = !query || t.includes(query) ? "" : "none";
    });
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    sections.forEach((s) => {
      const anyVisible = Array.from(s.querySelectorAll<HTMLElement>("[data-search]")).some(
        (c) => c.style.display !== "none",
      );
      s.style.display = anyVisible ? "" : "none";
    });
  }, [q]);

  return (
    <div className="bg-white p-3 rounded-lg shadow-sm flex gap-2 items-center flex-wrap">
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Szukaj pozycji… (np. Sony, HDMI, krzesło, Focal)"
        className="flex-1 min-w-[220px] px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="text-[11px] text-slate-500">
        {totalItems} pozycji
      </span>
    </div>
  );
}
