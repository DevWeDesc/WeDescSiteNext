"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "@/app/globals.css";
import { FreeMode, Pagination, Virtual, Navigation } from "swiper/modules";
import { Cards } from "../Cards/Cards";
import Img1 from "@/images/Cloud.png";
import Img2 from "@/images/Vector.png";
import Img3 from "@/images/Vector (1).png";
import Img4 from "@/images/Vector (2).png";
import CloudWhite from "@/images/Rectangle 2.png";
import CloudBlue from "@/images/Rectangle 2 (1).png";

export default function SwiperService() {
  const images = [
    {
      cloud: CloudWhite,
      image: Img1,
      title: "Solução em Nuvem",
      description:
        "Colaboração e produtividade de equipes locais ou em Home Office com alta disponibilidade, mobilidade e segurança.Provedor de Soluções Cloud do Microsoft 365;Provedor de Soluções Acronis Cyber Protection;Virtualização de aplicações e hospedagem Cloud.",
      Bgcolor: "#FECC09",
      color: "#000",
    },
  ];

  return (
    <>
      <div className="h-full min-h-[1200px] items-center w-full flex flex-col  border-[4px] max-w-[100vw]  border-white rounded-[20px]">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          freeMode={true}
          style={{ height: "150%", width: "100%" }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[FreeMode, Pagination, Virtual, Navigation]}
          className=""
          navigation={true}
        >
          <div className="flex w-full h-[1300px] py-10 overflow-hidden gap-5">
            <Cards
              cloud={CloudWhite}
              image={Img1}
              title={"Solução em Nuvem"}
              description={
                "Colaboração e produtividade de equipes locais ou em Home Office com alta disponibilidade, mobilidade e segurança.Provedor de Soluções Cloud do Microsoft 365;Provedor de Soluções Acronis Cyber Protection;Virtualização de aplicações e hospedagem Cloud."
              }
              Bgcolor="#FECC09"
              color="#000"
            />

            <Cards
              cloud={CloudBlue}
              image={Img2}
              title={"Consultoria de tecnologia"}
              description={
                "Especialista de tecnologia apoiando seus planos estratégicos em soluções para expandir e garantir seu negócio.\n Time de sucesso do cliente acompanhando e garantindo qualidade na entrega de nossos serviços; \nConsultor especializado apoiando nossos clientes na jornada de descoberta e parceria com as mais variadas ofertas de tecnologia de mercado."
              }
              Bgcolor="#0CC0DF"
              color={"#FFF"}
            />
            <Cards
              cloud={CloudWhite}
              image={Img3}
              title={"Gestão e Suporte de TI"}
              description={
                "Atendimento especializado pronto para ajudar a sua equipe a produzir.\nGestão de Servidores e Infraestrutura;\nPrevenção a acidentes;\nAtendimento remoto e local;\nPlanos escaláveis ao seu negócio e orçamento."
              }
              Bgcolor="#FECC09"
              color="#000"
            />
            <Cards
              cloud={CloudBlue}
              image={Img4}
              title={"Soluçoes de Segurança"}
              description={
                "Cuidados com a integridade e continuidade de seu negócio.\n\nMonitoramento e proteção de Servidores e Estações;\n\nAções proativas e preventivas para infraestrutura de rede;\n\nContinuidade de negócios;\n\nBackup e criptografia de dados."
              }
              Bgcolor="#0CC0DF"
              color="#FFF"
            />
          </div>
          {/* {images.map((info, index) => {
            return (
              <SwiperSlide
                onClick={() => {
                  console.log(index);
                  console.log(images.indexOf(info));
                }}
                className=" rounded-[20px] items-start  justify-end  flex flex-col "
                key={index}
                virtualIndex={index}
              >
                <Cards
                  cloud={info.cloud}
                  image={info.image}
                  title={info.title}
                  description={info.description}
                  Bgcolor={info.Bgcolor}
                  color={info.color}
                />
              </SwiperSlide>
            );
          })} */}
        </Swiper>
      </div>
    </>
  );
}
