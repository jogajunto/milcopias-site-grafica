"use client";

import { Button, ButtonProps } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { createContext, useContext, useState, type ReactNode } from "react";

type WhatsAppDialogContextType = {
  openDialog: () => void;
  closeDialog: () => void;
};

const WhatsAppDialogContext = createContext<WhatsAppDialogContextType | undefined>(undefined);

export function WhatsAppDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <WhatsAppDialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Fale conosco via WhatsApp</DialogTitle>
          </DialogHeader>
          <div className="text-sm">
            <ContactForm type="whatsapp" />
          </div>
        </DialogContent>
      </Dialog>
    </WhatsAppDialogContext.Provider>
  );
}

export function useWhatsAppDialog() {
  const ctx = useContext(WhatsAppDialogContext);
  if (!ctx) {
    throw new Error("useWhatsAppDialog must be used inside <GlobalDialogProvider>.");
  }
  return ctx;
}

export function WhatsAppDialogButton(props: ButtonProps) {
  const { openDialog } = useWhatsAppDialog();

  return (
    <Button
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        openDialog();
      }}
    />
  );
}
