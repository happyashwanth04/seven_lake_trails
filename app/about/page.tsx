import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-emerald-800 mb-6">
          Welcome to Seven Lakes Trail Adventure
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Your gateway to the breathtaking landscapes and thrilling expeditions
          of Kashmir! Born from a deep love for the Himalayas, we specialize in
          crafting unforgettable adventures—from serene family vacations to
          challenging treks across Kashmir's hidden gems.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-emerald-600">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Why Explore With Us?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-emerald-600 mt-1 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  <strong>Local Expertise:</strong> Certified guides born and
                  raised in Kashmir
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-emerald-600 mt-1 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  <strong>For All Adventurers:</strong> Tailored trips for
                  families and solo explorers
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-emerald-600 mt-1 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  <strong>Safety First:</strong> Top-notch gear and emergency
                  protocols
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-emerald-600 mt-1 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  <strong>Eco-Conscious:</strong> Follow Leave No Trace
                  principles
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-sky-600">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Founded in 2015 by mountaineer Muzaffar Ahmed Lone, Seven Lakes
              Trail Adventure began with a mission:{" "}
              <strong>to share Kashmir's magic responsibly</strong>.
            </p>
            <p className="text-gray-700">
              Named after the iconic Satsar Lakes trek, we've guided thousands
              to alpine meadows, glacial lakes, and cozy homestays while
              fostering connections with local communities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-700 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Ready for Your Kashmir Adventure?
        </h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Join us to write your own story where every trail reveals Kashmir's
          untouched beauty.
        </p>
        <Link
          href="/destinations"
          className="inline-block bg-white text-emerald-800 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Browse Our Treks
        </Link>
      </section>
    </main>
  );
}
