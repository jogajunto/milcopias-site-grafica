import { cn } from "@/utilities/cn";
import React from "react";

type HeroProps = {
  children: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
};

export default function BoxedSection({ children, className, fullScreen = true }: HeroProps) {
  return (
    <section className={cn("grid", fullScreen && "min-h-screen")}>
      <div className={cn("bg-gradient-8 grid items-center overflow-hidden pt-32 pb-24 sm:m-6 sm:rounded-xl lg:pt-40", className)}>{children}</div>
    </section>
  );
}
