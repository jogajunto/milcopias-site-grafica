import Image from "next/image";

import Marquee from "react-fast-marquee";

import canon from "./canon.svg";
import dell from "./dell.svg";
import intel from "./intel.svg";
import kyocera from "./kyocera.svg";
import lenovo from "./lenovo.svg";
import positivo from "./positivo.svg";
import topdata from "./topdata.svg";
import urovo from "./urovo.svg";
import vaio from "./vaio.svg";
import windows10 from "./windows-10.svg";
import zebra from "./zebra.svg";

export function Customers() {
  return (
    <div className="space-y-4 overflow-x-hidden">
      <Marquee direction="right" speed={40}>
        <Image className="mx-5 h-16 w-auto" src={canon} alt="" />
        <Image className="mx-5 h-16 w-auto" src={dell} alt="" />
        <Image className="mx-5 h-16 w-auto" src={intel} alt="" />
        <Image className="mx-5 h-16 w-auto" src={kyocera} alt="" />
        <Image className="mx-5 h-16 w-auto" src={lenovo} alt="" />
        <Image className="mx-5 h-16 w-auto" src={positivo} alt="" />
        <Image className="mx-5 h-16 w-auto" src={topdata} alt="" />
        <Image className="mx-5 h-16 w-auto" src={urovo} alt="" />
        <Image className="mx-5 h-16 w-auto" src={vaio} alt="" />
        <Image className="mx-5 h-16 w-auto" src={windows10} alt="" />
        <Image className="mx-5 h-16 w-auto" src={zebra} alt="" />

        <Image className="mx-5 h-16 w-auto" src={canon} alt="" />
        <Image className="mx-5 h-16 w-auto" src={dell} alt="" />
        <Image className="mx-5 h-16 w-auto" src={intel} alt="" />
        <Image className="mx-5 h-16 w-auto" src={kyocera} alt="" />
        <Image className="mx-5 h-16 w-auto" src={lenovo} alt="" />
        <Image className="mx-5 h-16 w-auto" src={positivo} alt="" />
        <Image className="mx-5 h-16 w-auto" src={topdata} alt="" />
        <Image className="mx-5 h-16 w-auto" src={urovo} alt="" />
        <Image className="mx-5 h-16 w-auto" src={vaio} alt="" />
        <Image className="mx-5 h-16 w-auto" src={windows10} alt="" />
        <Image className="mx-5 h-16 w-auto" src={zebra} alt="" />
      </Marquee>
    </div>
  );
}
