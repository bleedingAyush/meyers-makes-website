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

// scroll to a section
// form submit
// make the links workable
// privacy policy/terms of use page
// contact us page

export default function Home() {
  return (
    <main>
      {/* nav */}
      <div className="relative z-10 lg:bg-logo-color bg-transparent w-full lg:h-36 h-fit flex justify-center">
        <Header />
        <Nav />
      </div>
      {/* hero */}
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
      <Footer />
    </main>
  );
}
