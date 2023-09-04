"use client";
import Image from "next/image";
import Logo from "@/images/LogoWeDesc.png";
import { Nav } from "../Nav/Nav";
import Search from "@/images/Vector (9).png";
import Menu from "@/images/Mask group.png";
import { useState } from "react";

export const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="fixed z-10 w-screen h-[68px] px-0 lg:px-[8%] flex justify-between bg-white">
      <div className="h-[68px] w-full lg:px-[90px] flex justify-center m-auto 2xl:max-w-[1460px]">
        <div className="w-full flex justify-between px-4 py-[14px] items-center ">
          <div className="lg:hidden">
            <Image
              src={Menu}
              alt=""
              onClick={() => (nav === true ? setNav(false) : setNav(true))}
            />
          </div>
          <div>
            <Image className="lg:h-7" src={Logo} alt="Logo WeDesc" />
          </div>
          <div>
            <Image className="lg:hidden mr-2" src={Search} alt="" />
            <Nav styleNav={nav} />
          </div>
        </div>
      </div>
    </div>
  );
};
