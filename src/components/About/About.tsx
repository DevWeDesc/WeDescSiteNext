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
      <p className="m-auto mt-[40px] h-[1px] w-full bg-[#84CC16] xl:mb-20" />
      <div className="flex flex-col justify-between w-full">
        <div className=" flex flex-col-reverse lg:mt-8 lg:grid lg:grid-cols-2 h-auto lg:h-auto grid-rows-2 lg:grid-rows-1 gap-10 relative max-w-[1460px] m-auto">
          <div className="z-[1] h-auto lg:h-auto hover:scale-105 transition-[10s] px-2 xl:px-6">
            <Image src={BoxImage} alt="Imagem de Sobre" />
          </div>
          <div className="bg-white shadow-2xl z-[1] flex p-6 flex-col align-center  justify-center lg:text-left lg:align-right lg:p-8 lg:mx-3 rounded-[20px]">
            <h2 className="text-4xl lg:text-[44px]  w-full  font-bold flex lg:flex lg:justify-normal pb-4">
              Sobre a<span style={{ marginRight: "10px" }}></span>
              <h1> WeDesc</h1>
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
            <div id="Service" />
          </div>
        </div>
        <Image
          alt=""
          src={LineImage}
          className="w-screen absolute pt-[1090px] z-[-2] lg:hidden"
        ></Image>
        <Image
          alt=""
          src={ImageMobile}
          className="w-screen absolute pt-[1100px] z-[-2] lg:hidden"
        ></Image>
        <Image
          alt=""
          src={ImageMobile}
          className="w-screen absolute pt-[2550px] z-[-2] lg:hidden"
        ></Image>
        <Image
          alt=""
          src={ImageMobile}
          className="w-screen absolute pt-[4350px] z-[-2] lg:hidden"
        ></Image>
        <Image
          alt=""
          src={ImageMobile}
          className="w-screen absolute pt-[6150px] z-[-2] lg:hidden"
        ></Image>

        <Image
          src={lineService}
          className="hidden lg:block absolute lg:pt-[400px] xl:pt-[390px] pt-[360px] 2xl:pt-[340px] w-full z-[-2]"
          alt=""
        />
        <Image
          src={Rectangle}
          className="z-[-2] hidden lg:block lg:pt-[420px] absolute xl:pt-[418px] pt-[402px] 2xl:pt-[380px]  w-full "
          alt=""
        />

        <Image
          src={Rectangle}
          className="z-[-2] hidden lg:block lg:pt-[2090px] absolute xl:pt-[2500px] 2xl:pt-[1280px] w-full "
          alt=""
        />
        <Image
          src={Rectangle}
          className="z-[-2] hidden lg:block lg:pt-[3780px] absolute xl:hidden w-full "
          alt=""
        />

        <Services />
      </div>
    </div>
  );
};
