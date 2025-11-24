import imgPayWithQr from "figma:asset/1598191ee7cf043484952d74c8b13ffa7f08ed65.png";
import imgTerminalIcon from "figma:asset/d746df349f2ec9976b6858246d97561a1c0cdcfd.png";
import imgCreditsIcon from "figma:asset/4d7768993fbc281cd9ff2f1dfd967e40048ea7d5.png";

export function TodapaySection() {
  return (
    <section className="relative py-32 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 mb-20">
          <div className="inline-block">
            <div className="px-6 py-2 rounded-full border border-purple-400/20 bg-purple-400/5">
              <span className="text-purple-300/80 text-sm tracking-[0.2em] uppercase">Our Innovation</span>
            </div>
          </div>
          
          <h2 className="text-white/90 text-center max-w-3xl tracking-wide">
            TODAPAY
          </h2>
          
          <p className="text-purple-200/60 text-center max-w-2xl tracking-wide">
            A smart, cashless and digital innovation for a service that grew from a historic & cultural tradition
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-white/80 tracking-wider">What Makes It Different</h3>
              <p className="text-white/50 leading-relaxed">
                TODAPAY differentiates itself as the first localized digital fare and terminal management app built specifically for tricycles.
              </p>
              <p className="text-white/50 leading-relaxed">
                Unlike generic e-wallets, it integrates route tracking, fare monitoring, and passenger-driver communication, creating a safer and more transparent commuting experience.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-lg bg-purple-500/10 border border-purple-400/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="size-2 rounded-full bg-purple-400" />
                </div>
                <div>
                  <h4 className="text-white/70 mb-1">Route Tracking</h4>
                  <p className="text-white/40 text-sm">Real-time location monitoring for safer rides</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-10 rounded-lg bg-purple-500/10 border border-purple-400/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="size-2 rounded-full bg-purple-400" />
                </div>
                <div>
                  <h4 className="text-white/70 mb-1">Fare Monitoring</h4>
                  <p className="text-white/40 text-sm">Transparent pricing and digital payments</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-10 rounded-lg bg-purple-500/10 border border-purple-400/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="size-2 rounded-full bg-purple-400" />
                </div>
                <div>
                  <h4 className="text-white/70 mb-1">Terminal Locator</h4>
                  <p className="text-white/40 text-sm">Find nearby terminals instantly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - App Preview */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />
            
            {/* Phone mockup container */}
            <div className="relative mx-auto" style={{ maxWidth: '320px' }}>
              {/* Phone frame */}
              <div className="relative bg-gradient-to-b from-[#785b8d] to-[#56346f] rounded-[38px] p-1 shadow-2xl">
                <div className="bg-white rounded-[34px] overflow-hidden">
                  {/* App Screenshot */}
                  <div className="relative bg-gradient-to-b from-purple-50 to-white">
                    {/* Header */}
                    <div className="bg-[#785b8d] h-[85px] flex items-center justify-center relative">
                      <p className="text-white text-center tracking-wider">TODAPAY</p>
                    </div>
                    
                    {/* Main Content */}
                    <div className="p-6 space-y-4">
                      {/* QR Code Section */}
                      <div className="flex flex-col items-center py-8">
                        <div className="size-[140px] rounded-[30px] border-4 border-[#56346f] overflow-hidden mb-4">
                          <img 
                            src={imgPayWithQr} 
                            alt="QR Code" 
                            className="size-full object-cover mix-blend-screen"
                            style={{ filter: 'hue-rotate(-10deg)' }}
                          />
                        </div>
                        <p className="text-[#56346f] tracking-wide">PAY FARE</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <button className="w-full bg-white border-2 border-[#56346f] rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm hover:bg-purple-50 transition-colors">
                          <div className="size-10 rounded-full border-2 border-[#56346f] flex items-center justify-center">
                            <img src={imgTerminalIcon} alt="" className="size-6 object-cover mix-blend-screen" />
                          </div>
                          <span className="text-[#56346f] text-sm">TERMINAL LOCATOR</span>
                        </button>

                        <button className="w-full bg-white border-2 border-[#56346f] rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm hover:bg-purple-50 transition-colors">
                          <div className="size-10 rounded-full border-2 border-[#56346f] flex items-center justify-center">
                            <img src={imgCreditsIcon} alt="" className="size-6 object-contain mix-blend-screen" />
                          </div>
                          <span className="text-[#56346f] text-sm">LOAD CREDITS</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 size-2 rounded-full bg-purple-400/30 animate-pulse" />
      <div className="absolute bottom-1/4 right-20 size-2 rounded-full bg-purple-400/30 animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}
