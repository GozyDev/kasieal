import React from "react";
const items = [
  {
    name: "Daniel O.",
    text: "I was surprised at how simple the tutorials were. In less than 10 minutes, I was already navigating my dashboard like a pro",
    image: "/Learn/tes1.avif",
  },
  {
    name: "Hannah K.",
    text: "The step-by-step guide made everything clear. I didn’t feel overwhelmed at all — Kaisel Learn really makes it easy.",
    image: "/Learn/tes2.avif",
  },
  {
    name: "Grace N.",
    text: "Usually platforms take weeks to get used to, but with Kaisel I felt comfortable right away. The tips were straightforward and practical",
    image: "/Learn/tes3.avif",
  },
  {
    name: "Lucas E.",
    text: "Learning to send money and manage my account was smooth. The lessons are short but packed with exactly what you need to know",
    image: "/Learn/tes4.avif",
  },
];

const TestimonialReview = () => {
  return (
    <div className="py-[80px] flex items-center justify-center bg-gradient-to-b from-purple-100 to-white p-6 text-black">
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl w-full">
        {items.map((item, index) => (
          <div key={index} className="py-[24] px-[32px] bg-white space-y-[10px] rounded-3xl shadow-lg">
            <div>
              <img
                src="/tes/image 22.png"
                alt=""
                className="rounded-full w-[170px] object-cover ml-auto"
              />
               <img
                src="/Learn/image 26.png"
                alt=""
                className="w-[30px] object-cover "
              />
            </div>
            <div className="flex items-center gap-1 ">
              <p className="flex-1 text-sm text-black/70">{item.text}</p>
              <img
                src={item.image}
                alt=""
                className="rounded-full w-[81px] h-[81px] object-cover"
              />
            </div>
            <p className="font-semibold text-[20px]">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialReview;
