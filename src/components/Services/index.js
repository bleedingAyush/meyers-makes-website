import Image from "next/image";
import React from "react";
import Card from "./Card";
import Link from "next/link";
import phone from "../../../public/phone.svg";
import ScrollLink from "../Scrolllink";

const items = [
  {
    title: "Roofing",
    description:
      "Complete roofing care: We skillfully install shingles, tiles, and gutters, and provide thorough maintenance.",
    image: "roofing.jpg",
  },
  {
    title: "Carpentry",
    description:
      "Building, repairing, or installing structures made of wood, such as cabinets, shelves, and decks.",
    image: "carpentery.jpg",
  },
  {
    title: "Flooring",
    description:
      "Skilled at installing and fixing various flooring types—hardwood, laminate, tile, and carpet included.",
    image: "flooring.jpg",
  },
  {
    title: "Handyman Services",
    description:
      "Versatile handyman services for all your home needs. From fixing to enhancing, we've got you.",
    image: "handyman.jpg",
  },
  {
    title: "Sheds",
    description:
      "Let's tidy up your space! Depend on us for friendly shed installations and organized solutions.",
    image: "sheds.jpg",
  },
  {
    title: "Decks and docks",
    description:
      "Designing smiles with cozy decks and reliable docks. Enjoy the outdoors, we've got you covered!",
    image: "decks.jpg",
  },
];

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="w-full flex justify-center bg-teal py-28 max-sm:py-16"
      >
        <div className="w-full max-w-[1200px]">
          <div className="w-full flex justify-center">
            <h2 className=" font-medium leading-snug font-semibold text-5xl max-sm:text-3xl border-b-2 border-button-color w-fit px-2">
              Our Services
            </h2>
          </div>
          <div className="pt-20 max-sm:pt-16 grid gap-y-20 max-sm:gap-y-8 justify-items-center max-sm:grid-cols-1 grid-cols-3 grid-rows-auto">
            {items.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
          <div className="w-full flex justify-center pt-20">
            <div className="flex max-sm:flex-col items-center gap-12 max-sm:gap-8">
              <ScrollLink
                href={"#booking"}
                className="max-sm:w-full text-center font-semibold uppercase text-[15px] text-black bg-button-color px-12 py-2.5 hover:bg-white"
              >
                Schedule a booking
              </ScrollLink>
              <Link
                href={"tel:+1 226-868-1749"}
                className="flex gap-1.5 items-center"
              >
                <Image src={phone} height={18} alt="phone svg" />
                <span className="text-black font-medium text-xl">
                  +1 226-868-1749
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
