import React from "react";
import TestimonialReview from "./TestimonialReview";
const items = [
  {
    image: "/Price/image 31.png",
  },
  {
    image: "/Price/image 32.png",
  },
  {
    image: "/Price/image 33.png",
  },
  {
    image: "/Price/image 34.png",
  },
];

const PricingReview = () => {
  return (
    <section  className="py-[80px] text-black  space-y-10">
      <div className="max-w-[800px]  mx-auto space-y-[15px]">
        <h2 className="text-4xl lg:text-[52px] font-semibold text-center">
          Feedback From Our Users
        </h2>
        <p className="text-[15px] lg:text-[20px] text-center text-black/80">
          Take a look at the positive stories from users who pay for kaisel
        </p>
      </div>
     <TestimonialReview/>
    </section>
  );
};

export default PricingReview;
