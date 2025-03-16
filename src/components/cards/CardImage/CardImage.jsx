import React from "react";

import laptop1 from "../../../assets/images/laptops/laptop1.jpg";
import { laptopImages } from "../../../assets/images/laptops/laptops";
export const CardImage = ({ slide }) => {
  return (
    <figure className="grid bg-slate-200 max-w-100 rounded-2xl overflow-hidden shadow-lg">
      <img
        className="aspect-video object-cover"
        src={slide.src}
        alt={slide.name}
      />
      <figcaption className="p-4">
        <h2 className="text-xl font-semibold mb-2">{slide.name}</h2>
        <p className="text-sm text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          quaerat.
        </p>
      </figcaption>
    </figure>
  );
};
