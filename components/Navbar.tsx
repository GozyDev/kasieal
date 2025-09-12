import Link from "next/link";
import React from "react";

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
    name: "Tools",
    href: "",
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
    name: "Solutions",
    href: "/#solutions",
  },
  {
    name: "Resources",
    href: "",
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
    name: "Pricing",
    href: "/Pricing",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white rounded-full max-w-7xl mx-auto h-[72px] flex text-black items-center justify-between pl-[40px] px-[20px] py-[12px] ">
        <div className="">
          <img src="/kaisel.svg" alt="" />
        </div>

        <div>
          <ul className="flex gap-5">
            {navigation.map((nav, index) => (
              <li
                key={index}
                className="cursor-pointer relative group bg-transparent "
              >
                {nav.href ? (
                  <Link
                    href={nav.href}
                    className="hover:text-purple-800 transition-all "
                  >
                    {nav.name}
                  </Link>
                ) : (
                  <p className="hover:text-purple-800 transition-all ">
                    {nav.name}
                  </p>
                )}

                {nav.subNav && (
                  <div className="h-max w-max absolute  hidden group-hover:block  pt-[50px]  bg-transparent ">
                    <div
                      className={`grid ${
                        nav.subNav.length > 2 ? "grid-cols-2" : "grid-cols-1"
                      }  bg-white h-full w-full p-6 rounded-3xl shadow-2xl`}
                    >
                      {nav.subNav.map((sub, index) => (
                        <Link href={sub.href} key={index}>
                          <div
                            key={index}
                            className="p-4 hover:bg-gray-100  rounded-2xl flex gap-3"
                          >
                            <div className="w-[40px] h-[30px] flex items-center justify-center border border-black/20 rounded">
                              <img src={sub.icon} alt="" className="w-[24px]" />
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
        </div>

        <div className="flex">
          <button className=" b  py-[12px] px-[12px] rounded-full text-black/70">
            Login
          </button>
          <button className="text-[12px] lg:text-[18px] bg-purple-900  py-[12px] px-[24px] rounded-full text-white">
            Open An Account
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
