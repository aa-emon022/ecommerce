import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
export default function Rating({ rating }) {
  console.log(rating);

  const StarRating = Array.from({ length: 5 }, (e, index) => {
    let number = index + 0.5;

    return (
      <span key={index} className="">
        {rating >= index + 1 ? (
          <FaStar className="text-[#eed202]" />
        ) : rating >= number ? (
          <FaStarHalfAlt className="text-[#eed202]" />
        ) : (
          <FaRegStar className="text-[#ffc40c]" />
        )}
      </span>
    );
  });

  return StarRating;
}
