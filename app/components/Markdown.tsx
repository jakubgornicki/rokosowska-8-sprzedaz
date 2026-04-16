// Lightweight markdown renderer for OLX.md descriptions.
// Supports: headings (ignored), paragraphs, bullet lists (-, –), **bold**, *italic*, >blockquote.

import React from "react";

function inline(text: string): (string | React.ReactElement)[] {
  const out: (string | React.ReactElement)[] = [];
  const pattern = /\*\*([^*]+?)\*\*|\*([^*]+?)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) out.push(<strong key={key++}>{m[1]}</strong>);
    else if (m[2] !== undefined) out.push(<em key={key++}>{m[2]}</em>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function Markdown({ source }: { source: string }) {
  if (!source) return null;
  const lines = source.split("\n");
  const blocks: React.ReactElement[] = [];
  let para: string[] = [];
  let list: string[] = [];
  let idx = 0;

  const flushPara = () => {
    if (para.length) {
      blocks.push(
        <p key={idx++} className="mb-3 text-slate-700 leading-relaxed">
          {inline(para.join(" "))}
        </p>,
      );
      para = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      blocks.push(
        <ul
          key={idx++}
          className="grid sm:grid-cols-2 gap-x-5 gap-y-1.5 mb-4 list-none"
        >
          {list.map((li, i) => (
            <li
              key={i}
              className="text-slate-700 text-sm pl-5 py-1 border-b border-slate-100 relative"
            >
              <span className="absolute left-0 text-emerald-600 font-bold text-xs">
                ✓
              </span>
              {inline(li)}
            </li>
          ))}
        </ul>,
      );
      list = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const stripped = line.trimStart();
    if (!stripped) {
      flushPara();
      flushList();
      continue;
    }
    if (stripped.startsWith("– ") || stripped.startsWith("- ")) {
      flushPara();
      list.push(stripped.slice(2).trim());
      continue;
    }
    if (stripped.startsWith("> ")) {
      flushPara();
      flushList();
      blocks.push(
        <blockquote
          key={idx++}
          className="bg-blue-50 border-l-4 border-blue-500 px-4 py-3 my-3 text-blue-900 text-sm rounded-r"
        >
          {inline(stripped.slice(2).trim())}
        </blockquote>,
      );
      continue;
    }
    flushList();
    para.push(stripped);
  }
  flushPara();
  flushList();

  return <>{blocks}</>;
}
