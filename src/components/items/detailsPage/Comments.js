"use client";

import React, { useState } from "react";

function CommentsSectionCard() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, comment });
    setRating(0);
    setComment("");
  };

  return (
    <div className="flex flex-col shadow p-4 my-2 rounded-xl bg-white space-y-4">
      <h2 className="text-lg font-bold text-gray-800">Comments</h2>

      {/* Rating with buttons */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-gray-700 mb-1">Your Rating*</label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`p-2 text-2xl ${
                star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
              } focus:outline-none`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </button>
          ))}
          <span className="ml-2 text-sm text-gray-600">
            {rating === 0 ? "Not rated yet" : `${rating} Star${rating > 1 ? "s" : ""}`}
          </span>
        </div>
      </div>

      {/* Comment */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-gray-700">Your Comment (optional)</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment"
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full py-3 mt-2 rounded-lg text-white font-semibold bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-lg transition hover:cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
}

export default CommentsSectionCard;
