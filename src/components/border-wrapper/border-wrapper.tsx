"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./border-wrapper.module.css";
import React from "react";

export default function BorderWrapper({ 
  children, borderSize, borderColor
} : { 
  children: React.ReactNode, borderSize: number, borderColor?: string
}) {
  const defaultBackgroundColor = "linear-gradient(112.12deg, #830DBA 6.85%, #FD9E17 94.58%)";
  const childRef = useRef<HTMLDivElement>(null);
  const [borderProperties, setBorderProperties] = useState({
    padding: `${borderSize}px`,
    background: borderColor || defaultBackgroundColor,
    borderRadius: "0px",
  });

  useEffect(() => {
    if (childRef.current) {
      const childBorderRadius = window.getComputedStyle(childRef.current).borderRadius;
      const newBorderRadius = parseInt(childBorderRadius) + 4;
      setBorderProperties(prev => ({
        ...prev,
        borderRadius: `${newBorderRadius}px`,
      }));
    }
  }, []);;

  return (
    <div className={styles["border-wrapper"]} style={{...borderProperties}}>
      {React.cloneElement(children as React.ReactElement, { ref: childRef })}
    </div>
  );
}