import Rocket from "@/images/Vector (4).png";
//import { CardPlans } from "../CardPlans/CardPlans";
import Image1 from "@/images/ic1.png.png";
import Image2 from "@/images/ic2.png.png";
import Image3 from "@/images/ic3b.png.png";
import Image4 from "@/images/ic4.png.png";
import Image from "next/image";
import { CardPlans } from "../CardPlans/CardPlans";

export const DescriptionCarePlans = () => {
  return (
    <div className="flex flex-col relative mt-24 h-auto lg:max-w-[1460px] m-auto lg:px-4 xl:p-0">
      <div className=" flex gap-5 flex-col items-center px-4 lg:text-center text-white">
        <h2 className="flex gap-10 text-4xl lg:items-center items-start lg:text-[56px] font-bold">
          Planos de atendimento{" "}
          <Image
            src={Rocket}
            className="hidden lg:block"
            alt="Imagem de foguete"
          />
        </h2>
        <p className="leading-8 lg:px-[145px]">
          As soluções tecnológicas carecem de acompanhamento preventivo e
          reativo, para que o seu trabalho não esteja sujeito a falhas. Ter o
          seu parque de equipamentos atualizado não é um detalhe na vida da sua
          empresa. Em qualquer atividade e área de negócios ter as ferramentas
          adequadas e sobretudo funcionais, torna-se fundamental para agilizar
          os processos de trabalho.
        </p>
      </div>
      <div className="flex gap-2 lg:gap-8 justify-center flex-wrap">
        <CardPlans
          colorImage="#0CC0DF"
          imagePlans="PLANO ESSENCIAL"
          image={Image1}
          titleImage="Gerenciado e Remoto"
          title="Qualquer Tamanho"
        >
          {" "}
          <p>Atendimento Help Desk</p>
          <p>Serviços Gerenciados essenciais</p>
          <p>Service Desk Essencial</p>
          <p>Gestão de ameaças virtuais</p>
        </CardPlans>
        <CardPlans
          colorImage="#FECC09"
          imagePlans="PLANO BUSINESS"
          image={Image2}
          titleImage="Gerenciado e Remoto"
          title="Até 30 funcionários"
        >
          <p> Atendimento Help Desk</p>
          <p> Serviços Gerenciados completos </p>
          <p> Service Desk Completo </p>
          <p> Suporte N3 - Infraestrutura de Rede </p>
          <p> Gestão de Backup de rede </p>
          <p> Plano de Investimentos </p>
          <p> Documentação do Ambiente </p>
          <p> Gestão de ameaças virtuais </p>
          <p> Pedir Orçamento </p>
        </CardPlans>
        <CardPlans
          colorImage="#0CC0DF"
          imagePlans="PLANO BUSINESS PREMIUM"
          image={Image3}
          titleImage="Gerenciado Remoto e Local"
          title="Até 70 funcionários"
        >
          {" "}
          <p>
            Plano Business Premium Gerenciado Remoto e Local Até 70 funcionários
          </p>
          <p>
            Atendimento Help Desk Serviços Gerenciados completos Service Desk
          </p>
          <p>
            Completo Suporte N3 - Infraestrutura de Rede Gestão de Backup de
            rede
          </p>
          <p>
            Plano de Investimentos Documentação do Ambiente Gestão de ameaças
          </p>
          <p>virtuais Gerente de Atendimento Visita mensal</p>
        </CardPlans>
        <CardPlans
          colorImage="#FECC09"
          imagePlans="PLANO ENTERPRISE"
          image={Image4}
          titleImage="Full Service"
          title="A partir de 40 funcionários"
        >
          <p> Atendimento Help Desk</p>
          <p> Serviços Gerenciados completos </p>
          <p> Service Desk Completo </p>
          <p> Suporte N3 - Infraestrutura de Rede </p>
          <p>Gestão de Backup derede </p>
          <p> Plano de Investimentos </p>
          <p> Documentação do Ambiente </p>
          <p> Gestão de ameaças virtuais </p>
          <p> Gerente de Atendimento </p>
          <p> Técnico Alocado </p>
          <p> Tabela SLA prioritária </p>
          <p> Atendimento VIP </p>
          <p> Gestão Microsoft 365 </p>
        </CardPlans>
      </div>
    </div>
  );
};
