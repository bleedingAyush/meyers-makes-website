import Image from "next/image";
import Logo from "../../public/logo.jpg";
import Link from "next/link";
import { Outfit } from "next/font/google";
import Map from "../../public/mapmarker.svg";
import Mail from "../../public/mail.svg";
import Phone from "../../public/phone.svg";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import HeroImg from "../../public/hero1.jpg";
import Line2 from "../../public/line2.svg";

export default function Home() {
  // transform: translate(-50%,-50%) convert his into tailwind copilot code

  return (
    <main>
      {/* nav */}
      <div className="relative z-10 lg:bg-logo-color bg-transparent w-full lg:h-36 h-0 flex justify-center">
        <Header />
        <Nav />
      </div>
      {/* hero */}
      <div className="relative w-full h-[32rem] flex justify-center">
        <Image
          src={HeroImg}
          className="-z-10"
          layout="fill"
          objectFit="cover"
          alt="Mountains"
        />
        <div className="py-20 z-10 max-w-[1200px] w-full flex flex-col">
          <h1 className="text-6xl w-[65%] leading-snug tracking-[0.015em] capitalize font-bold text-white">
            <span>Your</span>
            <span className="relative">
              <span> Trusted </span>
              <svg
                className="absolute transform translate-x-[-50%] translate-y-[-70%] left-[50%] "
                width="222"
                height="18"
                viewBox="0 0 222 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 16.5C37 -4.5 142.647 0.140907 221 10"
                  stroke="#F2B72F"
                  stroke-width="3"
                />
              </svg>
            </span>
            <span className="mt-4">Local Partner for Home Transformation.</span>
          </h1>
          <div>
            <span>
              Your Trusted Partner for Home Repairs and Improvements:
              Professional Handyman Services at Your Doorstep. Schedule your
              booking now to secure your complimentary project estimate.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
