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
        <Link href={"/"}>
          <Image src={Logo} height={110} alt="logo" />
        </Link>
        <div className="flex w-[45%] justify-between items-center">
          <div className="flex gap-1.5">
            <Image src={map} height={18} alt="map svg" />
            <span className="font-medium text-white">Ontario, Canada</span>
          </div>
          <Link href={"mailto:Benmeyers94@gmail.com"} className="flex gap-2">
            <Image src={mail} height={18} alt="mail svg" />
            <span className="font-medium text-white">
              Benmeyers94@gmail.com
            </span>
          </Link>
          <Link href={"tel:+1 226-868-1749"} className="flex gap-1.5">
            <Image src={phone} height={18} alt="phone svg" />
            <span className="text-white font-medium">+1 226-868-1749</span>
          </Link>
        </div>
        <Link
          href={"#booking"}
          scroll={false}
          className="font-semibold uppercase text-[15px] text-black bg-button-color px-6 py-2.5 hover:bg-white"
        >
          Schedule a booking
        </Link>
      </div>
    </>
  );
};

export default Header;
