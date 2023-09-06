"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import tools from "../../../public/tools.jpg";
import Link from "next/link";
import phone from "../../../public/phone2.svg";
import ben from "../../../public/ben.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const CTA = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "too short!")
      .max(20, "too long!")
      .required("required"),
    email: Yup.string().email("invalid").required("required"),
    address: Yup.string()
      .min(2, "too short!")
      .max(50, "too long!")
      .required("required"),
    phone: Yup.string()
      .min(10, "too short!")
      .max(15, "too long!")
      .required("required"),
    date: Yup.string().required("required"),
    time: Yup.string().required("required"),
    message: Yup.string()
      .min(2, "too Short!")
      .max(50, "too Long!")
      .required("required"),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = {
      name: event.target.name.value,
      email: event.target.email.value,
      address: event.target.address?.value,
      phone: event.target.phone?.value,
      date: event.target.date?.value,
      time: event.target.time?.value,
      message: event.target.message?.value,
    };
    try {
      // Validate the form using Yup
      await validationSchema.validate(values, { abortEarly: false });
      await submitRequest(event.target);
      // Handle form submission logic here if validation passes
    } catch (error) {
      error.inner.map((err, index) => {
        if (index === 0) {
          toast.warn(`${err.path} is ${err.message}`);
        }
      });
    }
  };

  async function submitRequest(values) {
    const formData = new FormData(values);

    try {
      const data = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (data.ok) {
        console.log({ data });
        toast.success("Request submitted successfully");
      } else {
        throw new Error("Something went wrong", data.status);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

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
        <div className="py-28 xl:py-36 max-sm:py-16 max-sm:px-4 z-10  max-w-[1100px] w-full flex flex-col xl:justify-center gap-12 max-sm:gap-16">
          <div className="w-full flex max-sm:flex-col max-sm:gap-12 max-sm:items-center justify-between ">
            <div className="flex w-[45%] max-sm:w-full flex-col h-full max-sm:items-center justify-between">
              <span className="font-semibold text-3xl max-sm:text-center max-sm:text-2xl text-white">
                Let us help you fix everything from attics to basements and
                everything in between.
              </span>
              <Link
                href={"tel:+1 226-168-1749"}
                className="flex justify-center items-center gap-8 w-80  max-sm:w-fit text-center font-semibold text-[15px] text-black bg-button-color px-4 py-2 hover:bg-white mt-8 max-sm:mt-4"
              >
                <div className="w-16 relative h-16">
                  <Image
                    src={ben}
                    alt="ben img"
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

              <form
                data-netlify="true"
                name="booking"
                className="flex flex-col gap-4 mt-4 max-w-full"
                onSubmit={handleSubmit}
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="border text-link-color bg-formColor focus:outline-none focus:border-button-color px-2 py-2"
                />

                <div className="flex justify-between">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="border text-link-color bg-formColor focus:outline-none focus:border-button-color  px-2 py-2 w-[48%]"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    className="border text-link-color bg-formColor focus:outline-none focus:border-button-color  px-2 py-2 w-[48%]"
                  />
                </div>
                <input
                  name="address"
                  type="address"
                  placeholder="Your Address"
                  className="border text-link-color bg-formColor focus:outline-none focus:border-button-color px-2 py-2"
                />
                <input
                  name="message"
                  type="text"
                  placeholder="What do you need help with?"
                  className="border text-link-color bg-formColor focus:outline-none focus:border-button-color px-2 py-2"
                />
                <div className="flex justify-between">
                  <input
                    name="date"
                    type="text"
                    placeholder="Date of visit"
                    className="border text-link-color bg-formColor focus:outline-none focus:border-button-color  px-2 py-2 w-[48%]"
                  />
                  <input
                    name="time"
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
