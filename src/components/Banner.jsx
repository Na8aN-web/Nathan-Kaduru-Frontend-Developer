import React from "react";
import BannerImg from "../assets/bannerimg.jfif";

const Banner = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row md:justify-between p-4 md:p-24 items-center border-b-[1px] border-b-gray-800 bg-blue-500">
      <div className=" md:w-1/2 md:pr-16">
        <h1 className="font-mont  text-xl md:text-4xl text-white my-4 md:my-6">
          The Revolutionized <span style={{ color: "#2E51E4" }}>SpaceX </span>{" "}
          Website.
        </h1>
        <p className="font-mont text-sm md:text-lg text-white mb-4 md:mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <button className="bg-blue-500 rounded-md shadow-md hover:bg-blue-600 px-4 py-2 font-mont text-sm md:text-lg text-white">
          Get Started
        </button>
      </div>
      <img
        src={BannerImg}
        alt="banner-icon"
        className="banner-image md:w-1/2 rounded-md shadow-md object-cover"
      />
    </section>
  );
};

export default Banner;
