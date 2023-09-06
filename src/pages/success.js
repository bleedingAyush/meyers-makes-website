import Layout from "@/components/Layout";
import React from "react";
import "../app/globals.css";

const Success = () => {
  return (
    <Layout>
      <div className="pt-28  text-center w-full flex flex-col gap-8 h-screen">
        <span className="text-3xl max-sm:text-xl font-semibold text-black">
          Succesfully Submitted 🎉
        </span>
        <span className="text-2xl max-sm:text-lg font-medium text-link-color">
          We will get back to you shortly
        </span>
      </div>
    </Layout>
  );
};

export default Success;
