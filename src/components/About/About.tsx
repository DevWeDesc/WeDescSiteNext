"use client";
import BoxImage from "@/images/caixinha.png";
import lineService from "@/images/Vector 10.png";
import Rectangle from "@/images/Rectangle 42.png";
import Image from "next/image";
import { Services } from "../Services/Services";
import ImageMobile from "@/images/Rectangle 42 (1).png";
import LineImage from "@/images/Vector 10 (2).png";

export const About = () => {
  return (
    <div className="w-full">
      <p className="m-auto mt-[40px] h-[1px] w-[1254px] bg-[#84CC16] mb-[40px]"></p>
      <div className="flex flex-col justify-between w-full">
        <div className="grid lg:grid-cols-2 h-[800px] lg:h-auto grid-rows-2 lg:grid-rows-1 gap-10 relative max-w-[1460px] m-auto">
          <div className="z-[1] h-[250px] lg:h-auto hover:scale-105 transition-[10s]">
            <Image src={BoxImage} alt="Imagem de Sobre" />
          </div>
          <div className="flex p-6 flex-col align-center text-center lg:text-left lg:align-right lg:pr-[130px]">
            <h2 className="text-[44px] font-bold flex">
              Sobre a<h1> WeDesc</h1>
            </h2>
            <p>
              Na Wedesc, nossa jornada é um compromisso contínuo em moldar o
              sucesso das empresas por meio da tecnologia. Desde o início,
              acreditamos no poder transformador da inovação e do
              comprometimento. Começamos como um sonho de proporcionar soluções
              de TI excepcionais que ultrapassam as expectativas. Ao longo dos
              anos, esse sonho se transformou em realidade, à medida que
              construímos parcerias duradouras com empresas de todos os
              tamanhos. Nossa equipe apaixonada e dedicada é o coração da
              Wedesc. Com vasta experiência e um olhar atento para as
              tendências, estamos sempre prontos para enfrentar os desafios
              tecnológicos em evolução. Cada etapa da nossa história foi marcada
              por momentos de crescimento, aprendizado e inovação. Fomos
              moldados pelas histórias de sucesso das empresas que ajudamos a
              impulsionar.
            </p>
            <div id="Service"></div>
          </div>
        </div>
        <Image
          alt=""
          src={LineImage}
          className="w-full absolute pt-[1030px] z-[-2] lg:hidden"
        ></Image>
        <Image
          alt=""
          src={ImageMobile}
          className="absolute pt-[1050px] z-[-2] lg:hidden"
        ></Image>
        <Image
          alt=""
          src={ImageMobile}
          className="absolute pt-[2950px] z-[-2] lg:hidden"
        ></Image>
        <Image
          alt=""
          src={ImageMobile}
          className="absolute pt-[4550px] z-[-2] lg:hidden"
        ></Image>

        <Image
          src={lineService}
          className="hidden lg:block absolute lg:pt-[400px] pt-[360px] w-full z-[-2]"
          alt=""
        />
        <Image
          src={Rectangle}
          className="hidden lg:block absolute lg:pt-[410px] pt-[402px] 2xl:max-h-[4000px] w-full "
          alt=""
        />

        <Image
          src={Rectangle}
          className="hidden lg:block absolute lg:pt-[2000px] 2xl:pt-[1100px] w-full "
          alt=""
        />

        <Services />
      </div>
    </div>
  );
};
