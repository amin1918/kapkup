"use client";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function QuantityControl({ qty, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-2">
      <button
        className="p-1 rounded-md border text-gray-500 hover:bg-stone-100 hover:cursor-pointer"
        onClick={onDecrease}
      >
        <FiMinus size={16} />
      </button>
      <span className="font-medium w-5 text-center">{qty}</span>
      <button
        className="p-1 rounded-md border text-gray-500 hover:bg-stone-100 hover:cursor-pointer"
        onClick={onIncrease}
      >
        <FiPlus size={16} />
      </button>
    </div>
  );
}
