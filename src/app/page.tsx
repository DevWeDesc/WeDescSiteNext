import { About } from "@/components/About/About";
import { CarePlans } from "@/components/CarePlans/CarePlans";
import { Cases } from "@/components/Cases/Cases";
import { Coments } from "@/components/Coments/Coments";
import { Contact } from "@/components/Contact/Contact";
import { DescriptionCarePlans } from "@/components/DescriptionCarePlans/DescriptionCarePlans";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Partners } from "@/components/Partners/Partners";
import { SubHeader } from "@/components/SubHeader/SubHeader";

export default function Home() {
  return (
    <main>
      <Header />
      <SubHeader />
      <About />
      <CarePlans />
      <DescriptionCarePlans />
      <Cases />
      <Coments />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
