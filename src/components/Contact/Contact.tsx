import Icon from "@/images/MapPin.png";
import Icon2 from "@/images/Envelope.png";
import Icon3 from "@/images/Phone.png";
import { Image } from "next/dist/client/image-component";

export const Contact = () => {
  return (
    <div className="lg:w-[100%] xl-[80%] m-auto flex flex-col mt-20">
      <div className="flex justify-center items-center gap-5 lg:py-10">
        <p className="w-[25%] h-[2px] bg-[#FECC09]"></p>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#FECC09]">
          Contato
        </h2>
        <p className="w-[25%] h-[2px] bg-[#FECC09]"></p>
      </div>
      <div
        className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 mt-5 lg:mt-0 lg:shadow-lg lg:shadow-gray-700 shadow-xl shadow-gray-950 lg:mx-8 xl:mx-52 2xl:mx-96"
        // style={{
        //   boxShadow: "0 0 40px rgba(123, 123, 123, 0.8)",
        // }}
      >
        <div className="flex flex-col p-4 lg:p-10 gap-5">
          <p className="text-3xl font-bold">Entre em contato com a gente</p>
          <p className="text-xl pr-12 w-full">
            Conte com uma equipe com experiência em soluções de TI. Fale com
            nossos especialistas hoje mesmo.
          </p>
          <div className="w-full text-xl gap-2 flex lg:gap-12 mt-16">
            <Image
              src={Icon3}
              className="w-8 object-contain"
              alt="Imagem de Localização"
            />
            <p>(11) 4040-5072</p>
          </div>
          <div className="text-xl flex gap-2  lg:gap-12">
            <Image
              src={Icon2}
              className="max-w-8 object-scale-down"
              alt="Imagem de E-mail"
            />
            <p className="lg:pr-10">comercial@wedesc.com.br</p>
          </div>
          <div className="text-xl flex gap-2  lg:gap-12 mb-40">
            <Image
              src={Icon}
              className=" max-w-8 object-scale-down"
              alt="Imagem de Telefone"
            />
            <p className="lg:pr-10">
              R. Adolfo Bastos, 598 - 71 - Vila Bastos, Santo André - SP,
              09041-000
            </p>
          </div>
        </div>
        <div className="w-[100px] h-[100px] 2xl:right-[47%] mt-[225%] z-[-1] lg:mt-[80px] rotate-45 bg-[#FECC09] absolute lg:right-[46.5%]"></div>
        <div className="w-full bg-[#FECC09] py-10 px-12 lg:p-20 flex flex-col gap-2">
          <p className="text-2xl">Nome:</p>
          <input
            className="bg-transparent py-2 px-2 border-[1px] border-black outline-none rounded-lg"
            type="text"
          />
          <p className="text-2xl">E-mail:</p>
          <input
            className="bg-transparent py-2 px-2 border-[1px] border-black outline-none rounded-lg"
            type="text"
          />
          <p className="text-2xl">Sua Mensagem:</p>
          <textarea
            name=""
            id=""
            className="bg-transparent border-[1px] border-black rounded-lg min-w-full min-h-[60%] p-2 outline-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
