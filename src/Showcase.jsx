import { useEffect, useState } from "react";
import "boxicons";

import {
  ButtonFill,
  MenuOne,
  GlassyButton,
  SliderIndicators,
  CardImageExample,
  CardBorderAnimation,
  NavbarHover,
} from "./components";

const Showcase = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      return theme === "dark";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  // console.log(activeMenu, selectedComponent);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  const components = {
    buttons: [
      { name: "Button Fill", component: <ButtonFill /> },
      { name: "Button Glassy", component: <GlassyButton /> },
    ],
    menus: [{ name: "Menu One", component: <MenuOne /> }],
    cards: [
      { name: "Card with Image", component: <CardImageExample /> },
      { name: "Card Border Animation", component: <CardBorderAnimation /> },
    ],
    sliders: [
      { name: "Slider with Indicators", component: <SliderIndicators /> },
    ],
    navbars: [{ name: "Navbar Hover Effect", component: <NavbarHover /> }],
    // Add more component groups as needed
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Header/Navigation */}
      <nav className="bg-teal-500 shrink-0 md:w-64 md:h-screen md:overflow-y-auto">
        <div className="bg-teal-900 flex md:justify-center p-4">
          <button
            onClick={handleTheme}
            className="bg-teal-600 text-white text-2xl p-2 flex justify-center items-center rounded-full cursor-pointer hover:bg-teal-700"
          >
            {darkMode ? <i class="bx bx-sun"></i> : <i class="bx bx-moon"></i>}
          </button>
        </div>
        <h1 className="text-2xl text-slate-700 font-bold p-4">
          React Components
        </h1>
        <div className="flex flex-row overflow-x-auto md:flex-col p-4 space-y-0 md:space-y-2 space-x-2 md:space-x-0">
          {Object.entries(components).map(([groupName, items]) => (
            <div key={groupName} className="relative">
              <button
                className="text-white  text-sm md:text-base p-2 leading-tight w-full text-left cursor-pointer hover:bg-teal-600 rounded-md flex justify-between items-baseline"
                onClick={() =>
                  setActiveMenu(activeMenu === groupName ? null : groupName)
                }
              >
                {groupName.charAt(0).toUpperCase() + groupName.slice(1)}
                <span className="text-[10px] ml-2 md:m-0 md:text-[12px] ">
                  {activeMenu === groupName ? (
                    <i className="bx bxs-right-arrow"></i>
                  ) : (
                    <i className="bx bxs-down-arrow"></i>
                  )}
                </span>
              </button>
              {activeMenu === groupName && (
                <div className=" md:ml-2 mt-1 space-y-1">
                  {items.map((item, index) => (
                    <button
                      key={index}
                      className={`text-white text-sm md:text-base block px-4 py-2 w-full text-left text-nowrap hover:bg-teal-600 active:scale-95 rounded-md cursor-pointer ${
                        selectedItem === item.name ? "bg-teal-600" : ""
                      }`}
                      onClick={() => {
                        setSelectedComponent(item.component);
                        setSelectedItem(item.name);
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Main Showcase Area */}
      <main className="bg-slate-200 dark:bg-slate-900 flex-1 min-h-[calc(100vh-56px)] md:min-h-screen flex items-center justify-center transition-colors duration-300">
        <div className="p-4 w-full max-w-4xl">
          {selectedComponent || (
            <p className="text-slate-900 dark:text-slate-100 text-center text-lg">
              Select a component from the menu to preview
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Showcase;
