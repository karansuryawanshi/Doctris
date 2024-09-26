import React from "react";
import Logo from "../assets/logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import TypewriterComponent from "typewriter-effect";
import { Link } from "react-router-dom";
import ReactCardSlider from "react-card-slider-component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PharmacyStore = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: "5",
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const slides = [
    {
      image:
        "https://img.freepik.com/free-vector/discount-medicines-cartoon-poster-with-magnet-attract-drugs-syringe-medical-pills-bottles_107791-3974.jpg",
      title: "This is a title",
      description: "This is a description",
      // clickEvent: sliderClick,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbwC60mwixj68hVfhr2-RF9Bl7Kflh_LwPQ&s",
      title: "This is a second title",
      description: "This is a second description",
      // clickEvent: sliderClick,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqGOK6B03RF1IfViQn9lWZzCW9tTN9uGKtQ&s",
      title: "This is a third title",
      description: "This is a third description",
      // clickEvent: sliderClick,
    },
    {
      image:
        "https://img.freepik.com/free-vector/flat-design-healthcare-service-sale-banner_23-2150766982.jpg",
      title: "This is a fourth title",
      description: "This is a fourth description",
      // clickEvent: sliderClick,
    },
    {
      image:
        "https://www.pulseplus.in/content/images/offers/20flatoff-banner.jpg",
      title: "This is a fifth title",
      description: "This is a fifth description",
      // clickEvent: sliderClick,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCsPtgS6GZjDOUc_Jf70PFV1QRo8wU1SwlQ&s",
      title: "This is a sixth title",
      description: "This is a sixth description",
      // clickEvent: sliderClick,
    },
    {
      image:
        "https://marketplace.canva.com/EAE-iUOz-Gc/1/0/1131w/canva-medical-poster-dUVQKFxeupE.jpg",
      title: "This is a seventh title",
      description: "This is a seventh description",
      // clickEvent: sliderClick,
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
        <div className="text-white bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900  space-y-5">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-center">
            <h1>Order and get the </h1>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <TypewriterComponent
                options={{
                  strings: ["Health drinks.", "Medicine.", "Shampoo."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="text-sm flex text-center items-center justify-center md:text-xl font-light text-zinc-400">
            get delivery within 30 minutes.
          </div>
          <div className="flex items-center justify-center">
            <Link href={"/dashboard"}>
              <button className="md:text-lg p-2 md:p-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full font-semibold">
                Order Now
              </button>
            </Link>
          </div>
          <div className="flex text-black items-center justify-center">
            <ReactCardSlider slides={slides} />
          </div>
          <div className="flex items-start text-2xl font-semibold ml-16">
            <p>Lab Tests by Health Concern</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-11/12 rounded-lg">
              <ul className="flex gap-4">
                <li className="cursor-pointer">
                  <img
                    className="w-40 h-44"
                    src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0"
                    alt=""
                  />
                </li>
                <li className="cursor-pointer">
                  <img
                    className="w-40 h-44"
                    src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0"
                    alt=""
                  />
                </li>
                <li className="cursor-pointer">
                  <img
                    className="w-40 h-44"
                    src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0"
                    alt=""
                  />
                </li>
                <li className="cursor-pointer">
                  <img
                    className="w-40 h-44"
                    src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0"
                    alt=""
                  />
                </li>
                <li className="cursor-pointer">
                  <img
                    className="w-40 h-44"
                    src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/cd9606a9173-efr.png?dim=256x0"
                    alt=""
                  />
                </li>
                <li className="cursor-pointer">
                  <img
                    className="w-40 h-44"
                    src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0"
                    alt=""
                  />
                </li>
                <li className="cursor-pointer">
                  <img
                    className="w-40 h-44"
                    src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0"
                    alt=""
                  />
                </li>
                <li className="cursor-pointer">
                  <img
                    className="w-40 h-44"
                    src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=256x0"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <div>Hello</div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyStore;
