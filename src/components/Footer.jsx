import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full bg-white text-gray-600 border-t border-gray-200 py-6 font-geist-sans">
      <div className="max-w-screen-2xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social Media Links */}
          <Link
            href="#"
            aria-label="Twitter"
            className="hover:text-gray-900 transition-colors duration-300"
          >
            <Twitter size={24} />
          </Link>
          <Link
            href="#"
            aria-label="Facebook"
            className="hover:text-gray-900 transition-colors duration-300"
          >
            <Facebook size={24} />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="hover:text-gray-900 transition-colors duration-300"
          >
            <Instagram size={24} />
          </Link>
        </div>
        <p className="text-sm">
          &copy; 2025 Tours & Travel. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
