import Icon from "@/images/pin.png";
import Icon2 from "@/images/envelope (1).png";
import Icon3 from "@/images/phone (1).png";
import { Image } from "next/dist/client/image-component";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const Contact = () => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const validationSend =
    contactName === "" || contactEmail === "" || contactMessage === "";

  function sendEmail(e: any) {
    e.preventDefault();
    if (validationSend) {
      toast.error("Falha ao enviar E-mail, Preencha todos os campos!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const templateParams = {
      from_name: contactName,
      message: contactMessage,
      email: contactEmail,
    };
    emailjs
      .send(
        "service_4llz5kn",
        "template_ehdq0ys",
        templateParams,
        "6Dp1SAvko-GUc3-AQ"
      )
      .then(
        () => {
          toast.success("E-mail Enviado com Sucesso!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setContactName("");
          setContactEmail("");
          setContactMessage("");
        },
        () => {
          toast.error("Falha ao enviar E-mail, tente novamente mais tarde!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  }

  return (
    <div className="lg:w-[100%] bg-white w-full xl-[80%] m-auto flex flex-col pt-20">
      <div className="flex justify-center items-center gap-5 lg:py-10">
        <p className="w-[25%] h-[2px] bg-[#FECC09]"></p>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#FECC09]">
          Contato
        </h2>
        <p className="w-[25%] h-[2px] bg-[#FECC09]"></p>
      </div>
      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 mt-5 lg:mt-0 lg:shadow-lg lg:shadow-gray-700 shadow-xl shadow-gray-950 lg:mx-8 xl:mx-52 2xl:mx-96">
        <div className="flex flex-col w-full p-4 lg:p-10 gap-5">
          <p className="text-3xl font-bold">Entre em contato com a gente</p>
          <p className="text-xl pr-12 w-full">
            Conte com uma equipe com experiência em soluções de TI. Fale com
            nossos especialistas hoje mesmo.
          </p>
          <div className="w-full text-xl gap-2 items-center flex lg:gap-12 mt-16">
            <Image
              src={Icon3}
              className="max-w-[32px] object-scale-down"
              alt="Imagem de Localização"
            />
            <p>(11) 4040-5072</p>
          </div>
          <div className="text-xl flex gap-2 items-center  lg:gap-12">
            <Image
              src={Icon2}
              className="max-w-[32px] object-scale-down"
              alt="Imagem de E-mail"
            />
            <p className="lg:pr-10">comercial@wedesc.com.br</p>
          </div>
          <div className="text-xl flex gap-2 items-center  lg:gap-12 mb-40">
            <Image
              src={Icon}
              className=" max-w-[32px] object-scale-down"
              alt="Imagem de Telefone"
            />
            <p className="lg:pr-10">
              R. Adolfo Bastos, 598 - 71 - Vila Bastos, Santo André - SP,
              09041-000
            </p>
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          className="max-w-full bg-[#FECC09] flex flex-col "
        >
          <div className="max-w-full bg-[#FECC09] py-10 px-6 lg:p-20 flex flex-col gap-2">
            <p className="text-xl">Nome:</p>
            <input
              className="bg-transparent py-2 px-2 border-[1px] border-black outline-none rounded-lg"
              type="text"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
            <p className="text-xl">E-mail:</p>
            <input
              className="bg-transparent py-2 px-2 border-[1px] border-black outline-none rounded-lg"
              type="text"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
            <p className="text-xl">Sua Mensagem:</p>
            <textarea
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              name=""
              id=""
              className="bg-transparent border-[1px] border-black rounded-lg min-w-full min-h-[60%] p-2 outline-none"
            />
            <button
              type="submit"
              className="py-3 px-6 border-[1px] border-black mt-2 rounded-lg transition-all hover:bg-[#eabd08]"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
