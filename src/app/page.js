import Image from "next/image";
import Logo from "../../public/logo.jpg";
import Link from "next/link";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process/Process";
import phone from "../../public/phone.svg";
import MiddleCTA from "@/components/MiddleCTA";
import About from "@/components/About";
import Testimonials from "@/components/Testimonial/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Toast from "@/libs/Toast";

// form submit
// privacy policy/terms of use page
// contact us form
// test the layout in diff browsers

export default function Home() {
  return (
    <>
      {/* hero */}
      <Layout>
        <Hero />
        {/* services */}
        <Services />
        {/* process */}
        <Process />
        {/* CTA */}
        <MiddleCTA />
        {/* about */}
        <About />
        {/*  */}
        <Testimonials />
        <div className="bg-teal h-2 w-full"></div>
        <CTA />
      </Layout>
      <Toast />
    </>
  );
}
