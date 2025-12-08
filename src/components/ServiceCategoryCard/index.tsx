"use client";

import ReactDOMServer from "react-dom/server";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import Link from "next/link";

import { ChevronDown } from "lucide-react";

import { Media } from "@/payload-types";

import { Button } from "@/components/Button";
import { PayloadImage } from "@/components/Payload/Image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { Service, ServiceCategory } from "@/payload-types";

import { A11y, EffectFade, Pagination } from "swiper/modules";

import { cn } from "@/utilities/cn";

import "swiper/css";
import "swiper/css/effect-fade";
import { RichText } from "../RichText";

type ServiceCategoryCardProps = ServiceCategory & {
  hydratedServices: Service[];
};

export function ServiceCategoryCard({ id, title, content, hydratedServices }: ServiceCategoryCardProps) {
  const swiperOptions: SwiperProps = {
    modules: [Pagination, A11y, EffectFade],
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: (index, className) =>
        ReactDOMServer.renderToStaticMarkup(
          <span className={cn("aria-current:bg-brand-primary aria-current:outline-brand-primary outline-tertiary block size-4 cursor-pointer rounded-full bg-transparent outline-2 outline-offset-3 transition-colors duration-300", className)}>
            <span className="sr-only">Página {index + 1}</span>
          </span>,
        ),
    },
  };

  return (
    <li className="bg-secondary flex flex-col overflow-hidden rounded-lg" key={id}>
      <div className="flex-1 space-y-4 px-8 pt-8">
        <h3 className="subheading text-brand-primary">{title}</h3>
        <RichText data={content} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="relative z-10 pl-0" size="sm" variant="ghost">
              Saiba mais
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {hydratedServices?.map((service) => (
              <DropdownMenuItem key={service.id}>
                <Link href={service.relPermalink}>{service.title}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative">
        {hydratedServices.length == 1 ? (
          <PayloadImage image={hydratedServices[0].image as Media} />
        ) : (
          <Swiper {...swiperOptions}>
            {hydratedServices?.map((service) => (
              <SwiperSlide className="bg-secondary" key={service.id}>
                <PayloadImage image={service.image as Media} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination from-neutral-0/15 to-neutral-0/5 absolute right-0 bottom-4 left-0 z-10 mx-auto flex max-w-max justify-center gap-4 rounded-3xl bg-linear-to-t p-2.5 shadow backdrop-blur-xl"></div>
          </Swiper>
        )}
      </div>
    </li>
  );
}
