function Navbar() {
  return (
    <header className="mb-8 flex items-center justify-between rounded-3xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
      <div>
        <p className="text-sm uppercase tracking-[0.32em] text-emerald-600">
          🔗 Short.ly
        </p>
      </div>

      <div className="flex items-center gap-3 text-sm text-black sm:gap-5">
        <button className="rounded-full border border-gray-300 bg-transparent px-4 py-2 text-black transition hover:bg-gray-100">
          Login
        </button>
        <button className="rounded-full bg-emerald-600 px-4 py-2 font-semibold text-white transition hover:bg-emerald-500">
          Signup
        </button>
      </div>
    </header>
  );
}

export default Navbar;
