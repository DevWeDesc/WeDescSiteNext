import ImageLogo from "@/images/LogoWeDesc.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="mt-60 border-t-[1px] border-b-[1px] py-10">
        <div className="flex justify-evenly items-start">
          <Image
            src={ImageLogo}
            className="object-contain w-[150px]"
            alt="Logo WeDesc"
          />
          <div className="flex flex-col text-[18px]">
            {" "}
            <h3 className="text-2xl font-bold">Explorar</h3>
            <p>
              <a href="#Init" title="Inicio"> Inicio</a>
            </p>
            <p>
              <a href="#Service" title="Serviços"> Serviços</a>
            </p>
            <p>
              <a href="#Plans" title="Planos">Planos de atendimento</a>
            </p>
            <p>
              <a href="#Contact" title="Contato"> Contato </a>
            </p>
          </div>
          <div className="flex flex-col text-[18px]">
            {" "}
            <h3 className="text-2xl font-bold">Legal</h3>
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
