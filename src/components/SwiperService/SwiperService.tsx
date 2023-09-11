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
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CardComents } from "../CardComents/CardComents";
import { ComentsData } from "../Coments/ComentsData";

export default function SwiperService() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);
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
      <div className=" h-full items-center w-full flex flex-col justify-center max-w-[100vw]  ">
        <div className="w-full 2xl:max-w-[2235px] xl:max-w-[1100px]">
          <motion.div
            ref={carouselRef}
            whileTap={{ cursor: "grabbing" }}
            className="overflow-hidden cursor-grab"
          >
            <motion.div
              className="flex px-4 py-20 gap-5 "
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
