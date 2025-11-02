import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import PrimaryButton from "./ui/ButtonComp";

const navigation = [
  {
    name: "Banking",
    href: "",
    subNav: [
      {
        icon: "/nav/image 38.png",
        title: "Send & receive",
        description: "Handle transactions with ease",
        href: "/#Send & Receive Globally",
      },

      {
        icon: "/nav/image 39.png",
        title: "Create Invoices",
        description: "Send & track invoices swiftly",
        href: "/#Manage your Spendings",
      },
      {
        icon: "/nav/image 40.png",
        title: "Do more with cards",
        description: "Freeze & control your cards",
        href: "/#Do More With Smart Cards",
      },

      {
        icon: "/nav/image 41.png",
        title: "Manage your spendings",
        description: "Breakdown your expenses",
        href: "/#Send Professional Invoices With Kaisel",
      },
    ],
  },
  {
    name: "Tools",
    href: "",
    subNav: [
      {
        icon: "/nav/image 43.png",
        title: "Kaisel Learn",
        description: "Learn to use Kasiel in minute",
        href: "/Learn",
      },

      {
        icon: "/nav/image 42.png",
        title: "Calculator",
        description: "Convert currencies in real-time",
        href: "#",
      },
    ],
  },
  {
    name: "Solutions",
    href: "/#solutions",
  },
  {
    name: "Resources",
    href: "",
    subNav: [
      {
        icon: "/nav/image 44.png",
        title: "Kaisel Blog",
        description: "Read our Latest article",
        href: "/Blog",
      },

      {
        icon: "/nav/image 45.png",
        title: "FAQs",
        description: "Answers to your quwstion",
        href: "/Faqs",
      },
    ],
  },
  {
    name: "Pricing",
    href: "/Pricing",
  },
];

const Navbar = () => {
  return (
    <div className="hidden lg:block px-3">
      <nav className="bg-white rounded-full max-w-7xl mx-auto h-[72px] flex text-black items-center justify-between pl-[40px] px-[20px] py-[12px] ">
        <Link href="/">
          <div className="">
            <img src="/kaisel.svg" alt="" />
          </div>
        </Link>

        <div>
          <ul className="flex gap-9">
            {navigation.map((nav, index) => (
              <li
                key={index}
                className="cursor-pointer relative group bg-transparent "
              >
                {nav.href ? (
                  <Link
                    href={nav.href}
                    className="hover:text-purple-800 transition-all text-[18px] "
                  >
                    <p>{nav.name}</p>{" "}
                  </Link>
                ) : (
                  <p className="hover:text-purple-800 transition-all text-[18px] flex items-center  ">
                    {nav.name}
                    <ChevronDown className="group-hover:rotate-180 transition-all" />
                  </p>
                )}

                {nav.subNav && (
                  <div className="h-max w-max absolute  hidden group-hover:block  pt-[50px]  bg-transparent ">
                    <div
                      className={`grid ${
                        nav.subNav.length > 2 ? "grid-cols-2" : "grid-cols-1"
                      }  bg-white h-full w-full p-3 px-6 rounded-3xl shadow-2xl`}
                    >
                      {nav.subNav.map((sub, index) => (
                        <Link href={sub.href} key={index}>
                          <div
                            key={index}
                            className="p-4 hover:bg-gray-100  rounded-2xl flex gap-3"
                          >
                            <div className="w-[40px] h-[30px] flex items-center justify-center border border-black/20 rounded">
                              <img src={sub.icon} alt="" className="w-[20px]" />
                            </div>
                            <div>
                              <p className="font-semibold text-[15px]">
                                {sub.title}
                              </p>
                              <p className="text-black/70 text-[13px]">
                                {sub.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex">
          {/* <Link href="/login">
            <button className=" b  py-[12px] px-[12px] rounded-full text-black/70 cursor-pointer text-[18px]">
              Login
            </button>
          </Link> */}
          <PrimaryButton text="Join Waitlist" href="/WaitList"/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
