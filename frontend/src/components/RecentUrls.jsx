function RecentUrls({ recentUrls, onCopy }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-100">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">
        Recent URLs
      </p>
      <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 text-sm">
        <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-4 border-b border-white/10 bg-slate-950/90 px-4 py-3 text-slate-400">
          <span>Original URL</span>
          <span>Short URL</span>
          <span>Clicks</span>
          <span className="text-right">Copy</span>
        </div>

        <div>
          {recentUrls.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[2fr_1fr_1fr_auto] gap-4 border-t border-white/10 px-4 py-4 text-sm text-slate-200 sm:text-base"
            >
              <div className="break-all">{item.original_url}</div>
              <div className="break-all text-cyan-300">{item.short_code}</div>
              <div>{item.clicks}</div>
              <div className="text-right">
                <button
                  type="button"
                  onClick={() =>
                    onCopy(`http://127.0.0.1:8000/urls/${item.short_code}`)
                  }
                  className="rounded-2xl bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  📋
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentUrls;
