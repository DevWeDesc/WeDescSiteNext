import { About } from "@/components/About/About";
import { CarePlans } from "@/components/CarePlans/CarePlans";
import { Cases } from "@/components/Cases/Cases";
import { DescriptionCarePlans } from "@/components/DescriptionCarePlans/DescriptionCarePlans";
import { Header } from "@/components/Header/Header";
import { SubHeader } from "@/components/SubHeader/SubHeader";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <SubHeader />
      <About />
      <CarePlans />
      <DescriptionCarePlans />
      <Cases />
    </main>
  );
}
