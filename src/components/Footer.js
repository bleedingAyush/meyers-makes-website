import React from "react";
import logo from "../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import map from "../../public/mapmarker.svg";
import mail from "../../public/mail.svg";
import phone from "../../public/phone.svg";
import instagram from "../../public/instagram.svg";
import facebook from "../../public/facebookWhite.svg";
import igphoto1 from "../../public/igphoto1.jpg";
import igphoto2 from "../../public/igphoto2.jpg";
import igphoto3 from "../../public/igphoto3.jpg";
import igphoto4 from "../../public/igphoto4.jpg";
import igphoto5 from "../../public/igphoto5.jpg";

const Footer = () => {
  return (
    <div className="w-full relative flex justify-center bg-logo-color py-24 xl:py-32 max-sm:py-20">
      <div className="w-full max-w-[1200px]">
        <div className="flex max-sm:flex-col max-sm:px-4 max-sm:gap-8 justify-between">
          <div className="flex flex-col">
            <Image src={logo} height={120} alt="Logo" />
            <span className="text-2xl max-sm:text-xl mt-4 font-semibold text-white">
              Meyers Makes & Maintenance
            </span>
            <span className="text-white text-xl max-sm:text-lg w-72">
              We are committed to the best quality services.
            </span>
          </div>
          {/* <div className="flex flex-col gap-2">
            <div className="font-medium text-white text-lg">Explore</div>
            <Link href={""} className="text-formColor">
              Home
            </Link>
            <Link href={""} className="text-formColor">
              About us
            </Link>
            <Link href={""} className="text-formColor">
              Services
            </Link>
            <Link href={""} className="text-formColor">
              Contact
            </Link>
          </div> */}
          {/*  */}
          <div className="flex flex-col gap-2 ">
            <span className="font-medium text-lg text-white">Contact Info</span>
            <div className="flex gap-1.5">
              <Image src={map} height={18} alt="map svg" />
              <span className=" text-white">Ontario, Canada</span>
            </div>
            <Link href={"mailto:Benmeyers94@gmail.com"} className="flex gap-2">
              <Image src={mail} height={18} alt="mail svg" />
              <span className="text-white">Benmeyers94@gmail.com</span>
            </Link>
            <Link href={"tel:+1 226-168-1749"} className="flex gap-1.5">
              <Image src={phone} height={18} alt="phone svg" />
              <span className="text-white ">+1 226-168-1749</span>
            </Link>
            {/*  */}
            <div className="flex mt-2 flex-col gap-2 ">
              <span className="font-medium text-lg text-white">Social</span>
              <Link
                href={"https://www.facebook.com/meyers.diy"}
                className="flex gap-2"
                target="_blank"
              >
                <Image src={facebook} height={18} alt="fb svg" />
                <span className="text-white">Facebook</span>
              </Link>
              <Link
                href={"https://www.instagram.com/meyers.makes/"}
                target="_blank"
                className="flex gap-2"
              >
                <Image src={instagram} height={18} alt="insta svg" />
                <span className="text-white">Instagram</span>
              </Link>
            </div>
          </div>

          <Link
            href="https://www.instagram.com/meyers.makes/"
            target="_blank"
            className="flex flex-col gap-2"
          >
            <span className="text-lg text-white font-medium">
              Check us out on Instagram:
            </span>
            <div className="grid grid-cols-3 gap-1">
              <div className="w-24 h-24 relative">
                <Image
                  src={igphoto1}
                  layout="fill"
                  objectFit="cover"
                  alt="ig photo1"
                />
              </div>
              <div className="w-24 h-24 relative">
                <Image
                  src={igphoto2}
                  layout="fill"
                  objectFit="cover"
                  alt="ig photo2"
                />
              </div>
              <div className="w-24 h-24 relative">
                <Image
                  src={igphoto3}
                  layout="fill"
                  objectFit="cover"
                  alt="ig photo3"
                />
              </div>
              <div className="w-24 h-24 relative">
                <Image
                  src={igphoto4}
                  layout="fill"
                  objectFit="cover"
                  alt="ig photo4"
                />
              </div>
              <div className="w-24 h-24 relative">
                <Image
                  src={igphoto5}
                  layout="fill"
                  objectFit="cover"
                  alt="ig photo5"
                />
              </div>
              <div className="w-24 h-24 relative">
                <Image
                  src={"/carpentery.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt="ig photo6"
                />
              </div>
            </div>
          </Link>
        </div>
        <span className="text-white absolute bottom-2 max-sm:left-4">
          © 2023 Meyers Makes & Maintenance. All rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
