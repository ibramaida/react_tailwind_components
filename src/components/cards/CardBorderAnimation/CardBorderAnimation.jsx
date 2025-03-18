import React from "react";

export const CardBorderAnimation = () => {
  return (
    <div className="w-100 bg-slate-600 text-slate-100 p-4 rounded-lg relative after:absolute after:-inset-4 after:rounded-lg after:-z-1 after:bg-conic/decreasing after:from-violet-700 after:via-lime-300 after:to-violet-700 ">
      <h3>Card Title</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic harum
        pariatur porro asperiores ipsam cumque officia ullam earum laudantium
        suscipit minima facilis deleniti rerum, iusto, voluptatem minus dolore
        id iste!
      </p>
    </div>
  );
};
