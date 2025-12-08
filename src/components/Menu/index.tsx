"use client";

import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";

import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useFocusTrap } from "@/hooks/useFocusTrap";

import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";

import { Button } from "@/components/Button";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { TMenu } from "../Header";
import { MilCopiasTecnologia } from "../MilCopias";

type MenuProps = {
  items: TMenu[];
};

export function Menu({ items }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen((v) => !v);

  useFocusTrap(menuRef as RefObject<HTMLElement>, isOpen);
  useEscapeKey(() => setIsOpen(false));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header>
      <Button variant="primary" size="md" className="skip-to-main" asChild>
        <Link href="#conteudo">Pular para o conteúdo</Link>
      </Button>
      <div className={`absolute top-0 left-0 z-10 w-full overflow-auto py-8 sm:px-6 ${isOpen ? "bg-woodsmoke max-lg:from-neutral-0/50 max-lg:to-neutral-0/20 h-svh max-lg:bg-linear-to-t max-lg:backdrop-blur-xl" : "h-auto"}`} ref={menuRef}>
        <div className="container h-full py-2.5">
          <div className="flex w-full items-center justify-between max-lg:flex-wrap">
            <Link className="block rounded p-1" href="/">
              <MilCopiasTecnologia className="w-full max-w-40" />
              <span className="sr-only">Página inicial</span>
            </Link>

            {/* Mobile toggle */}
            <div className="flex items-center justify-center lg:hidden">
              <Button className="p-2" variant="ghost" size="icon" onClick={toggleOpen} aria-expanded={isOpen} aria-controls="main-navigation" aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
                {isOpen ? <X className="size-6" /> : <MenuIcon className="size-6" />}
              </Button>
            </div>

            <div className="lg:from-neutral-0/50 lg:to-neutral-0/20 flex items-center gap-2 rounded-lg p-2 max-lg:basis-full max-lg:flex-wrap lg:bg-linear-to-t lg:shadow lg:backdrop-blur-xl">
              <nav id="main-navigation" className={`basis-full items-center lg:basis-auto lg:py-0 ${isOpen ? "pt-6" : ""}`}>
                {/* Desktop Menu */}
                <ul className="hidden lg:flex lg:items-center">
                  {items.map((item) =>
                    item.submenu ? (
                      <li key={item.label} className="mb-2 lg:mb-0">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button className="relative z-10" size="sm" variant="ghost">
                              {item.label}
                              <ChevronDown />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start">
                            {item.submenu.map((entry, idx) => (
                              <DropdownMenuItem key={`${entry.label}-${idx}`} asChild>
                                <Link href={entry.href!}>{entry.label}</Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </li>
                    ) : (
                      <li key={item.label} className="mb-2 lg:mb-0">
                        <Button className="max-lg:w-full max-lg:justify-start" size="sm" variant="ghost" asChild>
                          <Link href={item.href ?? "/"}>{item.label}</Link>
                        </Button>
                      </li>
                    ),
                  )}
                </ul>

                {/* Mobile Menu */}
                <ul className={`-ml-2.5 space-y-2 lg:hidden ${isOpen ? "block" : "hidden"}`}>
                  {items.map((item) =>
                    item.submenu ? (
                      <li key={item.label} className="">
                        <h2 className="text-brand-primary mb-2 pl-4 font-semibold">{item.label}</h2>
                        <ul className="ml-4 flex flex-col justify-start space-y-2">
                          {item.submenu.map((entry, idx) => (
                            <li key={`${entry.label}-${idx}`}>
                              <Button fullWidth className="justify-start" size="sm" variant="subtle" asChild>
                                <Link href={entry.href!} onClick={() => setIsOpen(false)}>
                                  {entry.label}
                                </Link>
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={item.label} className="">
                        <Button fullWidth className="max-lg:w-full max-lg:justify-start" size="sm" variant="subtle" asChild>
                          <Link href={item.href ?? "/"} onClick={() => setIsOpen(false)}>
                            {item.label}
                          </Link>
                        </Button>
                      </li>
                    ),
                  )}
                </ul>
              </nav>

              {/* CTA no desktop */}
              <div className={`lg:block ${isOpen ? "max-lg:block max-lg:pb-10" : "max-lg:hidden"}`}>
                <Button size="sm" asChild>
                  <Link href="/contato" onClick={() => setIsOpen(false)}>
                    Solicitar orçamento
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
