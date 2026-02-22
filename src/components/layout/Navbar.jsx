import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#1a1a2e] via-[#111827] to-[#1a1a2e] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center text-black font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,170,0,0.8)] active:scale-95">
          ✨
        </div>

        <Button variant="navbar">
          Get Started
        </Button>

      </div>
    </nav>
  );
}