import React from "react";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 px-28 py-14 bg-tertiary">
      <div className="">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-3 text-body text-left text-xs">
        <h4 className="text-primary font-medium text-base">Contact Us</h4>
        <p>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road,
          <br />
          Phartosh Gate near YTM Market,
          <br />
          XYZ-343434
        </p>
        <p>example@gmail.com</p>
        <p>(904)-443-0343</p>
      </div>
      <div className="flex flex-col gap-3 text-body text-left text-xs">
        <h4 className="text-primary font-medium text-base">More</h4>
        <p>About Us</p>
        <p>Products</p>
        <p>Career</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-3 text-body text-left text-xs">
        <h4 className="text-primary font-medium text-base">Social links</h4>
        <p className="flex gap-2 hover:cursor-pointer">
          <svg
            class="h-8 w-8 text-pink-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>{" "}
          <svg
            class="h-8 w-8 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>{" "}
        
        <svg
          class="h-8 w-8 text-blue-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>{" "}
        </p>
        <p className="mt-4">@2022 Food Truck Example</p>
      </div>
    </div>
  );
};

export default Footer;
