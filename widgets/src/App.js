import React from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import { useState } from "react";
import Translate from "./Components/Translator";

const items = [
  {
    title: "what is React?",
    content: "React is  front end javascript framework",
  },
  {
    title: "why use React?",
    content: "React is a favrioute JS library among engineers",
  },
  {
    title: "Hoe do you use react?",
    content: "You use react by creating components",
  },
];

const options = [
  {
    label: 'The color Red',
    value:'red'
  },
  {
    label: 'The color Green',
    value:'green'
  },
  {
    label: 'The color Blue',
    value:'blue'
    },
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <br />
      {/* <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
      {/* {showDropdown ? <Dropdown options={options} selected={selected} onSelectedChange={setSelected} /> : null} */}
      <Translate />
    </div>
  );
};
