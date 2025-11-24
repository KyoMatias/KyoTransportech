export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm tracking-wide">
            © 2024 Kyo Commutech. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-white/40 hover:text-purple-400 transition-colors text-sm tracking-wide"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-white/40 hover:text-purple-400 transition-colors text-sm tracking-wide"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-white/40 hover:text-purple-400 transition-colors text-sm tracking-wide"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
