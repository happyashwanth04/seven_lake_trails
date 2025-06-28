"use client";
import React from "react";
import Link from "next/link";
import { destinations } from "../destinations";

export default function HomePage() {
  return (
    <main className="bg-gray-50">
      <head>
        <title>
          Seven Lakes Trail Adventure | Best Kashmir Trekking & Family
          Expeditions
        </title>
        <meta
          name="description"
          content="Experience Kashmir's hidden gems with expert-guided treks to Sonamarg, Gangbal Lake & more. Family-friendly adventures, winter treks, and luxury camping in the Himalayas."
        />
        <meta
          name="keywords"
          content="Kashmir trekking, family adventures in Kashmir, Sonamarg trek, Gangbal Lake, winter expeditions, guided hikes, Himalayan camping"
        />

        <meta
          property="og:title"
          content="Seven Lakes Trail Adventure | Kashmir's Premier Trekking Company"
        />
        <meta
          property="og:description"
          content="Join us for unforgettable treks to Kashmir's alpine lakes, glaciers, and meadows. Safe, eco-friendly, and tailored for families/adventurers."
        />
        <meta property="og:image" content="images/logo.webp" />
        <meta property="og:url" content="https://sevenlakestrail.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Seven Lakes Trail Adventure | Best Treks in Kashmir"
        />
        <meta
          name="twitter:description"
          content="Expert-led expeditions to Kashmir's Great Lakes, Tarsar Marsar, and winter treks. Book your Himalayan adventure today!"
        />
        <meta name="twitter:image" content="images/logo.webp" />
      </head>
      <section className="hero bg-emerald-600 text-white py-16 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Explore Heaven On Earth With Us
        </h2>
        <p className="text-lg mb-8">Join us and discover Kashmir.</p>
        <Link
          href="/destinations"
          className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold"
        >
          Explore Destinations
        </Link>
      </section>
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Popular Destinations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map(
            (dest) =>
              dest.isPopular && (
                <div
                  key={dest.Title}
                  className="rounded-lg shadow bg-white overflow-hidden"
                >
                  <img
                    src={dest.trek_banner_image}
                    alt={dest.Title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2">{dest.Title}</h4>
                    <p className="text-gray-600 mb-4 text-ellipsis line-clamp-3">
                      {dest.Itinerary}
                    </p>
                    <Link
                      href={`/destinations/${dest.slug}`}
                      className="text-emerald-600 font-semibold hover:underline"
                    >
                      Get More Info
                    </Link>
                  </div>
                </div>
              )
          )}
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto px-3 py-12 flex flex-col md:flex-row items-center gap-6">
        {/* Points on Left */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Why Choose Us?
          </h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold text-lg">
                1
              </span>
              <div>
                <span className="font-semibold text-gray-700">
                  Best Guide Guarentee
                </span>
                <p className="text-gray-600 text-sm">
                  Team of certified Mountaineers who have done many successful
                  expeditions
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold text-lg">
                2
              </span>
              <div>
                <span className="font-semibold text-gray-700">
                  Expert Travel Support
                </span>
                <p className="text-gray-600 text-sm">
                  Local guides who know the in and outs of the terrain
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold text-lg">
                3
              </span>
              <div>
                <span className="font-semibold text-gray-700">
                  Curated Experiences
                </span>
                <p className="text-gray-600 text-sm">
                  Safety oriented team who have been in many rescue operations
                  in the past{" "}
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold text-lg">
                4
              </span>
              <div>
                <span className="font-semibold text-gray-700">
                  Experience and Wisdom
                </span>
                <p className="text-gray-600 text-sm">
                  Experienced Team of professional staff
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Image on Right */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/about_us_image.webp"
            alt="Why Choose Us"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>
    </main>
  );
}
