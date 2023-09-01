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
  console.log(color.substring(0, 4));
  return (
    <div className="w-[25%] rounded-[13px] flex relative backdrop-brightness-125">
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
      <button
        style={{ color: color, backgroundColor: Bgcolor }}
        className={`absolute bottom-[-25px] transition-colors hover:brightness-105 py-3 font-bold px-4 rounded-full left-[12%]`}
      >
        Solicitar um Orçamento
      </button>
    </div>
  );
};
