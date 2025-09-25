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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">KapKup</h2>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              The right place for the best deals and discount coupons. A platform that benefits both businesses and customers.
            </p>
            <div className="flex space-x-4 mt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-500 hover:text-rose-500 transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin className="text-gray-500" />
                Kozyatağı Mah. Değirmen Sok. No:18, 34742 Istanbul
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-gray-500" />
                +90 212 123 45 67
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-gray-500" />
                info@kapkup.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to stay updated with the latest campaigns and deals.
            </p>
            <div className="flex rounded-md overflow-hidden border border-gray-200 shadow-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
              />
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 flex items-center justify-center transition-transform duration-200 hover:scale-105">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} KapKup. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-gray-500 hover:text-rose-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}