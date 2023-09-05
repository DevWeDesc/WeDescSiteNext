"use client";
import React from "react";
import { Suspense } from "react";
import { Fallback } from "../Fallback/Fallback";

export const Video = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <video
        width="auto"
        height="auto"
        loop
        autoPlay
        muted
        className="w-full h-full hidden lg:flex px-32"
      >
        <source src="/Banner.mp4" type="video/mp4" />
      </video>
      <div className="border-white absolute bottom-0 border-[5px] w-full"></div>
    </Suspense>
  );
};
