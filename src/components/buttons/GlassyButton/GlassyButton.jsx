import React, { useEffect, useRef } from "react";
import "./style.css";

export function GlassyButton() {
  const buttonRef = useRef(null);

  const handleMove = (e) => {
    const centerX = buttonRef.current.offsetWidth / 2;
    const centerY = buttonRef.current.offsetHeight / 2;

    const mouseX = e.nativeEvent.offsetX - centerX;
    const mouseY = e.nativeEvent.offsetY - centerY;

    buttonRef.current.style.setProperty("--_x-motion", `${mouseX}px`);
    buttonRef.current.style.setProperty("--_y-motion", `${mouseY}px`);
  };
  return (
    <div className="wrapper flex gap-4">
      <button
        ref={buttonRef}
        onMouseMove={handleMove}
        className="glassy-button"
      >
        <span>Get started</span>
      </button>
      <button className="glassy-button">
        <span>Get started</span>
      </button>
    </div>
  );
}
