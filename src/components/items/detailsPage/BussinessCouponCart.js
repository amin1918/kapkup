"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import QuantityControl from "../QtyControl/QuantityControl";
import { useBasket } from "@/stores/useBasket";
import { useUser } from "@/stores/useUser";

export default function BusinessCouponCard({
    businessName,
    cover,
    description,
    title,
    discountPercentage,
    discountedPrice,
    originalPrice,
    city,
    district,
    id,
}) {
    const { handleAdd, handleDecrease, basket, fetchBasket } = useBasket();
    const { isAuthed } = useUser();
    const [open, setOpen] = useState(false);
    const [showLoginMsg, setShowLoginMsg] = useState(false);

    useEffect(() => { fetchBasket(); }, [fetchBasket]);

    const currentItem = basket?.items?.find(item => item?.template?._id === id);
    const currentQty = currentItem?.quantity || 0;

    const handleAddClick = () => {
        if (isAuthed) handleAdd(id);
        else {
            setShowLoginMsg(true);
            setTimeout(() => setShowLoginMsg(false), 3000);
        }
    };

    return (
        <div className="flex flex-col rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition p-4 my-3">

            {/* Coupon Info */}
            <div className="flex justify-between items-start gap-4">

                {/* Image */}
                <div className="relative flex-shrink-0">
                    <img src={cover} alt={title} className="w-24 h-24 object-cover rounded-lg" />
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold rounded-full px-3 py-1 shadow-md">
                        %{discountPercentage}
                    </span>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between flex-1">
                    <p className="font-semibold text-gray-800 text-sm line-clamp-2">{title}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="line-through text-gray-400 text-xs">{originalPrice}</span>
                        <span className="text-lg font-bold text-green-600">{discountedPrice}</span>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{city}/{district}</span>
                </div>

                {/* Quantity / Add */}
                <div className="flex flex-col items-center gap-2">
                    {currentQty === 0 ? (
                        <button
                            className="hidden md:inline-block px-4 py-1 rounded-lg text-xs text-white bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 shadow-sm transition"
                            onClick={handleAddClick}
                        >
                            Add
                        </button>
                    ) : (
                        <QuantityControl qty={currentQty} onIncrease={() => handleAdd(id)} onDecrease={() => handleDecrease(id)} />
                    )}
                    {showLoginMsg && <span className="text-red-500 text-xs font-medium">Please login</span>}
                </div>
            </div>

            {/* Details Toggle */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-sm text-stone-500 font-medium hover:text-stone-700 mt-3"
            >
                Details {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className={`mt-2 text-sm text-gray-600 bg-stone-50 rounded-lg transition-all duration-300 ease-in-out ${open ? "max-h-40 opacity-100 p-3" : "max-h-0 opacity-0 overflow-hidden p-0"}`}>
                {description}
            </div>
        </div>
    );
}
