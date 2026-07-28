import React from "react";

import React from "react";

function URLResult({ originalUrl, shortCode, clicks, onCopy }) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-4 border-t border-gray-100 px-4 py-4 text-sm text-black sm:text-base">
      <div className="break-all">{originalUrl}</div>
      <div className="break-all text-emerald-600">{shortCode}</div>
      <div>{clicks}</div>
      <div className="text-right">
        <button
          type="button"
          onClick={() => onCopy(shortCode)}
          className="rounded-2xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
        >
          📋
        </button>
      </div>
    </div>
  );
}

export default URLResult;
