import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function WaitlistCard() {
  return (
    <div className="flex justify-center items-center  pt-[135px] pb-[50px] bg-purple-50 p-4">
      <Card className="flex flex-col md:flex-row max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-[#1E103B] text-white py-0 ">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 bg-black flex justify-center items-center">
          <Image
            src="/waitImage.png" // replace with actual image path
            alt="Futuristic Shape"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Content Section */}
        <CardContent className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-3 leading-tight">
            Be the Among First to <br /> Experience Kaisel
          </h2>
          <p className="text-gray-300 text-sm mb-6">
            Join our waitlist to get early access and updates before we go live.
          </p>

          <div className="flex flex-col gap-3 mb-4">
            <Input placeholder="Name" className="bg-white text-black" />
            <Input placeholder="Work email" className="bg-white text-black" />
          </div>

          <Button className="bg-purple-900 w-full mb-4 text-white">
            Talk to Sales
          </Button>

          {/* <p className="text-gray-400 text-xs mb-3">
            Follow us on socials for early product drops and updates.
          </p> */}

          {/* <div className="flex gap-3">
            <Button
              variant="outline"
              className="bg-white text-black flex items-center gap-2"
            >
              <Image
                src="/twitter-icon.png"
                alt="Twitter"
                width={20}
                height={20}
              />{" "}
              Twitter X
            </Button>
            <Button
              variant="outline"
              className="bg-white text-black flex items-center gap-2"
            >
              <Image
                src="/linkedin-icon.png"
                alt="LinkedIn"
                width={20}
                height={20}
              />{" "}
              LinkedIn
            </Button>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}
