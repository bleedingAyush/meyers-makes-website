"use client";

import Layout from "@/components/Layout";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Toast from "@/libs/Toast";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "too short!")
    .max(20, "too long!")
    .required("required"),
  email: Yup.string().email("invalid").required("required"),
  message: Yup.string()
    .min(2, "too short!")
    .max(50, "too long!")
    .required("required"),
});

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = {
      name: event.target.name.value,
      email: event.target.email.value,
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

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  async function submitRequest(values) {
    const formData = new FormData(values);

    try {
      startLoading();
      const data = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (data.ok) {
        stopLoading();
        toast.success("Request submitted successfully");
      } else {
        throw new Error("Something went wrong", data.status);
      }
    } catch (err) {
      stopLoading();
      toast.error(err.message);
    }
  }

  return (
    <>
      <Layout>
        <div className="min-h-[100vh] flex justify-center">
          <div className="max-w-[1000px] py-24 px-2 w-full flex flex-col gap-4">
            <span className="font-bold text-4xl text-black">Contact Us</span>
            <span className="font-bold text-2xl text-link-color">
              Our team would love to hear from you
            </span>
            <form
              netlify
              method="post"
              name="contactForm"
              data-netlify-recaptcha="true"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-6 w-96 max-sm:w-full"
            >
              <input
                name="name"
                type="text"
                className="px-2 py-2 bg-formColor focus:outline-none focus:border-button-color"
                placeholder="Name"
              />
              <input
                name="email"
                type="email"
                className="px-2 py-2 bg-formColor focus:outline-none focus:border-button-color"
                placeholder="Email"
              />
              <textarea
                name="message"
                type="text"
                className="px-2 w-full h-40 py-2 bg-formColor focus:outline-none focus:border-button-color"
                placeholder="Your Message"
              />
              <div data-netlify-recaptcha="true"></div>
              <button
                disabled={isLoading}
                className="max-sm:w-full  text-center font-semibold text-lg text-black bg-button-color px-12 py-2 hover:bg-white border-button-color border-2 mt-2"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </Layout>
      <Toast />
    </>
  );
};

export default Contact;
