import { Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Plan your getaway
          </h2>
          <p className="mt-3 text-gray-600">
            Tell us your dates and group size. We’ll get back with availability and the best offers.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-8 md:grid-cols-5">
          <form onSubmit={onSubmit} className="md:col-span-3 space-y-4 rounded-2xl border border-gray-200 p-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                placeholder="Dates, number of guests, special requests..."
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-emerald-700"
            >
              Send Inquiry
            </button>
            {submitted && (
              <p className="text-sm text-emerald-700">Thanks! We’ll be in touch shortly.</p>
            )}
          </form>

          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="font-semibold text-gray-900">Contact</h3>
              <div className="mt-4 space-y-3 text-gray-700">
                <a href="tel:+919999999999" className="flex items-center gap-3 hover:text-emerald-700">
                  <Phone className="h-5 w-5 text-emerald-600" /> +91 99999 99999
                </a>
                <a href="mailto:stay@coorgmist.com" className="flex items-center gap-3 hover:text-emerald-700">
                  <Mail className="h-5 w-5 text-emerald-600" /> stay@coorgmist.com
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-100 p-6">
              <h3 className="font-semibold text-gray-900">Getting here</h3>
              <p className="mt-2 text-sm text-gray-600">
                We’re located near Madikeri town, easy access by road from Mysuru & Bengaluru.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-emerald-700 underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
