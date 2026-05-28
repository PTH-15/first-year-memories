const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider text-violet-400">
          First Year
        </h1>

        <div className="flex gap-6 text-sm md:text-base text-gray-300">
          <a href="#home" className="hover:text-violet-400 transition">
            Home
          </a>

          <a href="#memories" className="hover:text-violet-400 transition">
            Memories
          </a>

          <a href="#quote" className="hover:text-violet-400 transition">
            Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;