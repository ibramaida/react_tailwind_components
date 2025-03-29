import React, { useRef, useState } from "react";
import { useEffect } from "react";

export const Select = ({ multiple, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((item) => item !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    const handler = (e) => {
      // Check if the event target is inside the container
      if (!containerRef.current || !containerRef.current.contains(e.target))
        return;

      console.log(e.code);

      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prevValue) => !prevValue);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
        default:
          break;
      }
    };

    // Attach the event listener to the document
    document.addEventListener("keydown", handler);

    return () => {
      // Clean up the event listener
      document.removeEventListener("keydown", handler);
    };
  }, [isOpen, highlightedIndex, options]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onClick={() => setIsOpen((prevValue) => !prevValue)}
      onBlur={() => setIsOpen(false)}
      className="relative w-sm min-h-10 bg-slate-400 px-2 py-1 border border-neutral-500 rounded-lg flex items-center cursor-pointer"
    >
      <div className="grow-1 flex gap-1 flex-wrap">
        {multiple
          ? value.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(item);
                }}
                className="group flex items-center px-1 bg-neutral-400 outline-none border border-neutral-800 rounded-lg hover:bg-red-300 focus:bg-red-300 hover:border-red-600 focus:border-red-600 cursor-pointer"
              >
                {item.label}
                <span className="text-slate-500 group-hover:text-red-600 group-focus:text-red-600">
                  &times;
                </span>
              </button>
            ))
          : value?.label}
      </div>
      <button
        className="cursor-pointer text-neutral-600"
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </button>
      <span className="bg-neutral-500 w-[1px] self-stretch mx-1"></span>
      <span className="text-xs text-neutral-600">⋁</span>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-slate-400 border border-slate-500 rounded-lg mt-1`}
      >
        <ul>
          {options.map((option, index) => (
            <li
              className={`px-2 py-1 ${
                highlightedIndex === index ? "bg-neutral-500" : ""
              } ${isOptionSelected(option) ? "bg-neutral-400" : ""} `}
              key={option.value}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
                selectOption(option);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
