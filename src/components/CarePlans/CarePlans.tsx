import SwiperPlans from "../SwiperPlans/SwiperPlans";

export const CarePlans = () => {
  return (
    <div className="w-full flex flex-col lg:mt-[50px] gap-7 relative max-w-[1460px] m-auto">
      <p className="w-full h-[0.5px] bg-white my-10" />
      <div className="flex w-full flex-col-reverse lg:grid lg:grid-cols-5 lg:gap-10 ">
        <div className="w-full h-[800px] lg:h-[778px] col-span-3 lg:w-full lg:flex lg:px-8 justify-end">
          <SwiperPlans />
        </div>
        <div className=" flex gap-10 flex-col items-start py-6 px-2 col-span-2 justify-center">
          <h2 className=" px-2 text-4xl text-white lg:leading-[60px] lg:text-white font-bold lg:text-[40px]">
            Nossos Planos de atendimento
          </h2>
          <div>
            <p className="text-white lg:text-white px-2  lg:w-[100%] leading-8">
              Nossos planos de atendimento são projetados para atender às
              necessidades exclusivas da sua empresa. Com abordagens que vão
              desde o Essencial até o Enterprise, oferecemos suporte técnico,
              gerenciamento completo, segurança robusta e atendimento VIP.
              Escolha o plano que se alinha perfeitamente com o seu negócio e
              deixe a tecnologia conosco. Conheça mais sobre nossos planos de
              atendimento personalizados para você.
            </p>
            <a href="#Plans">
              <button className="bg-[#FECC09] px-9 py-3 rounded-full font-bold mt-5 hover:bg-[#d8af09]">
                Saiba Mais
              </button>
            </a>
          </div>
          <div id="Plans" />
        </div>
      </div>
    </div>
  );
};
