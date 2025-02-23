import React from "react";
import BannerImag from "../../assets/banner1.avif";

function Banner() {
  return (
    <div className="w-full h-[25rem] relative">
      <img
        src={BannerImag}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem] ">
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-5xl text-white">
                Crypto Tracker
          </div>

          <div className="font-semibold text-sm text-white text-center">
                Get All the Information About Cryptocurrencies
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
