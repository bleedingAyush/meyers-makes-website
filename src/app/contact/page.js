import Layout from "@/components/Layout";
import React from "react";

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-[100vh] flex justify-center">
        <div className="max-w-[1000px] py-24 px-2 w-full flex flex-col gap-4">
          <span className="font-bold text-4xl text-black">Contact Us</span>
          <span className="font-bold text-2xl text-link-color">
            Our team would love to hear from you
          </span>
          <form className="flex flex-col gap-4 mt-6 w-96 max-sm:w-full">
            <input
              type="text"
              className="px-2 py-2 bg-formColor focus:outline-none focus:border-button-color"
              placeholder="Name"
            />
            <input
              type="email"
              className="px-2 py-2 bg-formColor focus:outline-none focus:border-button-color"
              placeholder="Email"
            />
            <textarea
              type="text"
              className="px-2 w-full h-40 py-2 bg-formColor focus:outline-none focus:border-button-color"
              placeholder="Your Message"
            />
            <button className="max-sm:w-full  text-center font-semibold text-lg text-black bg-button-color px-12 py-2 hover:bg-white border-button-color border-2 mt-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
