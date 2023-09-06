"use client";
import { useState } from "react";
import ImgButton from "@/images/imgButtonNav.png";
import { LiProps } from "../../interfaces/interfaces";
import Image from "next/image";

const Li = ({ Ref, text, children, selected, onClick }: LiProps) => {
  return (
    <li>
      <div>
        <li className="cursor-pointer" onClick={onClick}>
          <a
            href={Ref}
            title={text}
            className="hover:text-[17px] transition-[10s]"
          >
            {text}
            {children}
          </a>
        </li>
        {text === selected && (
          <li>
            <p className="w-[38.17px] h-[2px] bg-gradient-to-r from-[#A14BD1] via-[#81D4E8]"></p>
          </li>
        )}
      </div>
    </li>
  );
};

type PropsStyle = {
  styleNav: boolean;
};

export const Nav = ({ styleNav }: PropsStyle) => {
  const [selected, setSelected] = useState("Inicio");
  return (
    <nav
      className={
        styleNav == true
          ? "opacity-100 z-10 h-screen w-screen flex items-center justify-center fixed lg:flex"
          : "opacity-0 hidden fixed lg:opacity-100 lg:relative lg:flex"
      }
    >
      <ul className="flex flex-col fixed items-center justify-center h-full w-full xl:flex-row xl:gap-7 xl:relative ">
        <Li
          Ref="#Init"
          text="Inicio"
          selected={selected}
          onClick={() => setSelected("Inicio")}
        />
        <Li
          Ref="#Service"
          text="Nossos Serviços"
          selected={selected}
          onClick={() => setSelected("Nossos Serviços")}
        />
        <Li
          Ref="#Plans"
          text="Planos de Atendimento"
          selected={selected}
          onClick={() => setSelected("Planos de Atendimento")}
        />
        <Li
          Ref="#Contact"
          text="Contato"
          selected={selected}
          onClick={() => setSelected("Contato")}
        />

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
