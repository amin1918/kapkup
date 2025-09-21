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

    useEffect(() => {
        fetchBasket();
    }, [fetchBasket]);

  
    const currentItem = basket?.items?.find(
        (item) => item?.template?._id === id
    );
    const currentQty = currentItem?.quantity || 0;

  
    const handleAddClick = () => {
        if (isAuthed) {
            handleAdd(id);
        } else {
            setShowLoginMsg(true);
            setTimeout(() => setShowLoginMsg(false), 3000); 
        }
    };

    return (
        <div className="flex flex-col shadow p-2 my-2 rounded-xl bg-white">
            {/* Coupon Info */}
            <div className="flex justify-between p-4 rounded-2xl bg-white space-y-4">
                <div className="flex items-center gap-4">
                    {/* Image */}
                    <div className="relative">
                        <img
                            src={cover}
                            alt={title}
                            className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                        <span className="absolute top-0 right-0 text-xs bg-red-500 text-white font-bold rounded-full py-1 px-2 mt-[-4px] mr-[-4px]">
                            %{discountPercentage}
                        </span>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-between">
                        <p className="font-medium text-gray-700 text-sm">{title}</p>
                        <span className="text-sm font-semibold text-rose-600">
                            %{discountPercentage}
                        </span>

                        {/* Prices */}
                        <div className="flex items-center gap-3 mt-1">
                            <span className="line-through text-gray-400 text-sm">
                                {originalPrice}
                            </span>
                            <span className="text-lg font-bold text-green-600">
                                {discountedPrice}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Quantity / Add Button */}
                <div className="flex flex-col items-center gap-2">
                    {currentQty === 0 ? (
                        <button
                            className="hidden w-20 text-xs md:inline-block px-4 py-1 rounded-lg text-white bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 shadow-lg transition hover:cursor-pointer"
                            onClick={handleAddClick}
                        >
                            Add
                        </button>
                    ) : (
                        <QuantityControl
                            qty={currentQty}
                            onIncrease={() => handleAdd(id)}
                            onDecrease={() => handleDecrease(id)}
                        />
                    )}

                    {/* پیام login */}
                    {showLoginMsg && (
                        <span className="text-red-500 text-xs font-medium">
                            Please login
                        </span>
                    )}
                </div>
            </div>

            {/* Details Toggle */}
            <div>
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 text-sm text-stone-500 pl-5 pb-2 font-semibold hover:underline"
                >
                    Details {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {/* Details Section */}
                <div
                    className={`mt-2 text-sm text-gray-600 border-t border-stone-200 pt-3 overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    {description}
                </div>
            </div>
        </div>
    );
}
