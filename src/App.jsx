import Navbar from "./components/layout/Navbar";
import BackgroundGlow from "./components/layout/BackgroundGlow";
import Hero from "./components/sections/Hero";
import PlatformSection from "./components/sections/PlatformSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import JoinSection from "./components/sections/JoinSection";
import FinalCTA from "./components/sections/FinalCTA";

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-[#05060F]">
      <BackgroundGlow />
      <Navbar />
      <Hero />
      <PlatformSection />
      <FeaturesSection />
      <JoinSection />
      <FinalCTA />
    </div>
  );
}

export default App;