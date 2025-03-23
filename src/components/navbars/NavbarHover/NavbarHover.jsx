// import React, { useRef, useState, useEffect } from "react";

// const items = [
//   {
//     name: "About",
//   },
//   { name: "Skills", items: ["UI/UX", "Development", "Design"] },
//   {
//     name: "Projects",
//     items: ["Project 1", "Project 2", "Project 3"],
//   },
//   {
//     name: "Contact",
//     items: ["Email", "Phone", "Social"],
//   },
// ];

// const Link = ({ item, activeItem, onHover }) => {
//   const linkRef = useRef();

//   const handleHover = () => {
//     const rect = linkRef.current.getBoundingClientRect();
//     onHover(item, `${rect.x}px`);
//   };

//   const handleFocus = () => {
//     const rect = linkRef.current.getBoundingClientRect();
//     onHover(item, `${rect.x}px`);
//   };

//   return (
//     <a
//       href="#" // Add href
//       ref={linkRef}
//       onMouseEnter={handleHover}
//       onFocus={handleFocus}
//       className={`p-4 font-semibold -outline-offset-8 ${
//         item?.name === activeItem?.name ? "active" : ""
//       } hover:text-teal-600 focus:text-teal-600 cursor-pointer`}
//     >
//       {item.name}
//     </a>
//   );
// };

// const Search = () => {
//   return (
//     <div className="bg-slate-200 flex items-center gap-2 p-2 rounded-lg ">
//       <i className="bx bx-search opacity-50"></i>
//       <input type="text" placeholder="Search..." />
//     </div>
//   );
// };

// export const NavbarHover = () => {
//   const [activeItem, setActiveItem] = useState(null);
//   const [translateX, setTranslateX] = useState("0");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dropdownRef = useRef();
//   const [focusedIndex, setFocusedIndex] = useState(-1);

//   const handleLinkHover = (item, x) => {
//     setActiveItem(item || null);
//     setTranslateX(x);
//     setFocusedIndex(-1);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setActiveItem(null);
//     }
//   };

//   const handleKeyDown = (event) => {
//     if (activeItem && activeItem.items) {
//       if (event.key === "ArrowDown") {
//         event.preventDefault();
//         setFocusedIndex(
//           (prevIndex) => (prevIndex + 1) % activeItem.items.length
//         );
//       } else if (event.key === "ArrowUp") {
//         event.preventDefault();
//         setFocusedIndex(
//           (prevIndex) =>
//             (prevIndex - 1 + activeItem.items.length) % activeItem.items.length
//         );
//       } else if (event.key === "Escape") {
//         setActiveItem(null);
//       }
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [activeItem]);

//   useEffect(() => {
//     if (focusedIndex !== -1 && dropdownRef.current) {
//       const links = dropdownRef.current.querySelectorAll("a");
//       if (links[focusedIndex]) {
//         links[focusedIndex].focus();
//       }
//     }
//   }, [focusedIndex]);

//   return (
//     <nav className="fixed top-0 right-0 w-[calc(100%-256px)] bg-white px-4 py-2 flex flex-col md:flex-row md:items-center md:gap-8">
//       <img
//         className="size-10 rounded-full"
//         src="https://randomuser.me/api/portraits/women/3.jpg"
//         alt="user"
//       />
//       <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
//         <i className="bx bx-menu text-2xl"></i>
//       </button>
//       <div
//         className={`grow flex flex-col md:flex-row ${
//           menuOpen ? "block" : "hidden"
//         } md:block`}
//       >
//         {items.map((item, index) => (
//           <Link
//             key={index}
//             item={item}
//             activeItem={activeItem}
//             onHover={handleLinkHover}
//           />
//         ))}
//         <div
//           ref={dropdownRef}
//           style={{
//             translate: `${translateX} 0`,
//           }}
//           className={`fixed top-16 left-0 z-10 py-4 rounded-lg grid gap-2 bg-slate-200 transition duration-200 ${
//             activeItem ? "visible opacity-100 h-max" : "opacity-0 invisible h-0"
//           } overflow-hidden`}
//         >
//           {activeItem?.items?.map((link, index) => (
//             <a
//               href="#"
//               tabIndex="0"
//               className="min-w-28 px-4 hover:text-teal-600 focus:text-teal-600 cursor-pointer -outline-offset-2"
//               key={index}
//             >
//               {link}
//             </a>
//           ))}
//         </div>
//       </div>
//       <Search />
//     </nav>
//   );
// };

import React, { useRef, useState, useEffect } from "react";

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
    onHover(item, `${rect.x}px`);
  };

  const handleFocus = () => {
    const rect = linkRef.current.getBoundingClientRect();
    onHover(item, `${rect.x}px`);
  };

  return (
    <a
      href="#" // Add href
      ref={linkRef}
      onMouseEnter={handleHover}
      onFocus={handleFocus}
      className={`px-2 lg:p-4 font-semibold -outline-offset-8 ${
        item?.name === activeItem?.name ? "active" : ""
      } hover:text-teal-600 focus:text-teal-600 cursor-pointer`}
    >
      {item.name}
    </a>
  );
};

const Search = () => {
  return (
    <div className="bg-slate-200 flex items-center gap-2 p-2 rounded-lg absolute top-2 right-4 md:block">
      <i className="bx bx-search opacity-50"></i>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export const NavbarHover = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [translateX, setTranslateX] = useState("0");
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleLinkHover = (item, x) => {
    setActiveItem(item || null);
    setTranslateX(x);
    setFocusedIndex(-1);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveItem(null);
    }
  };

  const handleKeyDown = (event) => {
    if (activeItem && activeItem.items) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setFocusedIndex(
          (prevIndex) => (prevIndex + 1) % activeItem.items.length
        );
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setFocusedIndex(
          (prevIndex) =>
            (prevIndex - 1 + activeItem.items.length) % activeItem.items.length
        );
      } else if (event.key === "Escape") {
        setActiveItem(null);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem]);

  useEffect(() => {
    if (focusedIndex !== -1 && dropdownRef.current) {
      const links = dropdownRef.current.querySelectorAll("a");
      if (links[focusedIndex]) {
        links[focusedIndex].focus();
      }
    }
  }, [focusedIndex]);

  return (
    <nav className="@lg:flex @lg:items-center @lg:justify-between fixed top-0 md:top-0 right-0 w-full md:w-[calc(100%-256px)] bg-white px-4 py-2 @container">
      <div className="shrink-0 flex items-center mr-2">
        <img
          className="size-10 rounded-full"
          src="https://randomuser.me/api/portraits/women/3.jpg"
          alt="user"
        />
        <button
          className="@lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="bx bx-menu text-2xl"></i>
        </button>
      </div>
      <div
        className={`grow flex flex-col md:flex-row ${
          menuOpen ? "block" : "hidden"
        } @lg:block`}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            item={item}
            activeItem={activeItem}
            onHover={handleLinkHover}
          />
        ))}
        <div
          ref={dropdownRef}
          style={{
            translate: `${translateX} 0`,
          }}
          className={`fixed top-16 left-0 z-10 py-4 rounded-lg grid gap-2 bg-slate-200 transition duration-200 ${
            activeItem ? "visible opacity-100 h-max" : "opacity-0 invisible h-0"
          } overflow-hidden`}
        >
          {activeItem?.items?.map((link, index) => (
            <a
              href="#"
              tabIndex="0"
              className="min-w-28 px-4 hover:text-teal-600 focus:text-teal-600 cursor-pointer -outline-offset-2"
              key={index}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <Search />
    </nav>
  );
};
