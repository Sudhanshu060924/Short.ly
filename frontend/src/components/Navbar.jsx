function Navbar() {
  return (
    <header className="mb-8 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl shadow-xl shadow-black/20">
      <div>
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">
          🔗 Short.ly
        </p>
      </div>

      <div className="flex items-center gap-3 text-sm text-slate-200 sm:gap-5">
        <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">
          Login
        </button>
        <button className="rounded-full bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">
          Signup
        </button>
      </div>
    </header>
  );
}

export default Navbar;
