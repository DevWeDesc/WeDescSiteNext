import ImageLogo from "@/images/Logo-WeDesc-2.png";
import ImageLogoMobile from "@/images/image (2).png";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="justify-center bg-[#1B2D49] text-white lg:bg-white lg:text-black lg:mt-40 border-t-[1px] border-b-[1px] py-10">
        <div className="flex flex-col items-center text-center lg:text-start lg:flex-row justify-evenly lg:items-start">
          <Image
            src={ImageLogo}
            className="object-contain w-[150px] hidden lg:block"
            alt="Logo WeDesc"
          />
          <div className="w-full lg:w-auto gap-4 lg:gap-0 flex flex-col text-[18px]">
            {" "}
            <h3 className="text-2xl font-bold">Explorar</h3>
            <p>
              <a href="#Init" title="Inicio">
                {" "}
                Inicio
              </a>
            </p>
            <p>
              <a href="#Service" title="Serviços">
                {" "}
                Serviços
              </a>
            </p>
            <p>
              <a href="#Plans" title="Planos">
                Planos de atendimento
              </a>
            </p>
            <p>
              <a href="#Contact" title="Contato">
                {" "}
                Contato{" "}
              </a>
            </p>
          </div>
          <div className="w-full gap-4 lg:gap-0 lg:w-auto mt-4 lg:mt-0 flex flex-col text-[18px]">
            {" "}
            <h3 className="text-2xl font-bold">Legal</h3>
            <p>Termos</p>
            <p>Politica de privacidade</p>
          </div>
          <Image
            src={ImageLogoMobile}
            className="object-scale-down py-8 w-[150px] block lg:hidden"
            alt="Logo WeDesc"
          />
        </div>
        <p className="text-center font-semibold lg:py-10 pb-5 text-[18px]">
          Copyright © wedesc 2023. All rights reserved.
        </p>
      </div>
    </>
  );
};
