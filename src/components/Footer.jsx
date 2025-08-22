import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 border-t border-gray-300 py-10 font-geist-sans">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tours & Travel</h3>
            <p className="text-sm">
              Explore the world with us. Discover breathtaking destinations,
              affordable packages, and unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-blue-600">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-blue-600">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Saket, Delhi, India</li>
              <li>📧 info@toursandtravel.com</li>
              <li>📞 +91 00000 00000</li>
              <li>
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  View on Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-3">
              Subscribe to get latest offers & updates.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-2 sm:items-stretch">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-cyan-500 text-white px-4 py-2 mt-2 sm:mt-0 sm:rounded-r-md rounded-md hover:bg-cyan-600 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-sm border-t border-gray-300 pt-6">
          <p>
            &copy; {new Date().getFullYear()} Tours & Travel. All Rights
            Reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" aria-label="Twitter" className="hover:text-blue-500">
              <Twitter size={22} />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-700"
            >
              <Facebook size={22} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <Instagram size={22} />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-red-600">
              <Youtube size={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
