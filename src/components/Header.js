import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.jpg";
import Link from "next/link";
import map from "../../public/mapmarker.svg";
import mail from "../../public/mail.svg";
import phone from "../../public/phone.svg";

const Header = () => {
  return (
    <>
      <div className="max-w-[1200px] lg:flex hidden items-center w-full flex justify-between">
        <Image src={Logo} height={110} alt="logo" />
        <div className="flex w-[45%] justify-between items-center">
          <div className="flex gap-1.5">
            <Image src={map} height={18} alt="" />
            <span className="font-medium text-white">Ontario, Canada</span>
          </div>
          <Link href={"mailto:Benmeyers94@gmail.com"} className="flex gap-2">
            <Image src={mail} height={18} alt="" />
            <span className="font-medium text-white">
              Benmeyers94@gmail.com
            </span>
          </Link>
          <Link href={"tel:+1 226-168-1749"} className="flex gap-1.5">
            <Image src={phone} height={18} alt="" />
            <span className="text-white font-medium">+1 226-168-1749</span>
          </Link>
        </div>
        <Link
          href={""}
          className="font-semibold uppercase text-[15px] text-black bg-button-color px-6 py-2.5"
        >
          Schedule a booking
        </Link>
      </div>
    </>
  );
};

export default Header;
