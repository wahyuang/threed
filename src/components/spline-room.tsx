"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";

const scene = `https://prod.spline.design/Uclf3j06GLhvB9f8/scene.splinecode`;

export default function SplineRoom({ className }: { className?: string }) {
  const onSplineLoad = (spline: Application) => {
    // spline.setZoom(1);
  };

  return <Spline scene={scene} onLoad={onSplineLoad} className={className} />;
}
