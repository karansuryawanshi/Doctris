import React, { useState, useEffect } from "react";
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

  const Test = [
    {
      image:
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    },
    {
      image:
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0",
    },
    {
      image:
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0",
    },
    {
      image:
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/cd9606a9173-efr.png?dim=256x0",
    },
    {
      image:
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0",
    },
    {
      image:
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0",
    },
    {
      image:
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0",
    },
    {
      image:
        "https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=256x0",
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div
        className={`navbar bg-slate-500 flex px-10 py-4 items-center justify-center duration-200 ${
          scrolled ? "bg-gray-200 text-gray-900 sticky top-0 duration-200" : ""
        }`}
      >
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
        <div className="pt-10 text-white bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900  space-y-5">
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
            <div className="w-11/12">
              <ul className="flex gap-4">
                {Test.map((item) => {
                  return (
                    <li className="cursor-pointer rounded-xl overflow-hidden hover:scale-110 duration-300">
                      <img className="w-40 h-44" src={item.image} alt="" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white w-11/12 rounded-xl flex ">
              <div className="flex items-center justify-center py-6 bg-red-400 w-1/3">
                <div className="p-4">
                  <img
                    src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"
                    alt=""
                  />
                </div>
                <div className="text-medium">
                  <p className="text-lg font-semibold px-4">
                    Order with Prescription
                  </p>
                  <p className="px-4">
                    Upload prescription and we will deliver your medicines
                  </p>
                  <button className="mx-24 mt-4 bg-slate-800 px-6 py-2 rounded-xl hover:bg-slate-700 duration-300">
                    Submit
                  </button>
                </div>
              </div>
              <div className="bg-slate-400 w-1/3 ">
                <p className="px-8 pt-8 text-lg font-semibold text-black">
                  How does this work?
                </p>
                <ul className="px-8 pt-4 font-normal text-gray-900">
                  <li className="flex gap-4 ">
                    <span className="bg-slate-800 px-2 py-1 text-white rounded-lg">
                      1
                    </span>
                    <p>Upload a photo of your prescription</p>
                  </li>
                  <li className="flex mt-4 gap-4">
                    <span className="bg-slate-800 px-2 py-1 text-white rounded-lg">
                      2
                    </span>
                    <p>Add delivery address and place the order</p>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-400 w-1/3 font-normal text-gray-900">
                <ul className="px-8 pt-4 mt-12">
                  <li className="flex gap-4">
                    <span className="bg-slate-800 px-2 py-1 text-white rounded-lg">
                      1
                    </span>
                    <p>Upload a photo of your prescription</p>
                  </li>
                  <li className="flex mt-4 gap-4">
                    <span className="bg-slate-800 px-2 py-1 text-white rounded-lg">
                      2
                    </span>
                    <p>Add delivery address and place the order</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-11/12 overflow-visible p-4">
              <div className="text-2xl font-semibold pb-4">
                <p>Shop By Category</p>
              </div>
              <div className="">
                <ul className="flex gap-8">
                  <li className=" flex flex-col text-center border-2 rounded-lg border-slate-600 bg-slate-800 hover:bg-slate-700 duration-300 p-4">
                    <img
                      className="w-72 h-48 rounded-xl"
                      src="https://images.pexels.com/photos/8963414/pexels-photo-8963414.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    <p className="mt-3">Health Food and Drinks</p>
                  </li>
                  <li className=" flex flex-col text-center border-2 rounded-lg border-slate-600 bg-slate-800 hover:bg-slate-700 duration-300 p-4">
                    <img
                      className="w-72 h-48 rounded-xl"
                      src="https://m.media-amazon.com/images/I/61jXQYqiR4L.jpg"
                      alt=""
                    />
                    <p className="mt-3">Sports nutrition</p>
                  </li>
                  <li className=" flex flex-col text-center border-2 rounded-lg border-slate-600 bg-slate-800 hover:bg-slate-700 duration-300 p-4">
                    <img
                      className="w-72 h-48 rounded-xl"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNxzeoZZp9iZj68dpxYqwH9yrETj9jL25ug&s"
                      alt=""
                    />
                    <p className="mt-3">Baby Care</p>
                  </li>
                  <li className=" flex flex-col text-center border-2 rounded-lg border-slate-600 bg-slate-800 hover:bg-slate-700 duration-300 p-4">
                    <img
                      className="w-72 h-48 rounded-xl"
                      src="https://5.imimg.com/data5/JU/FV/MY-8372919/private-labeling-skin-care-products.jpg"
                      alt=""
                    />
                    <p className="mt-3">Skin Care</p>
                  </li>
                  <li className=" flex flex-col text-center border-2 rounded-lg border-slate-600 bg-slate-800 hover:bg-slate-700 duration-300 p-4">
                    <img
                      className="w-72 h-48 rounded-xl"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRynJ23kpK6c0YECHEPaCIz5auqA3k3e8yI-Q&s"
                      alt=""
                    />
                    <p className="mt-3">Ayurveda</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyStore;
