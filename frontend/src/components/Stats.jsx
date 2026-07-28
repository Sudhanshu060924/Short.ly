function Stats() {
  const stats = [
    { label: "URLs", value: "10K+" },
    { label: "Average", value: "50ms" },
    { label: "Coverage", value: "Global" },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-100">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">
        Quick Stats
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl bg-white/5 p-4 text-center"
          >
            <p className="text-2xl font-semibold text-white">{stat.value}</p>
            <p className="text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
