export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493815793585-d94ccbc86df8?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="bg-emerald-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Sneak peek into the stay
          </h2>
          <p className="mt-3 text-gray-600">A glimpse of cozy corners and lush surroundings.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((src, i) => (
            <div key={i} className="group aspect-square overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Homestay view ${i + 1}`}
                className="h-full w-full transform object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
