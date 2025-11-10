
const items = [
  {
    text: "Love the pricing layout, but most of all, I love the concept behind the pricing table breakdowns which explained what I will be getting under each plan in detail.",
  },
  {
    text: "The early access plan gives great value for what Kaisel offers. Seems like a  good fit for me, and i’m excited to see future tiers!",
  },
  {
    text: "The flexible pricing makes it easy to start testing without feeling locked in or clueless of features I will get. Smart move.",
  },
  {
    text: "The pricing options fit every kind of user. It’s great to see that kind of inclusivity early on. Kaisel is heading the right path and is destined for great things.",
  },
];

const TestimonialReview = () => {
  return (
    <div className="py-[80px] flex items-center justify-center bg-gradient-to-b from-purple-100 to-white p-6 text-black">
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="py-[24] px-[32px] bg-gradient-to-tr from-purple-800 to-blue-800  text-white space-y-[30px] rounded-3xl shadow-lg"
          >
            <div className="flex justify-between">
              <img
                src="/tes/image 68.png"
                alt=""
                className="w-[35px] h-[30px]"
              />
              <img
                src="/tes/image 22.png"
                alt=""
                className="rounded-full w-[170px] object-cover"
              />
            </div>

            <div className="flex flex-col  gap-1 ">
              <p className="flex-1 text-sm  text-white/90">{item.text}</p>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/tes/userIcon.png"
                alt=""
                className=" w-[69px] h-[69px] "
              />
              <div>
                <p className="font-bold text-[16px]">Anonymous</p>
                <p className="text-sm text-white/90">
                  Early Access Testing Program for Kaisel
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialReview;
