"use client"
import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewStar = () => {
    return (
        <ReactStars
            count={5}
            value={3}
            size={24}
            readonly={true}
            activeColor='#ffd700'
        />
    );
};

export default ReviewStar;
