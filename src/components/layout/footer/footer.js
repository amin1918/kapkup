"use client";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">KapKup</h2>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              The right place for the best deals and discount coupons.  
              A platform that benefits both businesses and customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-rose-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-rose-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-rose-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-rose-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-rose-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gray-500" />
                Kozyatağı Mah. Değirmen Sok. No:18, 34742 Istanbul
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-500" /> +90 212 123 45 67
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-500" /> info@kapkup.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to stay updated with the latest campaigns and deals.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border rounded-l-md px-3 py-2 text-sm focus:outline-none"
              />
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-3 rounded-r-md">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} KapKup. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs mt-3 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-rose-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-rose-600">
              Terms of Use
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-rose-600">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
