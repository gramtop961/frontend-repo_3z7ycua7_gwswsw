export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Coorg Mist Homestay. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-emerald-700">Amenities</a>
            <a href="#gallery" className="hover:text-emerald-700">Gallery</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
