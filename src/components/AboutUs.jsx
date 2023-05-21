import React from "react";
import About from "../assets/about.png";

const AboutUs = () => {
  return (
    <div className="flex mb-32 gap-48 justify-center bg-secondary px-48">
      <div className="">
        <img src={About} alt="" />
      </div>
      <div className="flex flex-col justify-center w-[40%] text-left">
        <h2 className="font-heading font-bold leading-tight text-3xl text-primary">
          About Us
        </h2>
        <p className="text-body mt-[21px] mb-[41px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="bg-primary w-[190px] text-[18px] text-white rounded-[34px] px-[7px] py-[17px]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
