import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-manrope text-xl font-extrabold text-emerald-700">
            Coorg Mist
          </a>
          <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
            <a href="#features" className="hover:text-emerald-700">Amenities</a>
            <a href="#gallery" className="hover:text-emerald-700">Gallery</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 md:inline-block"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
