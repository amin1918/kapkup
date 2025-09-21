"use client";

import { useBasket } from "@/stores/useBasket";
import { useEffect } from "react";

export default function CartSummary() {
  const { basket, fetchBasket } = useBasket();
  useEffect(() => {
    fetchBasket()
  }, [fetchBasket]
  )

  const quantities = basket?.items?.map(item => item.quantity)|| [];
  const totalQuantity = quantities.reduce((res,add)=> res+add,0)
    console.log("cartSum:", basket)
  return (
    <div className="shadow rounded-xl p-4 bg-white flex flex-col gap-4 w-full">
      <h2 className="text-lg font-semibold">Cart Summary</h2>

      {/* Items count */}
      <div className="flex justify-between text-gray-600">
        <span>Items</span>
        <span> {totalQuantity} </span>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between text-gray-600">
        <span>Subtotal</span>
        <span>$ {basket?.totalPriceWithoutDiscount} </span>
      </div>

      {/* Discount (optional) */}
      <div className="flex justify-between text-gray-600">
        <span>Discount</span>
        <span>${basket?.savedAmount}</span>
      </div>

      <hr className="border-gray-200" />

      {/* Total */}
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span> ${basket?.totalPrice} </span>
      </div>

      {/* Checkout button */}
      <button className="w-full py-3 mt-2 rounded-lg text-white font-semibold bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-lg transition hover:cursor-pointer">
        Checkout
      </button>
    </div>
  );
}
