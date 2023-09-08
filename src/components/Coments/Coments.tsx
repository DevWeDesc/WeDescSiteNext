"use client";
import { CardComents } from "../CardComents/CardComents";
import { ComentsData } from "./ComentsData";
import Title from "@/images/Titulo.png";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export const Coments = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <div className=" w-full h-full lg:h-[722px] overflow-hidden bg-gradient-to-r from-white to-[#868686] lg:pl-20 ">
      <div className="w-full flex  lg:flex-row flex-col items-center relative gap-7 py-[100px] lg:pt-[133px] lg:pb-[233px]">
        <div className="w-full h-full bg-gradient-to-r from-white to-[#868686] absolute z-[-1] left-[0px] right-[0px] shadow-2xl-[#C8C8C8]"></div>
        <Image
          src={Title}
          className="lg:mr-20 z-[2] "
          alt="Imagem do Carousel"
        />
        <div className="w-full  2xl:max-w-[2235px] xl:max-w-[1100px]">
          <motion.div
            ref={carouselRef}
            whileTap={{ cursor: "grabbing" }}
            className="overflow-hidden cursor-grab"
          >
            <motion.div
              className="flex gap-10 "
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {ComentsData.map((coment, index) => (
                <div key={index} className="hover:scale-105 transition-[10s] ">
                  <CardComents
                    Avaliation={coment.Avaliation}
                    Img={coment.Img}
                    Title={coment.Title}
                    Description={coment.Description}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
