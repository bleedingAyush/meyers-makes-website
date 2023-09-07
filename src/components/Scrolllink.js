import Link from "next/link";
import React from "react";
// mirror the props of next/link component
// component definition
const ScrollLink = ({ children, ...props }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const height = window.innerHeight * 1.5;
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    const bodyHeight = document.body.scrollHeight;

    const scrollTobookingSection = bodyHeight - height;
    console.log("scrollTobookingSection", scrollTobookingSection);
    console.log("bodyheight", bodyHeight);

    window.scrollTo({
      top: scrollTobookingSection,
      behavior: "smooth",
    });
    // window.scrollTo(0, scrollTobookingSection);
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;
