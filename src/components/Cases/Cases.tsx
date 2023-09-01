import { SwiperCase } from "../SwiperCase/SwiperCase";
import LinearWithValueLabel from "../Progress/Progress";
import CircularWithValueLabel from "../ValueProgress/ValueProgress";

export const Cases = () => {
  return (
    <div className=" w-full m-auto grid grid-cols-2 relative mt-[8%]">
      <div className="bg-[#172554] flex flex-col items-center justify-center text-white">
        <div className=" flex flex-col gap-3">
          <h2 className="text-6xl font-bold">Nossas Cases</h2>
          <h2 className="text-2xl text-gray-200">
            Parcerias que Impulsionam o Sucesso
          </h2>

          <p className="max-w-[569px] mt-5 text-gray-200">
            Na Wedesc, não medimos nosso sucesso apenas pelas soluções que
            oferecemos, mas pelo impacto que causamos nas empresas que servimos.
            Conheça algumas das histórias de sucesso que construímos juntos,
            onde a tecnologia se tornou a força motriz de crescimento,
            eficiência e inovação. Cada case é uma prova do nosso compromisso em
            elevar negócios por meio da excelência tecnológica.
          </p>
        </div>
        <div className="flex w-full pt-7">{<SwiperCase />}</div>
      </div>
      <div className="bg-[#09001C] w-full flex flex-col h-[778px] items-center text-white justify-evenly">
        <div className="flex w-full justify-center items-center gap-4">
          <CircularWithValueLabel ValueCircular={70} ValueProgress={187} />
          <div className="w-[70%]">
            <p className="pl-1 font-bold">Empresas Atendidas</p>
            <LinearWithValueLabel ProgressValue={70} />
          </div>
        </div>
        <div className="flex w-full justify-center items-center gap-4">
          <CircularWithValueLabel ValueCircular={80} ValueProgress={280} />
          <div className="w-[70%]">
            <p className="pl-1 font-bold">Trabalhos Realizados</p>
            <LinearWithValueLabel ProgressValue={80} />
          </div>
        </div>
        <div className="flex w-full justify-center items-center gap-4">
          <CircularWithValueLabel ValueCircular={15} ValueProgress={9} />
          <div className="w-[70%]">
            <p className="pl-1 font-bold">Empresas Parceiras</p>
            <LinearWithValueLabel ProgressValue={30} />
          </div>
        </div>
        <div className="flex w-full justify-center items-center gap-4">
          <CircularWithValueLabel ValueCircular={50} ValueProgress={60} />
          <div className="w-[70%]">
            <p className="pl-1 font-bold">Clientes Fidelizados</p>
            <LinearWithValueLabel ProgressValue={60} />
          </div>
        </div>
      </div>
    </div>
  );
};
