function RecentUrls({ recentUrls, onCopy }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 text-black">
      <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
        Recent URLs
      </p>
      <div className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white text-sm">
        <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-4 border-b border-gray-200 bg-gray-50 px-4 py-3 text-gray-600">
          <span>Original URL</span>
          <span>Short URL</span>
          <span>Clicks</span>
          <span className="text-right">Copy</span>
        </div>

        <div>
          {recentUrls.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[2fr_1fr_1fr_auto] gap-4 border-t border-gray-100 px-4 py-4 text-sm text-black sm:text-base"
            >
              <div className="break-all">{item.original_url}</div>
              <div className="break-all text-emerald-600">
                {item.short_code}
              </div>
              <div>{item.clicks}</div>
              <div className="text-right">
                <button
                  type="button"
                  onClick={() =>
                    onCopy(`http://127.0.0.1:8000/urls/${item.short_code}`)
                  }
                  className="rounded-2xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
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
