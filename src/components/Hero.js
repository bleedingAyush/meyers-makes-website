import React from "react";

import HeroImg from "../../public/hero1.jpg";
import Line2 from "../../public/line2.svg";
import Line1 from "../../public/line1.svg";
import phone from "../../public/phone.svg";

import Image from "next/image";
import Logo from "../../public/logo.jpg";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <div
        style={{ zIndex: "2" }}
        className="relative w-full max-sm: h-[90vh] h-screen xl:h-[85vh] flex justify-center"
      >
        <div
          style={{
            background:
              "linear-gradient(84deg, rgba(0, 0, 0, 0.30) 15.19%, rgba(0, 0, 0, 0.05) 95.07%)",
          }}
          className="absolute left-0 w-[65%] max-sm:w-full h-full"
        ></div>
        <Image
          src={HeroImg}
          className="-z-10"
          layout="fill"
          objectFit="cover"
          alt="Mountains"
          priority={true}
        />

        <div className="py-32 max-sm:py-20 max-sm:px-4 2xl:py-52 z-10  max-w-[1200px] w-full flex flex-col max-sm:justify-center gap-12 max-sm:gap-16">
          <h1 className="text-6xl max-sm:text-center max-sm:text-4xl max-sm:w-full w-[65%] max-sm:leading-normal leading-snug tracking-[0.015em] capitalize font-bold text-white">
            <span>Your</span>
            <span className="relative">
              <span> Trusted </span>
              <svg
                className="absolute transform translate-x-[-50%] translate-y-[-70%] left-[50%] max-sm:translate-y-[-50%]"
                width="222"
                height="18"
                viewBox="0 0 222 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 16.5C37 -4.5 142.647 0.140907 221 10"
                  stroke="#F2B72F"
                  strokeWidth="4"
                  className="animated-the-svg"
                  id="my-svg-path"
                />
              </svg>
            </span>
            <span className="mt-4">Local Partner for Home Transformation.</span>
          </h1>
          <div className="w-[65%] max-sm:w-full flex gap-2 border-l-4 border-button-color">
            <span className="ml-2 text-lg text-white">
              Your Trusted Partner for Home Repairs and Improvements:
              Professional Handyman Services at Your Doorstep. Schedule your
              booking now to secure your complimentary project estimate.
            </span>
          </div>
          <div className="flex max-sm:flex-col max-sm:items-center gap-12 max-sm:gap-8">
            <Link
              href={""}
              className="max-sm:w-full text-center font-semibold uppercase text-[15px] text-black bg-button-color px-12 py-2.5 hover:bg-white"
            >
              Schedule a booking
            </Link>
            <Link
              href={"tel:+1 226-168-1749"}
              className="flex gap-1.5 items-center"
            >
              <Image src={phone} height={18} alt="" />
              <span className="text-white font-medium text-xl">
                +1 226-168-1749
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
