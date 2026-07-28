function UrlForm({ url, setUrl, loading, error, onSubmit, latestShortUrl }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md">
      <div className="rounded-3xl border border-gray-200 bg-white p-6">
        <p className="mb-5 text-sm uppercase tracking-[0.28em] text-emerald-600">
          Paste your URL
        </p>

        <div className="space-y-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your URL........................"
            className="w-full rounded-3xl border border-gray-200 bg-gray-100 px-5 py-4 text-black placeholder:text-gray-500 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/30"
          />

          <button
            type="button"
            onClick={onSubmit}
            disabled={loading}
            className="w-full rounded-3xl bg-emerald-600 px-5 py-4 text-base font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {loading ? "Creating..." : "✨ Shorten URL"}
          </button>

          {error && (
            <p className="rounded-3xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          {latestShortUrl && (
            <div className="rounded-3xl border border-gray-200 bg-white p-4 text-black">
              <p className="text-sm font-semibold text-emerald-600">
                Short URL Created
              </p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={latestShortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all text-base font-medium text-black hover:text-emerald-600"
                >
                  {latestShortUrl}
                </a>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      navigator.clipboard.writeText(latestShortUrl)
                    }
                    className="rounded-3xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  >
                    📋 Copy
                  </button>
                  <a
                    href={latestShortUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-3xl border border-gray-200 px-4 py-3 text-sm font-semibold text-black transition hover:bg-gray-50"
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
