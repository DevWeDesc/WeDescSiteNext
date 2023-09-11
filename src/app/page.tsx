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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <SubHeader />
      <About />
      <CarePlans />
      <DescriptionCarePlans />
      {/* <div className="hidden lg:block"> */}
      <Cases />
      <Coments />
      {/* </div> */}
      <Partners />
      <Contact />
      <Footer />
    </motion.main>
  );
}
