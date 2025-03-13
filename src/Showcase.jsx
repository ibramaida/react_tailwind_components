import { useState } from "react";

const ComponentShowcase = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Sample components
  const ButtonOne = () => (
    <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
      Button One
    </button>
  );

  const ButtonTwo = () => (
    <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
      Button Two
    </button>
  );

  const components = {
    buttons: [
      { name: "Button One", component: <ButtonOne /> },
      { name: "Button Two", component: <ButtonTwo /> },
    ],
    // Add more component groups as needed
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Header/Navigation */}
      <nav className="bg-teal-500 md:w-64 md:h-screen md:overflow-y-auto">
        <div className="flex flex-row md:flex-col p-4 space-y-0 md:space-y-2 space-x-2 md:space-x-0">
          {Object.entries(components).map(([groupName, items]) => (
            <div key={groupName} className="relative">
              <button
                className="text-white px-4 py-2 w-full text-left hover:bg-teal-600 rounded-md flex justify-between items-center"
                onClick={() =>
                  setActiveMenu(activeMenu === groupName ? null : groupName)
                }
              >
                {groupName.charAt(0).toUpperCase() + groupName.slice(1)}
                <span className="ml-2">
                  {activeMenu === groupName ? "▼" : "►"}
                </span>
              </button>
              {activeMenu === groupName && (
                <div className="ml-4 md:ml-2 mt-1 space-y-1">
                  {items.map((item, index) => (
                    <button
                      key={index}
                      className="text-white block px-4 py-2 w-full text-left hover:bg-teal-600 rounded-md"
                      onClick={() => setSelectedComponent(item.component)}
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
      <main className="bg-slate-900 flex-1 min-h-[calc(100vh-56px)] md:min-h-screen flex items-center justify-center">
        <div className="p-4 w-full max-w-4xl">
          {selectedComponent || (
            <p className="text-white text-center text-lg">
              Select a component from the menu to preview
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ComponentShowcase;
