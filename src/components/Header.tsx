export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full border border-purple-400/30 flex items-center justify-center">
            <div className="size-2 rounded-full bg-purple-400" />
          </div>
          <span className="text-white/90 tracking-wider">KYO</span>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#about" className="text-white/60 hover:text-white/90 transition-colors text-sm tracking-wide">
            About
          </a>
          <a href="#contact" className="text-white/60 hover:text-white/90 transition-colors text-sm tracking-wide">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
