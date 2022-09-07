import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomChips = ({ lists, label, setValue }: { lists: any[]; label?: string;setValue?:any }) => {
  const [selectedChip, setSelectedChip] = useState<string | number>("");

  const handleChange = (key: number | string) => {
    setSelectedChip(key);
    setValue(key)
  };

  return (
    <div className="chip">
      {label && <label>{label}</label>}
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
