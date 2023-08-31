import { Rating } from "@mui/material";
import { ICardComents } from "../../interfaces/interfaces";

export const CardComents = ({
  Img,
  Title,
  Description,
  Avaliation,
}: ICardComents) => {
  return (
    <div className="w-[379px] h-[302px] p-10 rounded-lg bg-[#262626] flex flex-col gap-6 text-white">
      <div className="flex items-center gap-2">
        <img src={Img} className="rounded-full w-[74px] h-[74px]" alt="" />
        <div className="flex flex-col text-white gap-1">
          <h2 className="text-xl text-gray-200">{Title}</h2>
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
