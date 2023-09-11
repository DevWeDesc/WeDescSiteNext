"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "@/app/globals.css";
import { FreeMode, Pagination, Virtual, Navigation } from "swiper/modules";
import Logo from "@/images/LogoWeDesc.png";
import Rocket1 from "@/images/comece 1.png";
import Rocket2 from "@/images/Vector (10).png";
import { useEffect, useRef, useState } from "react";

export default function SwiperPlans() {
  const Ref = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(2);

  const images = [
    {
      title: "Gerenciado e Remoto",
      imgPath: Rocket1,
      description:
        "A WeDesc oferece serviços de gerenciamento remoto que atendem empresas de todos os tamanhos. Isso inclui atendimento rápido, serviços gerenciados essenciais, suporte contínuo e proteção contra ameaças digitais. Deixe-nos cuidar da sua tecnologia enquanto você concentra seus esforços em seus negócios.",
    },
    {
      title: "Full Service",
      imgPath: Rocket2,
      description:
        "Com foco nas empresas a partir de 40 funcionários, a WeDesc oferece um abrangente Serviço Full Service. Isso inclui atendimento personalizado, suporte avançado, gerenciamento de ameaças virtuais e muito mais. Deixe-nos cuidar da sua tecnologia para que você possa se concentrar no sucesso do seu negócio. Entre em contato para descobrir mais.",
    },
    {
      title: "Full Service",
      imgPath: Rocket2,
      description:
        "Com foco nas empresas a partir de 40 funcionários, a WeDesc oferece um abrangente Serviço Full Service. Isso inclui atendimento personalizado, suporte avançado, gerenciamento de ameaças virtuais e muito mais. Deixe-nos cuidar da sua tecnologia para que você possa se concentrar no sucesso do seu negócio. Entre em contato para descobrir mais.",
    },
    {
      title: "Gerenciado e Remoto",
      imgPath: Rocket1,
      description:
        "A WeDesc oferece serviços de gerenciamento remoto que atendem empresas de todos os tamanhos. Isso inclui atendimento rápido, serviços gerenciados essenciais, suporte contínuo e proteção contra ameaças digitais. Deixe-nos cuidar da sua tecnologia enquanto você concentra seus esforços em seus negócios.",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth < 428) {
          setSlidesPerView(1);
        } else {
          setSlidesPerView(2);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [slidesPerView]);

  return (
    <>
      <div
        ref={Ref}
        className="lg:px-10 h-full w-full flex flex-col  pt-14 border-[4px]  border-white rounded-[20px]"
      >
        <Image src={Logo} className="ml-2 lg:ml-12" alt="Logo WeDesc" />
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={40}
          freeMode={true}
          style={{ height: "150%" }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Virtual, Navigation]}
          className=" px-2 pb-10"
          navigation={true}
        >
          {images.map((info, index) => (
            <SwiperSlide
              style={{
                backgroundColor:
                  info.title === "Full Service" ? "#FECC09" : "#075985",
                color: info.title === "Full Service" ? "black" : "white",
              }}
              className="shadow-2xl lg:max-w-[380px] rounded-[20px] items-start lg:px-[10px] h-full flex flex-col bg-[#075985]"
              key={index}
              virtualIndex={index}
            >
              <Image
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "35px",
                  width: info.imgPath === Rocket1 ? "73px" : "53px",
                  height: "73px",
                  objectFit: "contain",
                  marginBottom: "20px",
                  gap: "10px",
                }}
                src={info.imgPath}
                alt="Imagem de cada sessão do card"
              />
              <p className="w-6 h-[2px] bg-black absolute left-[40px] top-[105px] lg:top-[100px] lg:left-[20px]" />
              <div className="px-4 absolute top-[150px] flex flex-col gap-8">
                <h4 className="text-[18px] font-bold text-left px-6 lg:px-2">
                  {info.title}
                </h4>
                <p className="text-base px-6 lg:px-2 text-left">
                  {info.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
