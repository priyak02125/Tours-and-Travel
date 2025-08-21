"use client";
import { useState } from "react";
import { Plane, Hotel, Briefcase } from "lucide-react";

const tabs = [
  { id: "flights", label: "Flights", icon: <Plane size={18} /> },
  { id: "hotels", label: "Hotels", icon: <Hotel size={18} /> },
  { id: "tours", label: "Tour Packages", icon: <Briefcase size={18} /> },
];

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <div className="font-kumbh-sans bg-gray-100 flex flex-col items-center pb-10 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide text-center mb-10">
        Book Your Trip
      </h1>

      {/* Tabs */}
      <div className="flex space-x-4 bg-white p-2 rounded-xl shadow-lg mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-2 rounded-lg transition-colors duration-300 ${
              activeTab === tab.id
                ? "bg-cyan-500 text-white font-semibold"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Booking Form */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        {activeTab === "flights" && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">From</label>
              <input
                type="text"
                placeholder="Enter city"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">To</label>
              <input
                type="text"
                placeholder="Enter city"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Date</label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Time</label>
              <input
                type="time"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Search Flights
            </button>
          </form>
        )}

        {activeTab === "hotels" && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter city or hotel name"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Check-in</label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Check-out</label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Search Hotels
            </button>
          </form>
        )}

        {activeTab === "tours" && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Destination</label>
              <input
                type="text"
                placeholder="Enter destination"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Search Packages
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
