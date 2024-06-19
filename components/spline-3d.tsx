"use client";

import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import BarLoader from "react-spinners/BarLoader";

export function Spline3D() {

  return (
    <div className="flex h-64 items-center">
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-40">
            <BarLoader color={"#000000"} loading={true} height={4} />
          </div>
        }
      >
        <Spline
          className="w-full flex justify-center items-center"
          scene="https://prod.spline.design/TYtPfBmdNaqKkwVH/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}
