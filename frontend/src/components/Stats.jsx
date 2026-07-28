function Stats() {
  const stats = [
    { label: "URLs", value: "10K+" },
    { label: "Average", value: "50ms" },
    { label: "Coverage", value: "Global" },
  ];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 text-black">
      <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
        Quick Stats
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl bg-gray-50 p-4 text-center"
          >
            <p className="text-2xl font-semibold text-black">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
