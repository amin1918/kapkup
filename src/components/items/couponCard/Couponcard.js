"use client";
import { Star } from "lucide-react";
import Link from "next/link";
3
function CouponCard({ businessName,slug, discount,district,city, price, discountedPrice,mainImage }) {
  console.log(discount)
  return (
    <div className="rounded-lg bg-white shadow hover:shadow-md transition-shadow p-4 w-64 flex flex-col justify-between">
      {/* Image */}
      <div className="w-full aspect-square overflow-hidden rounded-t-xl group/image flex items-center justify-center bg-white mb-3">
        <img
          src={mainImage}
          alt="Sailing Club"
          className="max-w-full max-h-full object-cover transition-transform duration-300 group-hover/image:scale-105"
        />
      </div>
      {/* Title */}
      <h2 className="font-semibold text-lg mb-3">
        {businessName}   
           </h2>

      {/* Price & Location + Off */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex flex-col gap-1">
          <span className="text-red-600 font-bold"> {discountedPrice} </span>
          <span className="line-through text-gray-400 text-sm">{price} </span>
          <span className="text-gray-600 text-sm"> {city}/{district} </span>
        </div>
        <div className="border-l border-gray-300 mx-3 h-full "></div>
        <div className="flex flex-col items-center justify-center ">
          <span className=" text-sm text-stone-700">Up to</span>
          <span className=" text-green-900 font-extrabold px-2  rounded mt-1 text-2xl">  %{discount}  </span>
          <span className=" text-green-900 font-extrabold px-2  rounded  text-2xl"> Off</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        <Star size={16} className="text-yellow-400" />
        <span className="text-sm font-medium">4.8</span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-auto">

        <Link
          href={`/details/${slug}`}
          className="w-full py-2 text-sm text-gray-700 border-gray-200 bg-fuchsia-50  shadow-md border-1 rounded hover:bg-gray-100 transition block text-center"
        >
          See All Deals
        </Link>

      </div>
    </div>
  );
}
export default CouponCard;