import Image from "next/image";
import { ICardPlans } from "../../interfaces/interfaces";

export const CardPlans = ({
  imagePlans,
  image,
  titleImage,
  title,
  children,
  colorImage,
}: ICardPlans) => {
  return (
    <div className=" mt-6 min-h-[590px] pb-[100px] w-[22%] rounded-[20px] flex flex-col items-start bg-transparent backdrop-brightness-125 hover:scale-105 transition-[10s]">
      <div className="mt-10 py-2">
        <p
          className="px-4 w-auto py-2 rounded-tr-full rounded-br-full font-bold"
          style={{
            backgroundColor: colorImage,
            color: colorImage === "#0CC0DF" ? "white" : "black",
          }}
        >
          {imagePlans}
        </p>
      </div>
      <div className="flex flex-col items-center w-full mt-10 gap-10 text-white">
        <div className="flex flex-col items-center w-full mt-10 gap-10 text-white px-5">
          <Image className="w-[45px]" src={image} alt="Imagem de Cada plano" />
          <p className="text-white text-[18px]">{titleImage}</p>
          <p className="h-[1px] w-[67%] bg-white"></p>
          <h4 className="font-bold text-[18px]">{title} </h4>
          <div className="leading-10">{children}</div>
        </div>
      </div>
      <button className="text-center w-[80%] h-[60px] hover:bg-gray-200 flex justify-center items-center gap-3 absolute bottom-[-25px] left-8 bg-white font-bold py-2 transition-colors rounded-full">
        {" "}
        Pedir Orçamento
        {/* <div className="h-[40px] w-[40px] rounded-full bg-black"></div> */}
      </button>
    </div>
  );
};
