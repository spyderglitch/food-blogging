import React from "react";
import PizzaImg from "../assets/Rectangle 400.svg";
import PizzaContainer from "../assets/Vector 1.svg";
import Logo from "../assets/logo.svg";

const HeroSection = (props) => {
  return (
    <div className="grid grid-cols-2 mb-64">
      <div className="flex flex-col px-24">
        <div className="pb-24 pt-8">
          <img src={Logo} alt="logo" />
        </div>
        <div className="w-[70%] text-left">
          <h2 className="font-heading font-bold leading-tight text-[3.875rem] text-primary">
            Discover the <span className="text-secondary">Best</span> Food and
            Drinks
          </h2>
          <p className="text-body mt-[21px] mb-[41px]">
            Naturally made Healthcare Products for the better care & support of
            your body
          </p>
          <button className="bg-primary w-[190px] text-[18px] text-white rounded-[34px] px-[7px] py-[17px] hover:shadow-black hover:shadow-md">
            Explore Now
          </button>
        </div>
      </div>
      <div className="relative">
        <img className="absolute left-0 top-0" src={PizzaImg} alt="" />
        <img className="absolute left-0 top-0" src={PizzaContainer} alt="" />
        <button className="absolute right-4 top-4 border text-white rounded-[34px] text-[18px] hover:bg-secondary hover:text-secondary text-body px-4 py-1 border-gray-400">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
