import Link from "next/link";
import React from "react";
import phone from "../../public/phone.svg";
import Image from "next/image";
import ScrollLink from "./Scrolllink";

const MiddleCTA = () => {
  return (
    <>
      <div className="w-full bg-logo-color">
        <div className="max-w-[1000px] max-sm:text-center mx-auto flex max-sm:flex-col justify-between items-center py-8 max-sm:px-4 max-sm:gap-8">
          <span className="text-white w-[40%] max-sm:w-full  text-4xl max-sm:text-2xl font-semibold">
            We offer high-quality services at great prices.
          </span>
          <div className="flex justify-end">
            <div className="flex flex-col items-center gap-12 gap-8">
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
                <span className="text-white font-medium text-xl">
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

export default MiddleCTA;
