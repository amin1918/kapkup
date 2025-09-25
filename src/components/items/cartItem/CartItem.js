"use client";
import QuantityControl from "../QtyControl/QuantityControl";
import { useBasket } from "@/stores/useBasket";
import { FiTrash2 } from "react-icons/fi";

export default function CartItem({ qty, title, description, price, id }) {
  const { handleAdd, handleDecrease, handleRemove } = useBasket();

  return (
    <div className="shadow-lg rounded-xl p-4 bg-white flex flex-col gap-4 w-full transition-transform duration-200 hover:scale-[1.01]">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}

      {/* Price + Quantity */}
      <div className="flex items-center justify-between">
        <span className="text-red-600 font-bold text-lg">${price.toFixed(2)}</span>
        <QuantityControl
          qty={qty}
          onIncrease={() => handleAdd(id)}
          onDecrease={() => handleDecrease(id)}
        />
      </div>

      {/* Remove */}
      <div className="flex justify-end">
        <button
          onClick={() => handleRemove(id)}
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600 transition-colors"
        >
          <FiTrash2 size={16} /> Remove
        </button>
      </div>
    </div>
  );
}
