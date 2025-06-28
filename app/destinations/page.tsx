import React from "react";
import Link from "next/link";
import { destinations } from "../../destinations";

export default function DestinationsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Destinations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((dest) => (
          <div
            key={dest.slug}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src={dest.trek_banner_image}
              alt={dest.Title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{dest.Title}</h2>
              <p className="text-gray-500 text-ellipsis line-clamp-3">
                {dest.Itinerary}
              </p>
              <Link
                href={`/destinations/${dest.slug}`}
                className="text-emerald-600 font-medium mt-2 block"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
