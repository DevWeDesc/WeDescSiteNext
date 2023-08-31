"use client";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ICircularProgressWithLabel } from "../../interfaces/interfaces";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number; valueProgress: number }
) {
  console.log(props.valueProgress);
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress size="60px" variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
          sx={{ fontSize: "16px" }}
        >{`${props.valueProgress}`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel({
  ValueCircular,
  ValueProgress,
}: ICircularProgressWithLabel) {
  return (
    <CircularProgressWithLabel
      valueProgress={ValueProgress}
      value={ValueCircular}
    />
  );
}
