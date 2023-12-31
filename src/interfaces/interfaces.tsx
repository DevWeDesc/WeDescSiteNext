import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface LiProps {
  Ref?: string;
  text?: string | any;
  children?: ReactNode;
  selected?: string;
  onClick?: () => void;
}

export interface CardsProps {
  cloud: string | StaticImageData;
  image: string | StaticImageData;
  title: string;
  description: string;
  Bgcolor: string;
  color: string;
}

export interface ICardsPlans {
  image: string;
  title: string;
  description: string;
  Bgcolor: string;
  color: string;
}

export interface ICardPlans {
  imagePlans: string;
  colorImage: string;
  image: string | StaticImageData;
  titleImage: string;
  title: string;
  children: ReactNode;
}

export interface ILinearWithValueLabel {
  ProgressValue: number;
}

export interface ICardComents {
  Img: string | StaticImageData;
  Title: string;
  Description: string;
  Avaliation: number;
}

export interface ICircularProgressWithLabel {
  ValueCircular: number;
  ValueProgress: number;
}
