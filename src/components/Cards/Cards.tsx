import Image from "next/image";
import { CardsProps } from "../../interfaces/interfaces";

export const Cards = ({
  cloud,
  image,
  title,
  description,
  Bgcolor,
  color,
}: CardsProps) => {
  return (
    <div className="bg-[#0369A1]  min-w-[75%] min-h-[100%] lg:min-w-[20%] lg:h-[1100px] lg:bg-inherit lg:w-[20%] xl:h-[800px] rounded-[13px] flex relative lg:backdrop-brightness-125 hover:scale-105 transition-[10s]">
      <Image
        src={cloud}
        className="absolute w-[185px] h-[67px] rotate-180"
        alt="Imagem de nuvem"
      />
      <div className=" mt-32 w-full flex flex-col items-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white">
          <Image src={image} alt="Imagem representando cada Serviço" />
        </div>
        <div className="pt-[30px] text-center text-white px-[36px] flex flex-col gap-8">
          <p className="font-bold">{title}</p>
          <p className="pb-20">{description}</p>
        </div>
      </div>
      <Image
        src={cloud}
        className="absolute w-[185px] h-[67px] bottom-[0px] right-[0px]"
        alt=""
      />
      <a
        href="https://web.whatsapp.com/send?phone=5511937302594"
        target="_blank"
      >
        <button
          style={{ color: color, backgroundColor: Bgcolor }}
          className={`absolute bottom-[-25px] transition-colors hover:brightness-105 py-3 font-bold px-4 rounded-full left-[12%]`}
        >
          Solicitar um Orçamento
        </button>
      </a>
    </div>
  );
};
