"use client";
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
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="w-full h-full"
    >
      <Header />
      <SubHeader />
      <About />
      <div className="hidden lg:block">
        <CarePlans />
        <DescriptionCarePlans />
        <Cases />
        <Coments />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </motion.main>
  );
}
