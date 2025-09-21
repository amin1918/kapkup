"use client";

import QuantityControl from "@/components/items/QtyControl/QuantityControl";
import { useBasket } from "@/stores/useBasket";
import { useEffect } from "react";





export default function Checkout() {
    const { basket, fetchBasket, handleAdd, handleDecrease } = useBasket();
    useEffect(() => {
        fetchBasket();
    }, [fetchBasket]);

    const cartItems = basket?.items || [];
    const quantities = cartItems.map((item) => item.quantity) || [];
    const totalQuantity = quantities.reduce((res, add) => res + add, 0);
    return (
        <div className="w-full font-sans bg-stone-100 min-h-screen py-20">
            {/* Header */}
            <div className="w-full sticky top-14 z-10 bg-stone-100">
                <h1 className="text-4xl font-bold text-center py-6 text-gray-800">
                    Checkout
                </h1>
            </div>


            <div className="grid md:grid-cols-2 gap-10 px-6 md:px-12 max-w-6xl mx-auto">
                {/* Cart Summary */}
                <div className="shadow-xl rounded-2xl p-6 bg-white flex flex-col gap-5 border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800">Cart Summary</h2>
                    <div className=" rounded-2xl p-1 bg-white flex flex-col gap-2 w-full  ">
                     

                        {/* Cart items */}
                        <div className="space-y-3">
                            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-5 pl-3">
                                {cartItems.map((item) => {
                                    const id = item.template?._id;
                                    return (
                                        <div key={id}>
                                            <div className="flex items-center justify-between text-gray-700">
                                                <span className="text-sm truncate pr-2 max-w-[60%]">
                                                    {item?.template?.title}
                                                </span>

                                                <div className="min-w-[100px] flex justify-end">
                                                    <QuantityControl
                                                        qty={item?.quantity}
                                                        onDecrease={() => handleDecrease(id)}
                                                        onIncrease={() => handleAdd(id)}
                                                    />
                                                </div>
                                            </div>
                                            <hr className="border-gray-200 my-3" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>



                        {/* Items count */}
                        <div className="flex justify-between text-gray-600 text-sm">
                            <span>Items</span>
                            <span>{totalQuantity}</span>
                        </div>

                        {/* Subtotal */}
                        <div className="flex justify-between text-gray-600 text-sm">
                            <span>Subtotal</span>
                            <span>${basket?.totalPriceWithoutDiscount}</span>
                        </div>

                        {/* Discount */}
                        {basket?.savedAmount > 0 && (
                            <div className="flex justify-between text-green-600 text-sm font-medium">
                                <span>Discount</span>
                                <span>- ${basket?.savedAmount}</span>
                            </div>
                        )}

                        <hr className="border-gray-200" />

                        {/* Total */}
                        <div className="flex justify-between font-bold text-lg text-gray-800">
                            <span>Total</span>
                            <span>${basket?.totalPrice}</span>
                        </div>
                    </div>
                </div>

                {/* Payment Form */}
                <form className="shadow-xl rounded-2xl p-6 bg-white space-y-4 border border-gray-100 sticky top-36">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                        Payment Details
                    </h2>

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                    />
                    <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                    />

                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full md:flex-1 px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                        />
                        <input
                            type="text"
                            placeholder="CVC"
                            className="w-full md:flex-1 px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                        />
                    </div>

                    {/* Pay button */}
                    <button className="w-full py-3 mt-3 rounded-xl text-white font-semibold bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-md transition-all hover:scale-[1.02]">
                        Pay $45
                    </button>
                </form>
            </div>
        </div>
    );
}
