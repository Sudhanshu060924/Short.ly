function UrlForm({ url, setUrl, loading, error, onSubmit, latestShortUrl }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-inner shadow-black/10">
        <p className="mb-5 text-sm uppercase tracking-[0.28em] text-cyan-300/80">
          Paste your URL
        </p>

        <div className="space-y-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your URL........................"
            className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />

          <button
            type="button"
            onClick={onSubmit}
            disabled={loading}
            className="w-full rounded-3xl bg-cyan-500 px-5 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:bg-slate-700"
          >
            {loading ? "Creating..." : "✨ Shorten URL"}
          </button>

          {error && (
            <p className="rounded-3xl bg-red-500/20 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          )}

          {latestShortUrl && (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-slate-100">
              <p className="text-sm font-semibold text-cyan-300">
                Short URL Created
              </p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={latestShortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all text-base font-medium text-white hover:text-cyan-300"
                >
                  {latestShortUrl}
                </a>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      navigator.clipboard.writeText(latestShortUrl)
                    }
                    className="rounded-3xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                  >
                    📋 Copy
                  </button>
                  <a
                    href={latestShortUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-3xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
                  >
                    🌍 Open
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UrlForm;
