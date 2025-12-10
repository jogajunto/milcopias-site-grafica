"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GraficaRapida() {
  const groups = [
    { base: "/grafica-01.webp", hover: "/grafica-01-hover.webp", rotate: "-9.14" },
    { base: "/grafica-02.webp", hover: "/grafica-02-hover.webp", rotate: "0.82" },
    { base: "/grafica-03.webp", hover: "/grafica-03-hover.webp", rotate: "-6.5", big: true },
    { base: "/grafica-04.webp", hover: "/grafica-04-hover.webp", rotate: "-3.57" },
    { base: "/grafica-05.webp", hover: "/grafica-05-hover.webp", rotate: "6.63" },
    { base: "/grafica-06.webp", hover: "/grafica-06-hover.webp", rotate: "7.67" },
    { base: "/grafica-07.webp", hover: "/grafica-07-hover.webp", rotate: "-4.26" },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % groups.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="sr-only">Gráfica rápida em Linhares e região</h1>
      <div className="hidden items-end md:flex">
        {groups.map((g, i) => (
          <div key={i} className={`group relative ${i === 2 ? "-ml-[5px]" : ""}`} style={{ transform: `rotate(${g.rotate}deg)` }}>
            <Image className={`h-auto ${g.big ? "max-h-[245px]" : "max-h-[185px]"} w-full transition-opacity duration-300 group-hover:opacity-0`} src={g.base} alt="" aria-hidden width={208} height={1085} />
            <Image className={`absolute inset-0 h-auto ${g.big ? "max-h-[245px]" : "max-h-[185px]"} w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100`} src={g.hover} alt="" aria-hidden width={208} height={1085} />
          </div>
        ))}
      </div>

      <div className="flex items-end md:hidden">
        {groups.map((g, i) => {
          const isActive = i === active;
          return (
            <div key={i} className={`relative transition-all duration-500 ${i === 2 ? "-ml-[5px]" : ""}`} style={{ transform: `rotate(${g.rotate}deg)` }}>
              <Image className={`h-auto ${g.big ? "max-h-[245px]" : "max-h-[185px]"} w-full transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100"}`} src={g.base} alt="" aria-hidden width={208} height={1085} />
              <Image className={`absolute inset-0 h-auto ${g.big ? "max-h-[245px]" : "max-h-[185px]"} w-full transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} src={g.hover} alt="" aria-hidden width={208} height={1085} />
            </div>
          );
        })}
      </div>

      <Image className="-mt-4 rotate-[-5.77deg]" src="/rapida.svg" alt="" aria-hidden width={337} height={141} />
    </div>
  );
}
