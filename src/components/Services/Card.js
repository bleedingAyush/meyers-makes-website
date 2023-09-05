import React from "react";
import roofing from "../../../public/roofing.jpg";
import Image from "next/image";

const Card = ({ title, description, image }) => {
  return (
    <>
      <div className="bg-white h-64 w-72 flex flex-col justify-between pb-2">
        <div className="h-[50%] relative">
          <Image
            src={`/${image}`}
            objectFit="cover"
            layout="fill"
            alt="Picture of the roofing"
          />
        </div>
        <div className="flex flex-col px-2">
          <span className="font-semibold text-lg">{title}</span>
          <span className="text-link-color">{description}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
