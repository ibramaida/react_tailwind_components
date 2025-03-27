import React, { useState } from "react";
import Showcase from "./Showcase";
import { Select } from "./components";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
  { value: "option6", label: "Option 6" },
];

const App = () => {
  const [value, setValue] = useState(options[0]);
  return (
    <>
      <Showcase />
      <div className="flex justify-center items-center h-screen">
        <Select
          options={options}
          value={value}
          onChange={(option) => {
            console.log("onChange triggered");

            setValue(option);
          }}
        />
      </div>
    </>
  );
};

export default App;
