"use client";
import { useState, type ReactNode } from "react";
import { inspector } from "@/data/content";

const re = /(\/\/.*$)|("(?:[^"\\]|\\.)*")|\b(import|from|export|function|return|type|const|switch|case|async|await)\b|\b([A-Z][A-Za-z]+)\b/g;

function highlight(line: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of line.matchAll(re)) {
    const i = m.index ?? 0;
    if (i > last) out.push(line.slice(last, i));
    const cls = m[1] ? "text-[#7683a3]" : m[2] ? "text-[#9fe3b0]" : m[3] ? "text-[#9db4ff]" : "text-[#f5c987]";
    out.push(<span key={i} className={cls}>{m[0]}</span>);
    last = i + m[0].length;
  }
  out.push(line.slice(last));
  return out;
}

export default function Inspector() {
  const { files, hotspots, rows, title } = inspector;
  const [file, setFile] = useState(0);
  const [range, setRange] = useState<[number, number]>(hotspots[0].lines);
  const [spot, setSpot] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [copied, setCopied] = useState("Copy");

  const pick = (i: number) => { setSpot(i); setFile(hotspots[i].file); setRange(hotspots[i].lines); };
  const copy = async () => {
    try { await navigator.clipboard.writeText(files[file].code); setCopied("Copied"); } catch { setCopied("Copy failed"); }
    setTimeout(() => setCopied("Copy"), 1500);
  };
  const hot = (i: number) =>
    `relative mb-2 block w-full rounded-lg border-[1.5px] border-dashed p-1.5 text-left hover:border-accent hover:bg-hl focus-visible:border-accent focus-visible:bg-hl ${spot === i ? "border-accent bg-hl" : "border-transparent"}`;
  const tag = "absolute right-1.5 top-0.5 text-[11px] text-accent";
  const seg = (on: boolean) => `min-h-11 rounded-lg border px-3 text-sm ${on ? "border-line bg-bg text-ink" : "border-transparent text-muted"}`;
  const bind = (i: number) => ({ onMouseEnter: () => pick(i), onFocus: () => pick(i), onClick: () => pick(i) });

  return (
    <div className="mt-8 grid overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-[1.05fr_1fr]">
      <div>
        <div className="flex flex-wrap items-center gap-2 border-b border-line px-3 py-2">
          <b>{title}</b>
          <div className="flex gap-1" role="group" aria-label="Preview size">
            <button type="button" aria-pressed={!mobile} className={seg(!mobile)} onClick={() => setMobile(false)}>Desktop</button>
            <button type="button" aria-pressed={mobile} className={seg(mobile)} onClick={() => setMobile(true)}>Mobile</button>
          </div>
        </div>
        <div className="flex min-h-[320px] justify-center bg-bg p-5">
          <div className={`h-fit w-full rounded-[10px] border border-line bg-surface p-4 text-sm transition-[max-width] duration-300 ${mobile ? "max-w-[260px]" : "max-w-[560px]"}`}>
            <button type="button" className={hot(0)} {...bind(0)}>
              <small className={tag}>{files[hotspots[0].file].name}</small><b>Orders</b> <span className="text-muted">· last 30 days</span>
            </button>
            <button type="button" className={hot(1)} {...bind(1)}>
              <small className={tag}>{files[hotspots[1].file].name}</small>
              {rows.map((r) => (
                <span key={r.who} className="flex justify-between gap-2 rounded-md px-2 py-2 even:bg-bg">
                  <span>{r.who}</span><span className="self-center rounded-full bg-hl px-2 text-xs">{r.status}</span>
                </span>
              ))}
            </button>
            <button type="button" className={hot(2)} {...bind(2)}>
              <small className={tag}>{files[hotspots[2].file].name}</small><span className="text-muted">Manager role only · 50 per page</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex min-w-0 flex-col bg-[#141a2a] text-[#d8e0f5]">
        <div className="flex flex-wrap items-center gap-1 border-b border-[#273049] px-3 py-2">
          <div role="tablist" aria-label="Source files" className="flex flex-wrap gap-1">
            {files.map((f, i) => (
              <button key={f.name} type="button" role="tab" aria-selected={file === i}
                onClick={() => { setFile(i); setRange([0, 0]); }}
                className={`min-h-11 rounded-lg border px-3 font-mono text-xs ${file === i ? "border-[#33406a] bg-[#1f2740] text-white" : "border-transparent text-[#8f9bbd]"}`}>{f.name}</button>
            ))}
          </div>
          <button type="button" onClick={copy} className="ml-auto min-h-11 rounded-lg border border-[#33406a] px-3 text-sm text-[#cfd7f2]">{copied}</button>
        </div>
        <pre className="flex-1 overflow-x-auto py-4 font-mono text-[13px] leading-[1.7]">
          <code className="block min-w-max">
            {files[file].code.split("\n").map((line, i) => {
              const n = i + 1;
              const on = n >= range[0] && n <= range[1];
              return <span key={i} className={`block border-l-[3px] px-4 ${on ? "border-[#9db4ff] bg-[rgba(120,150,255,.22)]" : "border-transparent"}`}>{highlight(line)}{line === "" && " "}</span>;
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}
