import { MapPin, Star, Calendar } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-emerald-700 ring-1 ring-emerald-200 backdrop-blur">
              <Star className="h-4 w-4 fill-emerald-500/20 text-emerald-600" />
              <span>Coorg’s cozy escape</span>
            </div>
            <h1 className="mt-4 font-manrope text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Coorg Mist Homestay
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              Wake up to coffee-scented hills, misty mornings, and the warmth of
              a true Kodava home. Perfect for families, friends, and nature
              lovers seeking peace in the Western Ghats.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-emerald-700"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Check Availability
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-lg border border-emerald-200 bg-white px-5 py-3 font-medium text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                View Gallery
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <span>Madikeri, Coorg • Karnataka</span>
              </div>
              <span className="hidden h-1 w-1 rounded-full bg-gray-300 md:inline-block" />
              <span className="hidden md:inline">Private rooms • Estate views • Home-cooked meals</span>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <Spline
                scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
