"use client";

import React, { ReactNode } from "react";
import styles from "./CardContent.module.css";

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={`${styles.cardContent} ${className || ""}`}>{children}</div>;
}
