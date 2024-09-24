import React from "react";
import Logo from "../assets/logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
// import { TypewriterEffect } from "../component/typewriter-effect";
import TypewriterComponent from "typewriter-effect";
import { Link } from "react-router-dom";

const PharmacyStore = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="">
      <div className="navbar bg-slate-400 flex px-10 py-4 items-center justify-center">
        <div className="w-1/4">
          <img src={Logo} alt="" />
        </div>
        <div className="w-2/4">
          <input
            className="w-full border-none h-10 rounded-lg p-2 border-2"
            placeholder="Search for Medcine"
            type="text"
          />
        </div>
        <div className="flex text-3xl gap-6 w-1/2 justify-end">
          {/* <p>Login</p> */}
          <p className="text-lg">+91 9855477854</p>
          <p>
            <Icon icon="iconamoon:discount-light" />
          </p>
          <p>
            <Icon icon="iconoir:cart"></Icon>
          </p>
        </div>
      </div>
      <div>
        <div className="text-white bg-gradient-to-b from-slate-900 via-slate-500 to-slate-900 font-bold py-36 text-center space-y-5">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
            <h1>Order and get the </h1>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <TypewriterComponent
                options={{
                  strings: [
                    "Health drinks.",
                    "Medicine.",
                    "Shampoo.",
                    // "Code Generation.",
                    // "Video Generation.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="text-sm md:text-xl font-light text-zinc-400">
            get delivery within 30 minutes.
          </div>
          <div>
            <Link href={"/dashboard"}>
              <button className="md:text-lg p-2 md:p-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full font-semibold">
                Order Now
              </button>
            </Link>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyStore;
