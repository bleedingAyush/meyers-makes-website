import Image from "next/image";
import React from "react";
// import form from "../../public/form.svg";
import Card from "./Card";
import calculator from "../../../public/calculator.svg";
import calendar from "../../../public/calendar.svg";
import handyman from "../../../public/handyman.svg";
import form from "../../../public/form.svg";

const Process = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-white py-28 xl:py-36 max-sm:py-16">
        <div className="w-full max-w-[1200px]">
          <div className="w-full flex justify-center">
            <h2 className=" font-medium leading-snug font-semibold text-5xl max-sm:text-3xl border-b-2 border-button-color w-fit px-2">
              Our Process
            </h2>
          </div>
          {/*  */}
          <div className="w-full xl:pt-28 pt-20 max-sm:pt-16 max-sm:grid-cols-1 max-sm:gap-y-8 grid grid-cols-4 justify-items-center">
            <Card
              step="step 1"
              title={"Fill the form"}
              image={form}
              description={
                "Fill out our booking form to kick-start your project journey."
              }
            />
            <Card
              step="step 2"
              title="Get estimate"
              image={calculator}
              description={
                "Expect a detailed estimate tailored to your project needs and budget"
              }
            />
            <Card
              step="step 3"
              title="Pick service time"
              image={calendar}
              description={
                "Choose a convenient time slot that fits your schedule."
              }
            />
            <Card
              step="step 4"
              title="Your Pro arrives"
              image={handyman}
              description={
                "Watch as our skilled professionals bring your project to life with expertise and care."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
