"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
export default function WaitlistCard() {
  const [message, setMessage] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [Userdata, setaData] = useState<{ email: string }>({
    email: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { id } = e.target;

    setaData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Userdata),
    });

    const data = await res.json();
    setLoading(false);
    setMessage(data.message);
    setErrorMessage(data.error);
  };

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
            <Input
              placeholder="Work email"
              onChange={handleChange}
              className="bg-white text-white"
              id="email"
            />
          </div>

          <Button
            onClick={handleSubmit}
            className="bg-purple-900 hover:bg-purple-900  w-full mb-4 text-white"
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </Button>

          {message && (
            <p className="my-2 text-center text-sm text-green-600">{message}</p>
          )}
          {errormessage && (
            <p className="my-2 text-center text-sm text-red-600">
              {errormessage}
            </p>
          )}

          <p className="text-gray-400 text-xs mb-3">
            Follow us on socials for early product drops and updates.
          </p>

          {
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <Link
                href="https://x.com/bankwithkaisel"
                target="_blank"
                className="flex-1"
              >
                <button className="flex gap-2 justify-center  md:justify-start items-center  bg-white text-black py-1 px-3 w-full rounded font-medium cursor-pointer">
                  <Image
                    src="/Social/x.png"
                    alt="linkedIn"
                    width={30}
                    height={30}
                  ></Image>{" "}
                  Twitter x
                </button>
              </Link>
              <Link
                href="https://www.linkedin.com/company/kaisel/"
                target="_blank"
                className="flex-1"
              >
                <button className="flex gap-2 justify-center  md:justify-start items-center bg-white text-black py-1 px-3 w-full rounded font-medium cursor-pointer ">
                  <Image
                    src="/Social/linkedIn.png"
                    alt="linkedIn"
                    width={30}
                    height={30}
                  ></Image>{" "}
                  LinkedIn
                </button>
              </Link>
            </div>
          }
        </CardContent>
      </Card>
    </div>
  );
}
