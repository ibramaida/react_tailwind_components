import React, { useRef, useState } from "react";

const items = [
  {
    name: "About",
  },
  { name: "Skills", items: ["UI/UX", "Development", "Design"] },
  {
    name: "Projects",
    items: ["Project 1", "Project 2", "Project 3"],
  },
  {
    name: "Contact",
    items: ["Email", "Phone", "Social"],
  },
];

const Link = ({ item, activeItem, onHover }) => {
  const linkRef = useRef();
  const handleHover = () => {
    const rect = linkRef.current.getBoundingClientRect();
    console.log(rect);

    onHover(item, `${rect.x}px`);
  };

  return (
    <a
      ref={linkRef}
      onMouseEnter={handleHover}
      className={item?.name === activeItem?.name ? "active" : ""}
    >
      {item.name}
    </a>
  );
};

const Search = () => {
  return (
    <div className="bg-slate-200 flex items-center gap-2 p-2 rounded-lg ">
      <i className="bx bx-search opacity-50"></i>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export const NavbarHover = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [translateX, setTranslateX] = useState("0");
  const handleLinkHover = (item, x) => {
    setActiveItem(item || null);
    setTranslateX(x);
  };
  return (
    <nav className="bg-white p-4 flex flex-col md:flex-row md:items-center md:gap-8">
      <img
        className="size-10 rounded-full"
        src="https://randomuser.me/api/portraits/women/3.jpg"
        alt="user"
      />
      <div className="grow flex flex-col md:flex-row md:gap-4">
        {items.map((item, index) => (
          <Link
            key={index}
            item={item}
            activeItem={activeItem}
            onHover={handleLinkHover}
          />
        ))}
        <div
          style={{
            translate: `${translateX} 0`,
          }}
          className={`${activeItem ? "visible" : ""}`}
        >
          {activeItem?.items?.map((link, index) => (
            <a key={index}>{link}</a>
          ))}
        </div>
      </div>
      <Search />
    </nav>
  );
};
