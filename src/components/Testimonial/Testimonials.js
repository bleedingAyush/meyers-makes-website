import Image from "next/image";
import React from "react";
import meeting from "../../../public/meeting.jpg";
import derek from "../../../public/derek.jpg";
import Star from "../../../public/Star.svg";
import facebook from "../../../public/facebook.svg";
import Card from "./Card";

const Testimonials = () => {
  return (
    <>
      <div className="relative w-full max-sm:h-[110vh] h-screen xl:h-[100vh] flex justify-center">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(13, 13, 13, 0.51) 4.45%, rgba(13, 13, 13, 0.65) 100%)",
          }}
          className="absolute left-0 w-full  h-full"
        ></div>
        <Image
          src={meeting}
          className="-z-10"
          layout="fill"
          objectFit="cover"
          alt="meeting"
        />
        <div className="py-28 xl:py-36 max-sm:py-16 max-sm:px-4 z-10  max-w-[1100px] w-full flex flex-col xl:justify-center gap-12 max-sm:gap-16">
          <div className="w-full flex justify-center ">
            <div className="w-full">
              <div className="w-full flex justify-center">
                <h2 className=" font-medium text-white leading-snug font-semibold text-5xl max-sm:text-3xl border-b-2 border-button-color w-fit px-2">
                  Testimonials
                </h2>
              </div>
              {/*  */}
              <div className="xl:pt-28 pt-20 max-sm:pt-16 w-full flex max-sm:flex-col max-sm:gap-8 justify-between">
                <Card
                  name="Derek Blackwell"
                  image="derek.jpg"
                  review="I recently hired Ben to build a fence and install lights around my
                  house, and I am thoroughly impressed. The craftsmanship is top-notch.
                  Ben's team was punctual, reliable, and offered excellent service.
                  Highly recommended!"
                />
                <Card
                  name="Devon Fulcher"
                  image="devon.jpg"
                  review="Ben made us a beautiful very large hexagon shelving unit that turned out amazing and fit the space perfectly. Ben also helped us hang our barn door as well which saved me so much time since he actually knew what he was doing! Ben's very talented and knows how to make quality stuff!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
