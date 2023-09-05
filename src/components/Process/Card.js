import Image from "next/image";
import React from "react";
import form from "../../../public/form.svg";

const Card = ({ title, image, step, description }) => {
  return (
    <>
      <div className="bg-teal relative h-72 w-64 flex flex-col justify-between pb-12 overflow-hidden">
        <div className="absolute top-3 uppercase flex items-center justify-center -left-5 w-24 rotate-[-38deg] bg-[#946F19] text-white text-xs">
          {step}
        </div>
        <div className="h-[50%] relative pt-8 flex items-center justify-center">
          <Image src={image} alt="Picture of the roofing" />
        </div>
        <div
          className={
            step == "step 3"
              ? "flex h-[45%] flex-col justify-start mt-9 px-2 text-center"
              : "flex h-[45%] flex-col justify-start mt-8 px-2 text-center"
          }
        >
          <span className="font-medium text-lg">{title}</span>
          <span className="text-link-color">{description}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
