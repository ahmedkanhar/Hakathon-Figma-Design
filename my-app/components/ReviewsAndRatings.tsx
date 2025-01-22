"use client";

import React, { useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewsAndRatings: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      name: "John Doe",
      rating: 4.5,
      comment: "Great product! It exceeded my expectations.",
      date: "2025-01-15",
    },
    {
      id: "2",
      name: "Jane Smith",
      rating: 3,
      comment: "It's okay, but I expected better quality.",
      date: "2025-01-14",
    },
  ]);
  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

  const handleRatingClick = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews([
        ...reviews,
        {
          id: (reviews.length + 1).toString(),
          name: newReview.name,
          rating: newReview.rating,
          comment: newReview.comment,
          date: new Date().toISOString().split("T")[0],
        },
      ]);
      setNewReview({ name: "", rating: 0, comment: "" });
    }
  };

  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) / reviews.length || 0;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex text-yellow-500">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <FaStar key={`full-${index}`} />
          ))}
        {halfStar && <FaStarHalfAlt />}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <FaRegStar key={`empty-${index}`} />
          ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Reviews and Ratings</h2>

      {/* Average Rating */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Average Rating</h3>
        <div className="flex items-center">
          {renderStars(averageRating)}
          <span className="ml-2 text-gray-600">({averageRating.toFixed(1)}/5)</span>
        </div>
      </div>

      {/* Reviews List */}
      <div className="mb-6">
        {reviews.map((review) => (
          <div key={review.id} className="mb-4 border-b border-gray-200 pb-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold text-gray-800">{review.name}</h4>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              {renderStars(review.rating)}
              <span className="ml-2 text-gray-600">{review.rating}/5</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Submit Review Form */}
      <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Submit a Review</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
          <div className="flex space-x-1 text-yellow-500">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={`focus:outline-none ${
                    index + 1 <= newReview.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => handleRatingClick(index + 1)}
                >
                  <FaStar />
                </button>
              ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
          <textarea
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewsAndRatings;
