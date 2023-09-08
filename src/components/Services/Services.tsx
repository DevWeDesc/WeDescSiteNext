import Rocket from "@/images/12 3D RENDER ROCKET ICON (2) 1.png";
import { Cards } from "../Cards/Cards";
import Img1 from "@/images/Cloud.png";
import Img2 from "@/images/Vector.png";
import Img3 from "@/images/Vector (1).png";
import Img4 from "@/images/Vector (2).png";
import CloudWhite from "@/images/Rectangle 2.png";
import CloudBlue from "@/images/Rectangle 2 (1).png";
// import { CarePlans } from "../CarePlans/CarePlans";
import Image from "next/image";
import SwiperService from "../SwiperService/SwiperService";

export const Services = () => {
  return (
    <div className="flex flex-col gap-7 relative pt-[50px] lg:pt-24 max-w-[1460px] lg:px-[24px] m-auto ">
      <div className="px-2 lg:px-0">
        <h2 className="flex items-center justify-center text-5xl lg:text-[80px] font-bold lg:text-white  text-black">
          Serviços <Image src={Rocket} alt="Imagem de Foguete" />
        </h2>
        <div className="flex justify-center">
          <p className="lg:text-white px-4 lg:w-[990px]  text-black">
            A Wedesc foi criada com base na ideologia de que podemos impactar
            significativamente o sucesso das empresas, tornando as soluções de
            tecnologia de disponíveis seguras e acessíveis. Somos um provedor de
            serviços de TI Full Service focados em entender as necessidades e
            desafios das empresas para que de forma segura e produtiva,
            auxiliemos no alcance de seus objetivos.
          </p>
        </div>
      </div>
      <div className="w-full h-[1000px] lg:hidden">
        <SwiperService />
      </div>
      <div className=" hidden lg:flex flex-wrap w-full lg:gap-[0px] mt-5 justify-between ">
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
      {/* <CarePlans /> */}
    </div>
  );
};
