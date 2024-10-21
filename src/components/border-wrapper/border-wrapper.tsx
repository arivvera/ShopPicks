"use client"
import React from "react";
import { useEffect, useRef } from "react";

export default function BorderWrapper({
  children, 
  borderSize,
} : {
  children: React.ReactElement,
  borderSize: number
}) {
  const childRef = useRef(null); 
  const wrapperRef = useRef<HTMLDivElement>(null);
  const defaultBackgroundColor = "linear-gradient(112.12deg, #830DBA 6.85%, #FD9E17 94.58%)";

  useEffect(() => {
    if (childRef.current && wrapperRef.current) {
      const childStyles = globalThis.getComputedStyle(childRef.current);
      const childBorderRadius = childStyles.borderRadius;
      const wrapperStyles = wrapperRef.current.style;
      wrapperStyles.borderRadius = `${parseInt(childBorderRadius, 10) + 4}px`;
      wrapperStyles.padding = `${borderSize}px`;
      wrapperStyles.background = defaultBackgroundColor;
    }
  }, [])

  return (
    <div ref={wrapperRef}>
      {
        React.cloneElement(children, {ref: childRef})
      }
    </div>
  );
}