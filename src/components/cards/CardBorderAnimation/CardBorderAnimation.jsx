import React from "react";

import "./CardBorderAnimation.css";

export const CardBorderAnimation = () => {
  return (
    // <div className="animated-border">
    //   <h3>Card Title</h3>
    //   <p>
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic harum
    //     pariatur porro asperiores ipsam cumque officia ullam earum laudantium
    //     suscipit minima facilis deleniti rerum, iusto, voluptatem minus dolore
    //     id iste!
    //   </p>
    // </div>
    <div className="wrapper flex gap-4">
      <div className="relative flex  max-w-70 items-center justify-center rounded-xl ">
        <style jsx>{`
          @property --angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }
          @keyframes rotate {
            to {
              --angle: 360deg;
            }
          }
          .rotating-gradient::before,
          .rotating-gradient::after {
            content: "";
            position: absolute;
            inset: -0.25rem;
            background: conic-gradient(
              from var(--angle),
              red,
              orange,
              green,
              blue,
              purple,
              red
            );
            animation: rotate 3s linear infinite;
            border-radius: inherit;
          }
          .rotating-gradient::before {
            filter: blur(1rem);
            opacity: 0.5;
          }
        `}</style>
        <div className="rotating-gradient absolute inset-0 z-0 rounded-xl" />
        <div className="relative z-10 w-full rounded-xl bg-white p-4 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            Rotating Border Card
          </h2>
          <p className="mt-4 text-gray-600">
            This card features an infinite rotating border animation using conic
            gradients.
          </p>
        </div>
      </div>
    </div>
  );
};
