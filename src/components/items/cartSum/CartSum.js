"use client";

import { useBasket } from "@/stores/useBasket";
import { useEffect } from "react";
import QuantityControl from "../QtyControl/QuantityControl";

export default function CartSummary() {
  const { basket, fetchBasket, handleAdd, handleDecrease } = useBasket();

  useEffect(() => {
    fetchBasket();
  }, [fetchBasket]);

  const cartItems = basket?.items || [];
  const quantities = cartItems.map((item) => item.quantity) || [];
  const totalQuantity = quantities.reduce((res, add) => res + add, 0);

  return (
    <div className="shadow-xl rounded-2xl p-6 bg-white flex flex-col gap-5 w-full border border-gray-100">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800">Cart Summary</h2>

      {/* Cart items */}
      <div className="space-y-3">
        {cartItems.map((item) => {
          const id = item.template?._id;
          return (
            <>
            <div
              key={id}
              className="flex items-center justify-between text-gray-700"
            >
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
             <hr className="border-gray-200" />
            
            </>
          );
        })}
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

      {/* Checkout button */}
      <button className="w-full py-3 mt-3 rounded-xl text-white font-semibold bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-md transition-all hover:scale-[1.02]">
        Checkout
      </button>
    </div>
  );
}
