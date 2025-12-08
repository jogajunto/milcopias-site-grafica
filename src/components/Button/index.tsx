import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "inline-flex gap-2 items-center justify-center transition-colors duration-300 cursor-pointer rounded-lg disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  variants: {
    size: {
      lg: "px-3 py-1.5 leading-none text-xl",
      md: "px-3 py-2.5 leading-snug",
      sm: "py-1.5 px-3 min-h-[30px]",
      icon: "p-4",
      none: "",
    },
    fullWidth: {
      true: "w-full max-w-full justify-start text-left",
    },
    variant: {
      primary: "bg-brand-primary text-on-brand-primary hover:bg-brand-primary-hover disabled:bg-disabled disabled:text-on-disabled",
      secondary: "bg-brand-secondary text-on-brand-secondary hover:bg-brand-secondary-hover disabled:bg-disabled disabled:text-on-disabled",
      outline: "border-brand-primary text-brand-primary border-1 text-primary hover:bg-secondary disabled:bg-disabled disabled:border-disabled disabled:border disabled:text-on-disabled",
      ghost: "text-brand-primary",
      subtle: "text-primary hover:text-on-brand-secondary hover:bg-brand-secondary",
      link: "link rounded",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, fullWidth, size, asChild = false, ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const classes = buttonVariants({ size, variant, fullWidth, className });
  const Comp = asChild ? Slot : "button";

  return <Comp className={classes} ref={ref} {...props} />;
}

const ForwardedButton = React.forwardRef(Button);

export { ForwardedButton as Button };
