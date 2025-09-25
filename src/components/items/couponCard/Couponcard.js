"use client";
import { Star } from "lucide-react";
import Link from "next/link";

function CouponCard({
  businessName,
  slug,
  discount,
  district,
  city,
  price,
  discountedPrice,
  mainImage,
}) {
  return (
    <div className="group relative rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 p-5 w-72 flex flex-col justify-between border border-gray-100 hover:-translate-y-1">
      {/* Image */}
      <div className="w-full aspect-square overflow-hidden rounded-xl relative mb-4">
        <img
          src={mainImage}
          alt={businessName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          %{discount} OFF
        </div>
      </div>

      {/* Title */}
      <h2 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
        {businessName}
      </h2>

      {/* Price & Location */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-red-600 font-bold text-lg">
            {discountedPrice} ₺
          </span>
          <span className="line-through text-gray-400 text-sm">{price} ₺</span>
          <span className="text-gray-500 text-sm mt-1">
            {city}/{district}
          </span>
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star size={16} fill="currentColor" />
          <span className="text-sm font-medium text-gray-700">4.8</span>
        </div>
      </div>

      {/* Button */}
      <Link
        href={`/details/${slug}`}
        className="mt-auto w-full py-2 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-xl shadow hover:opacity-90 transition text-center"
      >
        See All Deals
      </Link>
    </div>
  );
}

export default CouponCard;
