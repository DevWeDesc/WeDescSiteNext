"use client";
import { useState } from "react";
import { Links } from "./LinksNav";
import ImgButton from "@/images/imgButtonNav.png";
import { LiProps } from "../../interfaces/interfaces";
import Image from "next/image";

const Li = ({ Ref, text, children, selected, onClick }: LiProps) => {
  return (
    <li>
      <div>
        <li className="text-2xl lg:text-lg cursor-pointer" onClick={onClick}>
          <a
            href={Ref}
            title={text}
            className=" hover:text-[19px] transition-[10s]"
          >
            {text}
            {children}
          </a>
        </li>
        {text === selected && (
          <li>
            <p className="w-[38.17px] h-[2px] bg-gradient-to-r from-[#A14BD1] via-[#81D4E8]" />
          </li>
        )}
      </div>
    </li>
  );
};

type PropsStyle = {
  styleNav: boolean;
  setStyleNav: () => void;
};

export const Nav = ({ styleNav, setStyleNav }: PropsStyle) => {
  const [selected, setSelected] = useState("Inicio");
  return (
    <nav
      className={
        styleNav
          ? "transition-all lg:relative lg:right-0 lg:w-full lg:top-0 lg:h-full lg:backdrop-brightness-[200] fixed bg-white left-0 top-12 h-[94vh] w-screen z-10 opacity-100"
          : "fixed top-0 transition-all w-full opacity-0 h-0 lg:opacity-100 lg:relative lg:right-0 lg:w-full lg:top-0 lg:h-full lg:backdrop-brightness-[200]"
      }
    >
      <ul className="flex flex-col gap-10 items-center justify-center h-full w-full xl:flex-row xl:gap-7 xl:relative ">
        {Links.map((link, index) => (
          <Li
            Ref={link.Ref}
            text={link.text}
            key={index}
            selected={selected}
            onClick={() => {
              setSelected(link.text);
              setStyleNav();
            }}
          ></Li>
        ))}
        <Li selected={selected} onClick={() => setSelected("Inicio")}>
          <a
            href="https://we-desc.vercel.app/"
            title="WeDesc Code"
            target="_blank"
          >
            <button className="h-[40px] font-bold flex items-center gap-[4.27px] border-solid border-[1px] border-black py-[7px] px-[9px] rounded-md transition-all hover:bg-gray-100">
              WeDesc Code
              <Image
                src={ImgButton}
                alt="Icon de botão"
                width={17}
                height={17}
              />
            </button>
          </a>
        </Li>
      </ul>
    </nav>
  );
};
