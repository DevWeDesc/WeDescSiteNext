//import Video from "@/videos/Banner.mp4";

import Image from "next/image";
import IconButton from "@/images/ButtonBanner.png";
import { Video } from "../Video/Video";
import Banner from "@/images/Seção 1.png";

export const SubHeader = () => {
  return (
    <div
      id="Init"
      className="pt-10 relative m-auto flex justify-center lg:max-w-[1760px] "
    >
      <div className="flex border-b-[4px] border-[white]">
        <Video />
        <Image src={Banner} alt="" className="mt-10 ml-2 lg:hidden" />
        {/* <Image src={Banner} alt="" width={0} height={750}></Image> */}
        {/* <video
          className="w-auto bg-white outline-none"
          // src={Video}
          // autoPlay
          // muted
          // loop
        >
          {" "}
          <source src={Video} type="video/mp4" />
        </video> */}
        {/* <div className="absolute w-full h-2 bg-white bottom-[0px] max-w-[88%] m-auto"></div> */}
      </div>
      {/* <div className="absolute top-[824px]  h-2 bg-white w-full"></div> */}
      {/* {
        <video
          src={Video2}
          autoPlay
          muted
          loop
          className="relative top-[-20px]"
        ></video>
      } */}
      {/* <img className="lg:w-[90%]  w-full" src={Vetor} alt="" /> */}
      <div className="hidden lg:flex absolute w-full px-[12%] pt-[5%] max-w-[1460px]">
        <div className="absolute flex items-start flex-col lg:gap-5">
          {/* <h1 className="lg:text-[45px] leading-[65px] lg:max-w-[407px] font-bold text-white">
            Nós Somos a WeDesc
          </h1>
          <div>
            <p className="text-[18px] max-w-[537px] text-gray-100 pr-20">
              Equipe especializada em TI pronta para atender às suas
              necessidades.
            </p>
            <p className="text-[18px] max-w-[577px] text-gray-100 pr-36">
              Aumente a produtividade e reduza custos com nossos serviços de TI.{" "}
            </p>
          </div> */}
          <button className="absolute w-[250px] 2xl:left-[2px] top-[180px] left-[25px] px-[16px] rounded-sm flex items-center gap-[5.05px] h-[44px] text-white bg-[#FECC09] transition-colors hover:bg-[#e3b600]">
            Conhecer nossos planos
            <Image
              src={IconButton}
              alt="Icone de Botão"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
