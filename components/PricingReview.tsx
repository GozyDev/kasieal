import React from "react";
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
      <div className="flex items-center justify-center  p-6 text-black">
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className=" bg-white space-y-[10px] rounded-3xl shadow-lg"
            >
              <div className="flex items-center gap-1 ">
                <img src={item.image} alt="" className="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingReview;
