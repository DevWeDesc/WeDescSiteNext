"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "@/app/globals.css";
import { FreeMode, Pagination, Virtual, Navigation } from "swiper/modules";
import Logo from "@/images/LogoWeDesc.png";

export default function SwiperPlans() {
  const images = [
    {
      title: "Gerenciamento remoto e local",
      imgPath:
        "https://cdn.icon-icons.com/icons2/2715/PNG/512/rocket_icon_172240.png",
      description:
        "A Wedesc oferece serviços de gerenciamento remoto para empresas até 70 funcionários. Com atendimento abrangente, soluções completas, suporte especializado e proteção contra ameaças virtuais, garantimos eficiência e segurança para o seu ambiente tecnológico. Deixe-nos cuidar da sua tecnologia enquanto você foca no crescimento do seu negócio. Contate-nos para saber mais.",
    },
    {
      title: "Full Service",
      imgPath:
        "https://cdn.icon-icons.com/icons2/2715/PNG/512/rocket_launch_icon_172239.png",
      description:
        "Com foco nas empresas a partir de 40 funcionários, a Wedesc oferece um abrangente Serviço Full Service. Isso inclui atendimento personalizado, suporte avançado, gerenciamento de ameaças virtuais e muito mais. Deixe-nos cuidar da sua tecnologia para que você possa se concentrar no sucesso do seu negócio. Entre em contato para descobrir mais.",
    },
    {
      title: "Full Service",
      imgPath:
        "https://cdn.icon-icons.com/icons2/2715/PNG/512/rocket_launch_icon_172239.png",
      description:
        "Com foco nas empresas a partir de 40 funcionários, a Wedesc oferece um abrangente Serviço Full Service. Isso inclui atendimento personalizado, suporte avançado, gerenciamento de ameaças virtuais e muito mais. Deixe-nos cuidar da sua tecnologia para que você possa se concentrar no sucesso do seu negócio. Entre em contato para descobrir mais.",
    },
    {
      title: "Gerenciamento remoto e local",
      imgPath:
        "https://cdn.icon-icons.com/icons2/2715/PNG/512/rocket_icon_172240.png",
      description:
        "A Wedesc oferece serviços de gerenciamento remoto para empresas até 70 funcionários. Com atendimento abrangente, soluções completas, suporte especializado e proteção contra ameaças virtuais, garantimos eficiência e segurança para o seu ambiente tecnológico. Deixe-nos cuidar da sua tecnologia enquanto você foca no crescimento do seu negócio. Contate-nos para saber mais.",
    },
  ];

  return (
    <>
      <div className="h-full w-full flex flex-col p-10 border-[4px] max-w-[765px] border-white rounded-[20px]">
        <Image src={Logo} className="ml-12" alt="Logo WeDesc" />
        <Swiper
          slidesPerView={2}
          spaceBetween={51}
          freeMode={true}
          style={{ height: "150%" }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[FreeMode, Pagination, Virtual, Navigation]}
          className="px-[50px]"
          navigation={true}
        >
          {images.map((info, index) => (
            <SwiperSlide
              style={{
                backgroundColor:
                  info.title === "Full Service" ? "#FECC09" : "#075985",
                color: info.title === "Full Service" ? "black" : "white",
              }}
              className="rounded-[20px] items-start px-[10px] h-full flex flex-col bg-[#075985]"
              key={index}
              virtualIndex={index}
            >
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "20px",
                  gap: "10px",
                }}
                src={info.imgPath}
                alt="Imagem de cada sessão do card"
              />
              <div>
                <h2 className="text-[18px] font-bold text-left px-2">
                  {info.title}
                </h2>
                <p className="text-base px-2 text-left">{info.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
