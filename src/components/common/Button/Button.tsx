"use client";

import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outline";
}

export function Button({ children, className, asChild, variant = "primary", ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  const variantClass = {
    primary: styles.primary,
    secondary: styles.secondary,
    outline: styles.outline,
  }[variant];

  return (
    <Component className={`${styles.button} ${variantClass} ${className || ""}`} {...props}>
      {children}
    </Component>
  );
}