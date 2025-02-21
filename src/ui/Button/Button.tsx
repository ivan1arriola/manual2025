"use client";

import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}
