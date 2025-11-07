import { Home, Coffee, Trees, Wifi } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Comfortable Stay",
    desc: "Spacious rooms with cozy interiors, views of plantations, and modern amenities.",
  },
  {
    icon: Coffee,
    title: "Estate Experience",
    desc: "Wake up to aroma of freshly brewed Coorg coffee and explore nearby estates.",
  },
  {
    icon: Trees,
    title: "Nature Trails",
    desc: "Guided walks to waterfalls, viewpoints, and hidden forest paths.",
  },
  {
    icon: Wifi,
    title: "Stay Connected",
    desc: "High-speed Wi‑Fi for remote work or catching up with loved ones.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            What makes it special
          </h2>
          <p className="mt-3 text-gray-600">
            Thoughtful comforts and local experiences crafted to make your stay memorable.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6 transition hover:bg-white hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
