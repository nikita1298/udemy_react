import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [ActiveIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const rendredItems = items.map((item, index) => {
    const active = index === ActiveIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
          <h1>Accordion {items.length}</h1>
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{rendredItems}</div>;
};

export default Accordion;
