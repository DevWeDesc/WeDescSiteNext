import ImageLogo from "@/images/LogoWeDesc.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="mt-60 border-t-[1px] border-b-[1px] py-10">
        <div className="flex justify-evenly items-start">
          <Image src={ImageLogo} className="object-contain w-[150px]" alt="" />
          <div className="flex flex-col text-[18px]">
            {" "}
            <h2 className="text-2xl font-bold">Explorar</h2>
            <p>Inicio</p>
            <p>Serviços</p>
            <p>Planos de atendimento</p>
            <p>Contato</p>
          </div>
          <div className="flex flex-col text-[18px]">
            {" "}
            <h2 className="text-2xl font-bold">Legal</h2>
            <p>Termos</p>
            <p>Politica de privacidade</p>
          </div>
        </div>
      </div>
      <p className="text-center font-semibold py-10 pb-5 text-[18px]">
        Copyright © wedesc 2023. All rights reserved.
      </p>
    </>
  );
};
