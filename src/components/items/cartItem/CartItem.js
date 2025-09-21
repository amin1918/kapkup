"use client";
import QuantityControl from "../QtyControl/QuantityControl";
import { useBasket } from "@/stores/useBasket";
import { FiTrash2 } from "react-icons/fi";

export default function CartItem({ qty, title, description, price, id }) {
  const { handleAdd, handleDecrease } = useBasket();

  return (
    <div className="shadow rounded-xl p-4 bg-white flex flex-col gap-3 w-full">
      {/* Title */}
      <h2 className="text-lg font-semibold">{title}</h2>

      {/* Description */}
      <p className="text-sm text-gray-600">{description}</p>

      {/* Price + Quantity */}
      <div className="flex items-center justify-between">
        <span className="text-red-600 font-bold text-lg">${price}</span>
        <QuantityControl
          qty={qty}
          onIncrease={() => handleAdd(id)}
          onDecrease={() => handleDecrease(id)}
        />
      </div>

      {/* Remove */}
      <div className="flex justify-end">
        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600">
          <FiTrash2 size={16} /> Remove
        </button>
      </div>
    </div>
  );
}
