import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface LiProps {
  Ref?: string;
  text?: string;
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
  image: string;
  titleImage: string;
  title: string;
  children: ReactNode;
}

export interface ILinearWithValueLabel {
  ProgressValue: number;
}

export interface ICardComents {
  Img: string;
  Title: string;
  Description: string;
  Avaliation: number;
}

export interface ICircularProgressWithLabel {
  ValueCircular: number;
  ValueProgress: number;
}
