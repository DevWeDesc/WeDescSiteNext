// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import { Box, Grid } from "@mui/material";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
// import Logo from "../../assets/LogoWeDesc.png";
// import { CardCarouselPlans } from "../CardCarouselPlans/CardCarouselPlans";
// import Arrow from "../../assets/Vector (3).png";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     title: "Gerenciamento remoto e local",
//     imgPath:
//       "https://cdn.icon-icons.com/icons2/2715/PNG/512/rocket_icon_172240.png",
//     description:
//       "A Wedesc oferece serviços de gerenciamento remoto para empresas até 70 funcionários. Com atendimento abrangente, soluções completas, suporte especializado e proteção contra ameaças virtuais, garantimos eficiência e segurança para o seu ambiente tecnológico. Deixe-nos cuidar da sua tecnologia enquanto você foca no crescimento do seu negócio. Contate-nos para saber mais.",
//   },
//   {
//     title: "Full Service",
//     imgPath:
//       "https://cdn.icon-icons.com/icons2/2715/PNG/512/rocket_launch_icon_172239.png",
//     description:
//       "Com foco nas empresas a partir de 40 funcionários, a Wedesc oferece um abrangente Serviço Full Service. Isso inclui atendimento personalizado, suporte avançado, gerenciamento de ameaças virtuais e muito mais. Deixe-nos cuidar da sua tecnologia para que você possa se concentrar no sucesso do seu negócio. Entre em contato para descobrir mais.",
//   },
// ];

// function SwipeableTextMobileStepper() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   console.log(activeStep);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step: number) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box
//       sx={{
//         border: "4px solid white",
//         borderRadius: "30px",
//         padding: "0px",
//         maxHeight: "778px",
//       }}
//     >
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           height: 50,
//           bgcolor: "transparent",
//           pb: 3,
//           pt: 10,
//           pl: 10,
//         }}
//       >
//         <Typography>
//           <img src={Logo} alt="" />{" "}
//         </Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.title} className="flex">
//             <Button
//               sx={{ width: "60px" }}
//               onClick={handleBack}
//               disabled={activeStep === 0}
//             >
//               {theme.direction === "rtl" ? (
//                 <KeyboardArrowLeft />
//               ) : (
//                 <img className="rotate-180" src={Arrow} alt="" />
//               )}
//             </Button>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Grid
//                 key={index}
//                 p={2}
//                 width="100%"
//                 container
//                 rowSpacing={1}
//                 columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//               >
//                 <Grid item xs={6}>
//                   <Box
//                     sx={{
//                       display: "block",
//                       maxWidth: 400,
//                       overflow: "hidden",
//                       width: "100%",
//                     }}
//                   >
//                     {activeStep === 0 ? (
//                       <CardCarouselPlans
//                         image={images[0].imgPath}
//                         title={images[0].title}
//                         description={images[0].description}
//                         Bgcolor="#075985"
//                         color="white"
//                       />
//                     ) : (
//                       <CardCarouselPlans
//                         image={images[1].imgPath}
//                         title={images[1].title}
//                         description={images[1].description}
//                         Bgcolor="#075985"
//                         color="white"
//                       />
//                     )}
//                   </Box>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Box
//                     sx={{
//                       display: "block",
//                       maxWidth: 400,
//                       overflow: "hidden",
//                       width: "100%",
//                     }}
//                   >
//                     <CardCarouselPlans
//                       image={images[1].imgPath}
//                       title={images[1].title}
//                       description={images[1].description}
//                       Bgcolor="#FECC09"
//                       color="black"
//                     />
//                   </Box>
//                 </Grid>
//               </Grid>
//             ) : null}

//             <Button
//               size="small"
//               onClick={handleNext}
//               disabled={activeStep === maxSteps - 1}
//             >
//               {theme.direction === "rtl" ? (
//                 <KeyboardArrowLeft />
//               ) : (
//                 <img src={Arrow} alt="" />
//               )}
//             </Button>
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <div id="Plans" className="flex justify-center mb-12">
//         <MobileStepper
//           sx={{ backgroundColor: "transparent" }}
//           steps={maxSteps}
//           position="static"
//           activeStep={activeStep}
//         />
//       </div>
//     </Box>
//   );
// }

// export default SwipeableTextMobileStepper;
