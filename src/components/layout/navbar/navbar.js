"use client";
import { FiShoppingBag, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import Container from "../container/container";
import Link from "next/link";
import { useUser } from "@/stores/useUser";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {isAuthed} = useUser()
  

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white border border-stone-200">
      <Container className="flex items-center justify-between py-2">
        {/* Logo */}
        <Link href={"/"} className="font-bold text-lg mr-4">
          KapKup
        </Link>

        {/* Select City */}
        <select
          defaultValue="istanbul"
          className="md:w-1/5 shadow rounded-md px-2 py-1 text-sm bg-stone-50 focus:outline-none"
        >
          <option value="istanbul">İstanbul</option>
          <option value="ankara">Ankara</option>
          <option value="izmir">İzmir</option>
        </select>

        {/* Search */}
        <div className="hidden md:flex relative flex-1 max-w-md mx-4">
          <input
            placeholder="Restaurant, kuponlar, kategori ara..."
            className="w-full bg-stone-100 rounded-lg h-9 pl-8 text-sm outline-none"
          />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-500">
            <FiSearch size={16} />
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {isAuthed? 
           <Link

            href="/cart"
            className="p-1 rounded-md hover:bg-stone-100 flex items-center justify-center"
          >
            <FiShoppingBag size={16} />
          </Link>
          : 
          <Link

            href="/login"
            className="p-1 rounded-md hover:bg-stone-100 flex items-center justify-center"
          >
            <FiShoppingBag size={16} />
          </Link>
          }
         

          <Link
            href="/business/businesslogin"
            className="hidden text-xs md:inline-block px-4 py-1 rounded-lg text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-lg transition hover:cursor-pointer"
          >
            Business
          </Link>

          <Link
            href="/login"
            className="hidden md:inline-block px-4 py-1 rounded-lg shadow text-xs font-medium hover:bg-stone-100"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg px-5 py-5">
          {/* Select + Search */}
          <div className="flex flex-col gap-3 mb-4">
            <select
              defaultValue="istanbul"
              className="border rounded-md px-2 py-1 text-sm bg-stone-50 focus:outline-none"
            >
              <option value="istanbul">İstanbul</option>
              <option value="ankara">Ankara</option>
              <option value="izmir">İzmir</option>
            </select>

            <div className="relative">
              <input
                placeholder="Restaurant, kuponlar, kategori ara..."
                className="w-full bg-stone-100 rounded-lg h-9 pl-8 text-sm outline-none"
              />
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-500">
                <FiSearch size={16} />
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Link
              href="/cart"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-stone-100"
            >
              <FiShoppingBag size={16} /> Sepet
            </Link>

            <Link
              href="/login"
              className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-stone-100"
            >
              Login
            </Link>

            <Link
              href="/business/businesslogin"
              className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-stone-100"
            >
              Business
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
