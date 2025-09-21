"use client";

import { useBasket } from "@/stores/useBasket";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import QuantityControl from "../QtyControl/QuantityControl";

function BusinessCouponCard({
    businessName, cover, description,
    title, discountPercentage, discountedPrice,
    originalPrice, city, district, id }) {
    const { handleAdd, handleDecrease, basket, fetchBasket } = useBasket()
    const [open, setOpen] = useState(false);
    useEffect(() => {
        fetchBasket()
    }, [fetchBasket])
    const currentBasket = basket?.items
    console.log("currentBasket: ", currentBasket)

    const currenItem = currentBasket?.find((item) => (item?.template?._id === id))
    const qty = currenItem?.quantity
    console.log("BCC qty: " + qty)
    const currentQty = qty || 0;



    /*=>[object Object]

console.log("testLogAddBcoupon: " + id )/*  => testLogAddBcoupon: 680640ec1d9d91941f6905b3
BussinessCouponCart.js:14 testLogAddBcoupon: 680640ec1d9d91941f6905b3
BussinessCouponCart.js:14 testLogAddBcoupon: 680641131d9d91941f690608
BussinessCouponCart.js:14 testLogAddBcoupon: 680641131d9d91941f690608 */


    return (
        <div className="flex flex-col shadow  p-2 my-2 rounded-xl">
            <div className="w-full  bg-white rounded-2xl  space-y-4 flex justify-between  ">
                {/* Coupon Info */}
                <div className="flex items-center gap-4 p-4 rounded-lg  bg-white">
                    {/* Image */}
                    <div className="relative">
                        <img
                            src={cover}
                            alt="Sailing Training"
                            className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                        <span className="absolute  top-0 right-0 text-xs bg-red-500 text-white font-bold rounded-full py-3 px-2 mt-[-4] mr-[-4] "> %{discountPercentage} </span>

                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-between">
                        <p className="font-medium text-gray-700 text-sm">
                            {title}
                        </p>
                        <span className="text-sm font-semibold text-rose-600"> %{discountPercentage} </span>

                        {/* Prices */}
                        <div className="flex items-center gap-3 mt-1">
                            <span className="line-through text-gray-400 text-sm"> {originalPrice} </span>
                            <span className="text-lg font-bold text-green-600"> {discountedPrice} </span>
                        </div>
                    </div>
                </div>


                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                    {

                        currentQty == 0 ?
                            <button className="hidden w-20 text-xs md:inline-block px-4 py-1 rounded-lg text-white bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 shadow-lg transition  hover:cursor-pointer" onClick={() =>    handleAdd(id)}
                            > add </button>

                            :
                            <QuantityControl
                                qty={qty}
                                onIncrease={() => handleAdd(id)}
                                onDecrease={() => handleDecrease(id)}
                            />
                    }

                </div>
            </div>
            <div>
                {/* Details Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 text-sm text-stone-500 pl-5 pb-2 font-semibold hover:underline"
                >
                    Details {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {/* Details Section */}
                <div
                    className={`mt-2 text-sm text-gray-600 border-t border-stone-200 pt-3 overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-200" : "max-h-0 opacity-0"
                        }`}
                >
                    {description}
                </div>
            </div>

        </div>

    );
}

export default BusinessCouponCard;
