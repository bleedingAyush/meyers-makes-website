import Image from "next/image";
import Link from "next/link";
import React from "react";
import ben from "../../public/ben.jpg";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full flex justify-center bg-white py-28 xl:py-36 max-sm:py-16"
      >
        <div className="w-full max-w-[1200px]">
          <div className="w-full flex justify-center">
            <h2 className=" font-medium leading-snug font-semibold text-5xl max-sm:text-3xl border-b-2 border-button-color w-fit px-2">
              About Us
            </h2>
          </div>
          <div className="flex justify-between max-sm:flex-col max-sm:px-4 max-sm:gap-8 max-sm:flex-col-reverse w-full xl:pt-28 pt-20 max-sm:pt-16">
            <div className="w-[48%]  max-sm:w-full flex-col flex gap-8">
              <span className="font-semibold text-3xl max-sm:text-2xl">
                Crafting Dreams into Reality: Discover the Man Behind Meyers
                Makes!
              </span>
              <span className="text-link-color text-lg max-sm:text-base">
                Hey there, I&apos;m Ben Meyers, the guy behind Meyers Makes. You
                might&apos;ve seen me sharing my work on Instagram. I believe in
                turning spaces into something magical, and that&apos;s what
                Meyers Makes is all about. With my passion for craftsmanship and
                eye for detail, we&apos;re not just fixing and building -
                we&apos;re creating havens. Let&apos;s team up and bring your
                home dreams to life, one project at a time!
              </span>
              <Link
                href={"#booking"}
                className="max-sm:w-full text-center font-semibold uppercase text-[15px] text-black bg-button-color px-12 py-2 hover:bg-white border-button-color border-2 mt-8 max-sm:mt-4"
              >
                Schedule a booking
              </Link>
            </div>
            <div className="w-[35%] h-[26rem]  max-sm:w-full relative">
              <Image src={ben} layout="fill" objectFit="cover" alt="Ben pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
