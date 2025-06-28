import React from "react";
import { notFound } from "next/navigation";
import { destinations } from "../../../destinations";

type Props = {
  params: { slug: string };
};

export default function DestinationDetail({ params }: Props) {
  const dest = destinations.find(
    (destination) => destination.slug === params.slug
  );
  if (!dest) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <head>
        <title>{dest.Title}</title>
        <meta name="description" content={dest.Itinerary} />
        <meta
          name="keywords"
          content={`travel, trekking, ${dest.Base}, ${dest.Title}, ${dest.Duration}, ${dest.difficulty}, ${dest.altitude}`}
        />
        <meta property="og:title" content={dest.Title} />
        <meta property="og:description" content={dest.Itinerary} />
        <meta property="og:image" content={dest.trek_banner_image} />
      </head>
      <img
        src={dest.trek_banner_image}
        alt={dest.Title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{dest.Title}</h1>
      <p className="text-gray-700 mb-4">{dest.Itinerary}</p>
      <section aria-labelledby="trip-facts" className="mb-8">
        <h2 id="trip-facts" className="text-xl font-semibold mb-3">
          Trip Facts
        </h2>
        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-gray-100 rounded-lg p-4 text-sm">
          <div>
            <dt className="font-medium text-gray-600">Price</dt>
            <dd className="font-semibold text-gray-900" itemProp="price">
              {dest.Price}
            </dd>
          </div>
          <div>
            <dt className="font-medium text-gray-600">Base</dt>
            <dd className="font-semibold text-gray-900" itemProp="location">
              {dest.Base}
            </dd>
          </div>
          <div>
            <dt className="font-medium text-gray-600">Duration</dt>
            <dd className="font-semibold text-gray-900" itemProp="duration">
              {dest.Duration}
            </dd>
          </div>
          <div>
            <dt className="font-medium text-gray-600">Difficulty</dt>
            <dd className="font-semibold text-gray-900" itemProp="difficulty">
              {dest.difficulty}
            </dd>
          </div>
          <div>
            <dt className="font-medium text-gray-600">Altitude</dt>
            <dd className="font-semibold text-gray-900" itemProp="elevation">
              {dest.altitude}
            </dd>
          </div>
        </dl>
      </section>
      {dest.detailed_itinerary?.[0] && (
        <>
          <h2 className="text-xl font-semibold mb-2">Itinerary</h2>
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <ol className="space-y-3">
              {Object.entries(dest.detailed_itinerary?.[0]).map(
                ([day, { location, activity }], index) => {
                  return (
                    <li
                      key={day}
                      className="border-l-4 border-emerald-600 pl-4 py-2"
                    >
                      {dest.Photo_list?.[index] && (
                        <img
                          src={dest.Photo_list[index]}
                          alt="Section Divider"
                          className="rounded-lg shadow-lg w-full max-w-md object-cover"
                        />
                      )}
                      <span className="font-bold text-emerald-700">{day}:</span>
                      <span className="ml-2 font-semibold">{location}</span>
                      <div className="text-gray-600 text-sm">{activity}</div>
                    </li>
                  );
                }
              )}
            </ol>
          </div>
        </>
      )}
    </main>
  );
}
