import Banner from "@/images/Banner.png";

import Image from "next/image";
export const Fallback = () => {
  return <Image src={Banner} alt="" width={0} height={750} />;
};
