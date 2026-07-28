import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import URLForm from "./components/URLForm";
import RecentUrls from "./components/RecentUrls";
import api from "./services/api";

const initialRecentUrls = [
  {
    id: 1,
    original_url: "https://google.com",
    short_code: "abc123",
    clicks: 12,
  },
  {
    id: 2,
    original_url: "https://github.com",
    short_code: "xyz789",
    clicks: 45,
  },
];

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [recentUrls, setRecentUrls] = useState(initialRecentUrls);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const latestShortUrl = result
    ? `${api.defaults.baseURL}/${result.short_code}`
    : null;

  const copyToClipboard = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      alert("Copied to clipboard!");
    } catch (copyError) {
      console.error(copyError);
      alert("Unable to copy. Please try again.");
    }
  };

  const handleSubmit = async () => {
    if (!url.trim()) {
      setError("Please enter a URL");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await api.post("/shorten", { url });
      const data = response.data;

      setResult(data);
      setUrl("");
      setRecentUrls((prev) =>
        [
          {
            id: Date.now(),
            original_url: data.original_url,
            short_code: data.short_code,
            clicks: data.clicks ?? 0,
          },
          ...prev,
        ].slice(0, 6),
      );
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.detail || "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <Navbar />

        <section className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">
          <div className="space-y-8 rounded-[32px] border border-gray-200 bg-white p-8 shadow-md">
            <Hero />
            <URLForm
              url={url}
              setUrl={setUrl}
              loading={loading}
              error={error}
              onSubmit={handleSubmit}
              latestShortUrl={latestShortUrl}
            />
          </div>

          <div className="space-y-6 rounded-[32px] border border-gray-200 bg-white p-8 shadow-md">
            <Stats />
            <RecentUrls recentUrls={recentUrls} onCopy={copyToClipboard} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
