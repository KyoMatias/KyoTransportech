import { Header, Hero, TodapaySection, Footer } from "./components";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Video Background Container - User can add video here */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        {/* Placeholder for video background */}
        <div className="size-full bg-[#1a1a1a]" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <Hero />
        <TodapaySection />
        <Footer />
      </div>
    </div>
  );
}