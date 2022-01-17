import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomChips = ({ lists, label }: { lists: any[]; label?: string }) => {
  const [selectedChip, setSelectedChip] = useState<string | number>("");

  const handleChange = (key: number | string) => {
    setSelectedChip(key);
  };

  return (
    <div className="chip">
      {label && <label>By number of passengers</label>}
      <div className="chip__filter">
        {lists.map((list) => (
          <div
            onClick={() => handleChange(list?.id)}
            className={`chip__filter--chip ${
              selectedChip === list?.id ? "active" : ""
            }`}
            key={list?.id}
          >
            {list?.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomChips;
