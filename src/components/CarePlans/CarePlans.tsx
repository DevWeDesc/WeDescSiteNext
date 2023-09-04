// import SwipeableTextMobileStepper from "../Carousel/Carousel";

import SwiperPlans from "../SwiperPlans/SwiperPlans";

export const CarePlans = () => {
  return (
    <div className="flex flex-col mt-[50px] gap-7 relative max-w-[1460px]  m-auto">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 lg:gap-10 ">
        <div className="h-[778px]  col-span-3 flex justify-end">
          <SwiperPlans />
        </div>
        <div className="flex gap-10 flex-col items-start p-8 col-span-2 justify-center">
          <h2 className="text-white font-bold text-[40px]">
            Nossos Planos de atendimento
          </h2>
          <div>
            <p className="text-white w-[82%] leading-8">
              Nossos planos de atendimento são projetados para atender às
              necessidades exclusivas da sua empresa. Com abordagens que vão
              desde o Essencial até o Enterprise, oferecemos suporte técnico,
              gerenciamento completo, segurança robusta e atendimento VIP.
              Escolha o plano que se alinha perfeitamente com o seu negócio e
              deixe a tecnologia conosco. Conheça mais sobre nossos planos de
              atendimento personalizados para você.
            </p>
            <button className="bg-[#FECC09] px-9 py-3 rounded-full font-bold mt-5">
              Saiba Mais
            </button>
          </div>
          <div id="Plans" />
        </div>
      </div>
    </div>
  );
};
