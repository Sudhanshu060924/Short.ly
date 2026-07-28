import React from "react";

function URLResult({ originalUrl, shortCode, clicks, onCopy }) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-4 border-t border-white/10 px-4 py-4 text-sm text-slate-200 sm:text-base">
      <div className="break-all">{originalUrl}</div>
      <div className="break-all text-cyan-300">{shortCode}</div>
      <div>{clicks}</div>
      <div className="text-right">
        <button
          type="button"
          onClick={() => onCopy(shortCode)}
          className="rounded-2xl bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          📋
        </button>
      </div>
    </div>
  );
}

export default URLResult;
