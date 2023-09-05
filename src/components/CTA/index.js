import Image from "next/image";
import React from "react";
import tools from "../../../public/tools.jpg";
import Link from "next/link";
import phone from "../../../public/phone2.svg";
import ben from "../../../public/ben.jpg";

const CTA = () => {
  return (
    <>
      <div
        id="booking"
        className="relative w-full max-sm:h-[110vh] h-screen xl:h-[90vh] flex justify-center"
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(13, 13, 13, 0.65) 1.38%, rgba(13, 13, 13, 0.39) 100%)",
          }}
          className="absolute left-0 w-full  h-full max-sm:h-fit"
        ></div>
        <Image
          src={tools}
          className="-z-10"
          layout="fill"
          objectFit="cover"
          alt="tools"
        />
        <div className="py-28 xl:py-36 max-sm:py-16 max-sm:px-4 z-10  max-w-[1100px] w-full flex flex-col gap-12 max-sm:gap-16">
          <div className="w-full flex max-sm:flex-col max-sm:gap-12 max-sm:items-center justify-between ">
            <div className="flex w-[45%] max-sm:w-full flex-col h-full max-sm:items-center justify-between">
              <span className="font-semibold text-3xl max-sm:text-center max-sm:text-2xl text-white">
                Let us help you fix everything from attics to basements and
                everything in between.
              </span>
              <Link
                href={""}
                className="flex justify-center items-center gap-8 w-80  max-sm:w-fit text-center font-semibold text-[15px] text-black bg-button-color px-4 py-2 hover:bg-white mt-8 max-sm:mt-4"
              >
                <div className="w-16 relative h-16">
                  <Image
                    src={ben}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-black text-xl">Consult with Ben</span>
                  <div
                    // href={"tel:+1 226-168-1749"}
                    className="flex gap-1.5 items-center"
                  >
                    <Image src={phone} height={16} alt="phone svg" />
                    <span className="text-black font-medium text-base">
                      +1 226-168-1749
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            {/*  */}

            <div className="bg-white h-fit w-[45%] max-sm:w-full px-6 py-8 flex flex-col items-center">
              <span className="text-center text-lg font-medium">
                Request your service
              </span>
              <form className="flex flex-col gap-4 mt-4 max-w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="border text-link-color bg-formColor focus:outline-none focus:border-button-color px-2 py-2"
                />
                <div className="flex justify-between">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border text-link-color bg-formColor focus:outline-none focus:border-button-color  px-2 py-2 w-[48%]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="border text-link-color bg-formColor focus:outline-none focus:border-button-color  px-2 py-2 w-[48%]"
                  />
                </div>
                <input
                  type="address"
                  placeholder="Your Address"
                  className="border text-link-color bg-formColor focus:outline-none focus:border-button-color px-2 py-2"
                />
                <input
                  type="text"
                  placeholder="What do you need help with?"
                  className="border text-link-color bg-formColor focus:outline-none focus:border-button-color px-2 py-2"
                />
                <div className="flex justify-between">
                  <input
                    type="text"
                    placeholder="Date of visit"
                    className="border text-link-color bg-formColor focus:outline-none focus:border-button-color  px-2 py-2 w-[48%]"
                  />
                  <input
                    type="text"
                    placeholder="Time of visit"
                    className="border text-link-color bg-formColor focus:outline-none focus:border-button-color  px-2 py-2 w-[48%]"
                  />
                </div>
                <button className="max-sm:w-full  text-center font-semibold uppercase text-[15px] text-black bg-button-color px-12 py-2.5 hover:bg-white border-button-color border-2 mt-2">
                  Schedule a booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
