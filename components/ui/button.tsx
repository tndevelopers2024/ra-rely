import * as React from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = ({
  variant = "primary",
  size = "default",
  className,
}: {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
} = {}) => {
  return cn(
    "inline-flex items-center justify-center font-heading font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rely-navy disabled:pointer-events-none disabled:opacity-50 rounded-sm",
    {
      "bg-rely-navy text-white hover:bg-advisory-gold hover:text-rely-navy":
        variant === "primary",
      "border border-rely-navy bg-transparent text-rely-navy hover:bg-rely-navy hover:text-white":
        variant === "secondary",
      "border border-advisory-gold bg-transparent text-advisory-gold hover:bg-advisory-gold hover:text-rely-navy":
        variant === "outline",
      "hover:bg-cloud-grey text-rely-navy": variant === "ghost",
      "h-12 px-6 py-2": size === "default",
      "h-10 px-4 text-sm": size === "sm",
      "h-14 px-8 text-lg": size === "lg",
    },
    className,
  );
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
