import TestimonialReview from "./TestimonialReview";

const PricingReview = () => {
  return (
    <section className="py-[80px] text-black  space-y-10">
      <div className="max-w-[800px]  mx-auto space-y-[15px]">
        <h2 className="text-4xl lg:text-[52px] font-semibold text-center">
          Feedback From Our Users
        </h2>
        <p className="text-[15px] lg:text-[20px] text-center text-black/80">
          Take a look at the positive stories from users who pay for kaisel
        </p>
      </div>
      <TestimonialReview />
    </section>
  );
};

export default PricingReview;
