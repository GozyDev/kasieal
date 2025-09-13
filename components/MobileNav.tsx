"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, {  useState } from "react";

const navigationData = [
  {
    id: 1,
    name: "Banking",
    href: "",
    isActive: false,
    subNav: [
      {
        icon: "/nav/image 38.png",
        title: "Send & receive",
        description: "Handle transactions with ease",
        href: "/#Send & Receive Globally",
      },
      {
        icon: "/nav/image 40.png",
        title: "Do more with cards",
        description: "Freeze & control your cards",
        href: "/#Manage your Spendings",
      },
      {
        icon: "/nav/image 39.png",
        title: "Create Invoices",
        description: "Send & track invoices swiftly",
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
    id: 2,
    name: "Tools",
    href: "",
    isActive: false,
    subNav: [
      {
        icon: "/nav/image 42.png",
        title: "Kasiel Learn",
        description: "Learn to use Kasiel in minute",
        href: "/Learn",
      },

      {
        icon: "/nav/image 43.png",
        title: "Calculator",
        description: "Convert currencies in real-time",
        href: "#",
      },
    ],
  },
  {
    id: 3,
    name: "Solutions",
    href: "/#solutions",
  },
  {
    id: 4,
    name: "Resources",
    href: "",
    isActive: false,
    subNav: [
      {
        icon: "/nav/image 44.png",
        title: "Kasiel Blog",
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
    id: 5,
    name: "Pricing",
    href: "/Pricing",
  },
];

const MobileNavbar = () => {
  const [navigation, setNavigation] = useState(navigationData);
  const [active, setActive] = useState(false);

  const SetANavigation = (id: number) => {
    setNavigation(
      navigation.map((nav) => {
        if (nav.subNav) {
          return {
            ...nav,
            isActive: nav.id === id ? !nav.isActive : false,
          };
        }
        // Do not add isActive to items without subNav
        const { isActive, ...rest } = nav as any;
        return rest;
      })
    );
  };
  return (
    <div className="lg:hidden relative px-3 ">
      <nav className="bg-white rounded-full max-w-7xl mx-auto h-[72px] flex text-black items-center justify-between pl-[40px] px-[40px] py-[12px] ">
        <Link
          href="/"
          onClick={() => (setActive(false), setNavigation(navigationData))}
        >
          <div className="">
            <img src="/kaisel.svg" alt="" />
          </div>
        </Link>

        {active && (
          <div className="absolute  top-[100px] bg-white  rounded-3xl w-[95%] left-[50%] translate-x-[-50%] p-6 space-y-3  ">
            <ul className="flex flex-col gap-6">
              {navigation.map((nav, index) => (
                <li
                  key={index}
                  className="cursor-pointer relative group bg-transparent "
                >
                  {nav.href ? (
                    <Link
                      href={nav.href}
                      className="hover:text-purple-800 transition-all "
                      onClick={() => setActive(false)}
                    >
                      {nav.name}
                    </Link>
                  ) : (
                    <p
                      className={`hover:text-purple-800 transition-all ${
                        nav.isActive ? "text-purple-800" : "text-black"
                      }`}
                      onClick={() => SetANavigation(nav.id)}
                    >
                      {nav.name}
                    </p>
                  )}

                  {nav.subNav && (
                    <div
                      className={`h-max w-full block  pt-[10px]  bg-transparent ${
                        nav.isActive ? "block" : "hidden"
                      }`}
                    >
                      <div
                        className={`grid   bg-white h-full w-full p-6 rounded-3xl shadow-2xl`}
                      >
                        {nav.subNav.map((sub, index) => (
                          <Link
                            href={sub.href}
                            key={index}
                            onClick={() => setActive(false)}
                          >
                            <div
                              key={index}
                              className="p-4 hover:bg-gray-100  rounded-2xl flex gap-3"
                            >
                              <div className="w-[40px] h-[30px] flex items-center justify-center border border-black/20 rounded">
                                <img
                                  src={sub.icon}
                                  alt=""
                                  className="w-[24px]"
                                />
                              </div>
                              <div>
                                <p className="font-semibold">{sub.title}</p>
                                <p className="text-black/70 text-sm">
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
            {
              <div className="flex flex-col gap-3">
                <Link href="/login">
                  <button className="   py-[12px] rounded-full text-black/70 cursor-pointer">
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="text-[12px] lg:text-[18px] bg-purple-900  py-[12px] px-[24px] rounded-full text-white cursor-pointer">
                    Open An Account
                  </button>
                </Link>
              </div>
            }
          </div>
        )}

        <div onClick={() => setActive(!active)} className="cursor-pointer">
          {!active ? <Menu size={40} /> : <X size={40} />}
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
