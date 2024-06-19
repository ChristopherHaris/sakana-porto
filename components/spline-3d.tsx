"use client";

import { useRef } from "react";
import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import BarLoader from "react-spinners/BarLoader";

export function Spline3D() {
  const bird = useRef();

  function onLoad(spline: { findObjectById: (arg0: string) => any; }) {
    // const obj = spline.findObjectByName("Cube");
    // or
    const obj = spline.findObjectById("46d8d151-72ce-47a0-a958-55a532d3b29c");

    // save it in a ref for later use
    bird.current = obj;
  }

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
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  );
}
