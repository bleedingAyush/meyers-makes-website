import Image from "next/image";
import React from "react";
import derek from "../../../public/derek.jpg";
import Star from "../../../public/Star.svg";
import facebook from "../../../public/facebook.svg";

const Card = ({ name, image, review }) => {
  return (
    <>
      <div className="bg-teal w-[45%] max-sm:w-full">
        <div className="w-full bg-logo-color flex items-center justify-between px-6 py-2">
          <div className="flex gap-4">
            <Image
              src={`/${image}`}
              className="rounded-full"
              height={50}
              width={50}
              alt=""
            />
            <div className="flex flex-col items-start">
              <span className="font-medium text-white text-lg">{name}</span>
              <div className="flex gap-px">
                <Image src={Star} height={18} alt="" />
                <Image src={Star} height={18} alt="" />
                <Image src={Star} height={18} alt="" />
                <Image src={Star} height={18} alt="" />
                <Image src={Star} height={18} alt="" />
              </div>
            </div>
          </div>
          <div>
            <Image src={facebook} height={24} />
          </div>
        </div>

        <div className="px-6 py-4 text-link-color">{review}</div>
      </div>
    </>
  );
};

export default Card;
