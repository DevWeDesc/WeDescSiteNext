import { Rating } from "@mui/material";
import { ICardComents } from "../../interfaces/interfaces";
import Image from "next/image";

export const CardComents = ({
  Img,
  Title,
  Description,
  Avaliation,
}: ICardComents) => {
  return (
    <div
      style={{ boxShadow: " 10px 10px 15px 10px rgba(0, 0, 0, 0.2)" }}
      className="w-[379px] h-[302px] ml-4 my-[38px] rounded-lg p-10 bg-[#262626] flex flex-col gap-6 text-white "
    >
      <div className="flex items-center gap-2">
        <Image
          width={50}
          height={50}
          src={Img}
          className="rounded-full w-[74px] h-[74px]"
          alt="Imagem da empresa do comentário"
        />
        <div className="flex flex-col text-white gap-1">
          <p className="text-xl text-gray-200">{Title}</p>
          <Rating
            name="size-large"
            sx={{ color: "white" }}
            defaultValue={Avaliation}
            size="small"
          />
        </div>
      </div>
      <p className="text-[17px]">{Description}</p>
    </div>
  );
};
