import { About } from "@/components/About/About";
import { Header } from "@/components/Header/Header";
import { SubHeader } from "@/components/SubHeader/SubHeader";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <SubHeader />
      <About />
    </main>
  );
}
