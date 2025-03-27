import React, { useState } from "react";
import { useEffect } from "react";

export const Select = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  //   const [value, setValue] = useState(options[0]);
  //   console.log(isOpen);

  function clearOptions() {
    onChange(undefined);
  }

  function selectOption(option) {
    onChange(option);
  }

  function isOptionSelected(option) {
    return option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      tabIndex={0}
      onClick={() => setIsOpen((prevValue) => !prevValue)}
      onBlur={() => setIsOpen(false)}
      className="relative w-sm min-h-10 bg-slate-400 px-2 py-1 border border-neutral-500 rounded-lg flex items-center cursor-pointer"
    >
      <div className="grow-1">{value?.label}</div>
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
