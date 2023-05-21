import React, { useState } from "react";
import { articles } from "../utils/constants";

const Articles = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="flex flex-col mb-32 text-left justify-center px-28">
      {/* <div className="flex flex-col justify-center w-[40%] text-left"> */}
      <h2 className="font-heading font-semibold leading-tight text-[56px] mb-10 text-primary">
        Latest Articles
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {articles.slice(slide, slide + 3).map(({ title, desc, image }) => {
          return (
            <div className="border rounded-3xl border-gray-300 p-5">
              <img className="w-full mb-9" src={image} alt="" />
              <h3 className="text-primary mb-4 font-bold text-xl">{title}</h3>
              <p className="text-body mb-9">
                {desc.length > 148 ? desc.substring(0, 148) + "..." : desc}
              </p>
              <button className="border rounded-[34px] text-[18px] hover:bg-primary hover:text-white text-body px-4 py-1 border-gray-400">
                Read More
              </button>
            </div>
          );
        })}
      </div>
      <div className="mx-auto mt-8 flex gap-2 items-center">
        <button
          className="border border-primary h-[22px] px-1 flex justify-center items-center rounded-sm"
          onClick={() => (slide > -1 ? setSlide(slide - 3) : null)}
        >
          &lt;
        </button>
        1/{articles.length / 3}
        <button
          className="border border-primary h-[22px] px-1 flex justify-center items-center rounded-sm"
          onClick={() =>
            slide + 3 < articles.length ? setSlide(slide + 3) : null
          }
        >
          &gt;
        </button>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Articles;
