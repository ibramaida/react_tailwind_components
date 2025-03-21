import React from "react";

import "./CardBorderAnimation.css";

export const CardBorderAnimation = () => {
  return (
    <div className="wrapper flex flex-col items-center gap-8 md:flex-row">
      {/* card 1 - multible colors */}
      <div className="relative flex  max-w-70 items-center justify-center rounded-xl ">
        <div className="rotating-gradient absolute inset-0 z-0 rounded-xl after:absolute after:-inset-1 after:bg-[conic-gradient(from_var(--angle),_red,_orange,_green,_blue,_purple,_red)] after:rounded-xl after:animate-rotate-gradient before:absolute before:-inset-1 before:bg-[conic-gradient(from_var(--angle),_red,_orange,_green,_blue,_purple,_red)] before:rounded-xl before:animate-rotate-gradient before:blur-sm before:opacity-50" />
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

      {/* card 2 - transparent and blue */}
      <div className="relative flex  max-w-70 items-center justify-center rounded-xl ">
        <div className="rotating-gradient absolute inset-0 z-0 rounded-xl after:absolute after:-inset-1 after:bg-[conic-gradient(from_var(--angle),_transparent,_blue_90%)] after:rounded-xl after:animate-rotate-gradient before:absolute before:-inset-1 before:bg-[conic-gradient(from_var(--angle),_transparent,_blue_90%)] before:rounded-xl before:animate-rotate-gradient before:blur-sm before:opacity-50" />
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
