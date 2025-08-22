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
      <h1 className="font-kumbh-sans text-4xl font-extrabold text-gray-900 tracking-wide text-center py-8">
        Book Your Trip
      </h1>

      {/* Tabs */}
      <div className="font-kumbh-sans flex space-x-4 bg-white p-2 rounded-xl shadow-lg mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`font-kumbh-sans flex items-center space-x-2 px-6 py-2 rounded-lg transition-colors duration-300 ${
              activeTab === tab.id
                ? "bg-cyan-500 text-white font-semibold"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.icon}
            <span className="font-kumbh-sans">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Booking Form */}
      <div className="font-kumbh-sans bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        {/* Flights Form */}
        {activeTab === "flights" && (
          <form className="font-kumbh-sans grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                From
              </label>
              <input
                type="text"
                placeholder="Enter city"
                className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                To
              </label>
              <input
                type="text"
                placeholder="Enter city"
                className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Departure Date
              </label>
              <input
                type="date"
                className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Return Date
              </label>
              <input
                type="date"
                className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Passengers
              </label>
              <input
                type="number"
                placeholder="Number of travellers"
                min="1"
                className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Class
              </label>
              <select className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>

            <button
              type="submit"
              className="font-kumbh-sans col-span-1 md:col-span-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Search Flights
            </button>
          </form>
        )}

        {/* Hotels Form */}
        {activeTab === "hotels" && (
          <form className="font-kumbh-sans grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="font-kumbh-sans md:col-span-2">
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter city or hotel name"
                className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Check-in
              </label>
              <input
                type="date"
                className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Check-out
              </label>
              <input
                type="date"
                className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Guests
              </label>
              <input
                type="number"
                placeholder="Number of persons"
                min="1"
                className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Rooms
              </label>
              <input
                type="number"
                placeholder="Number of rooms"
                min="1"
                className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="font-kumbh-sans md:col-span-2">
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Room Type
              </label>
              <select className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>Single</option>
                <option>Double</option>
                <option>Suite</option>
                <option>Deluxe</option>
              </select>
            </div>

            <button
              type="submit"
              className="font-kumbh-sans cursor-pointer col-span-1 md:col-span-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Search Hotels
            </button>
          </form>
        )}

        {/* Tours Form */}
        {activeTab === "tours" && (
          <form className="font-kumbh-sans grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="font-kumbh-sans md:col-span-2">
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Destination
              </label>
              <input
                type="text"
                placeholder="Enter destination"
                className="font-kumbh-sans cursor-pointer w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                className="font-kumbh-sans  w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                className="font-kumbh-sans cursor-pointer w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="font-kumbh-sans md:col-span-2">
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Guests
              </label>
              <input
                type="number"
                placeholder="Number of guests"
                min="1"
                className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Filters */}
            <div className="font-kumbh-sans md:col-span-2">
              <label className="font-kumbh-sans block text-gray-700 mb-2">
                Filters
              </label>
              <select className="font-kumbh-sans w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>Budget Friendly</option>
                <option>Luxury</option>
                <option>International Destination</option>
                <option>Family Packages</option>
                <option>Honeymoon</option>
              </select>
            </div>

            <button
              type="submit"
              className="font-kumbh-sans cursor-pointer col-span-1 md:col-span-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Search Packages
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
