import React from "react";
import "./style.css";

export function GlassyButton() {
  return (
    // <button
    //   style={{
    //     "--button-text": "hsl(200, 60%, 12%)",
    //     // "--button-1-surface": "hsl(197, 88%, 58%)",
    //     "--_surface": "hsl(197, 88%, 58%)",
    //     "--_padding": "1rem 1.5rem",
    //     "--_transition-speed": "200ms",
    //     "--_hover-opacity": "0.4",
    //     "--_pressed-opacity": "0.15",
    //     "--_hover-blurriness": "5px",
    //     "--_pressed-blurriness": "10px",
    //     "--_frostiness": "0.3",
    //     "--_hover-offset": "0.5rem",
    //     "--_pressed-offset": "0.25rem",
    //     "--_motion-factor": "0.1",
    //   }}
    //   className={`
    //     group
    //     relative
    //     outline-none
    //     cursor-pointer
    //     font-medium
    //     p-0
    //     border-0
    //     rounded-[1rem]
    //     bg-transparent
    //     /* ::after on the button */
    //     after:content-['']
    //     after:absolute
    //     after:inset-0
    //     after:z-[-1]
    //     after:rounded-[inherit]
    //     after:bg-[var(--_surface)]
    //     after:transition-transform
    //     after:duration-200
    //     after:transform
    //     after:scale-100
    //     after:translate-y-0
    //     hover:after:scale-[0.95]
    //     hover:after:translate-y-[0.125rem]
    //     active:after:scale-[0.875]
    //     active:after:translate-y-[0.25rem]
    //   `}
    // >
    //   <span
    //     className={`
    //       block
    //       overflow-hidden
    //       relative
    //       rounded-[inherit]
    //       bg-[hsla(0,0%,100%,0)]
    //       transition-all
    //       duration-200
    //       ease-linear
    //       /* On hover/focus: apply outline, change bg, blur and translate */
    //       group-hover:outline-[1px_solid_hsl(0,0%,100%,0.7)]
    //       group-hover:bg-[hsla(0,0%,100%,var(--_hover-opacity))]
    //       group-hover:backdrop-blur-[5px]
    //       group-hover:-translate-y-[0.5rem]
    //       /* On active: update blur, bg and translate */
    //       active:backdrop-blur-[10px]
    //       active:bg-[hsla(0,0%,100%,var(--_pressed-opacity))]
    //       active:-translate-y-[0.25rem]
    //     `}
    //     style={{
    //       padding: "var(--_padding)",
    //       backdropFilter: "blur(0px)",
    //       transition:
    //         "background-color var(--_transition-speed), backdrop-filter var(--_transition-speed), transform var(--_transition-speed)",
    //     }}
    //   >
    //     <span className="relative z-10">Get started</span>

    //     {/*
    //       The following span is used solely to host the ::before pseudo-element.
    //       (Using Tailwind’s arbitrary variant notation via `[&::before]` here.)
    //     */}
    //     <span
    //       className={`
    //         [&::before]:content-['']
    //         [&::before]:absolute
    //         [&::before]:inset-0
    //         [&::before]:z-[-1]
    //         [&::before]:bg-[url('data:image/svg+xml,%3C!--%20svg:%20first%20layer%20--%3E%3Csvg%20viewBox=%270%200%20171%20171%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27noiseFilter%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%273.74%27%20numOctaves=%272%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')]
    //         [&::before]:opacity-0
    //         [&::before]:transition-opacity
    //         [&::before]:duration-200
    //         group-hover:[&::before]:opacity-[var(--_frostiness)]
    //       `}
    //     />
    //   </span>
    // </button>
    <div className="wrapper flex gap-4">
      <button className="glassy-button">
        <span>Get started</span>
      </button>
      <button className="glassy-button">
        <span>Get started</span>
      </button>
    </div>
  );
}
