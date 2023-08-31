"use client";
import { useState } from "react";
import ImgButton from "@/images/imgButtonNav.png";
import { LiProps } from "../../interfaces/interfaces";
import Image from "next/image";

const Li = ({ Ref, text, children, selected, onClick }: LiProps) => {
  return (
    <div>
      <li className="pr-10 cursor-pointer" onClick={onClick}>
        <a href={Ref}>
          {text}
          {children}
        </a>
      </li>
      {text === selected && (
        <p className="w-[38.17px] h-[2px] bg-gradient-to-r from-[#A14BD1] via-[#81D4E8]"></p>
      )}
    </div>
  );
};

export const Nav = () => {
  const [selected, setSelected] = useState("Inicio");
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center ">
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
          <button className="h-[40px] font-bold flex items-center gap-[4.27px] border-solid border-[1px] border-black py-[7px] px-[9px] rounded-md transition-all hover:bg-gray-100">
            WeDesc Code
            <Image src={ImgButton} alt="" width={17} height={17} />
          </button>
        </Li>
      </ul>
    </nav>
  );
};
