import React, { useState } from "react";
import { ReactComponent as Timer } from "../../assets/svgs/timer.svg";
import { ReactComponent as Add } from "../../assets/svgs/button-add.svg";
import { ReactComponent as Subtract } from "../../assets/svgs/button-subtract.svg";

const CustomDurationInput = ({
  label,
  isHour = true,
}: {
  label: string;
  isHour?: boolean;
}) => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count < 2) {
      return;
    }
    setCount(count - 1);
  };

  const formatTime = () => {
    let word = "";

    if (isHour) {
      word += "Hour";
    } else {
      word += "Day";
    }
    if (count > 1) {
      word += "s";
    }

    return word;
  };

  return (
    <button className="duration__input">
      <div className="action">
        <Timer />
        <span>{label}</span>
      </div>
      <div className="action">
        <Subtract onClick={decrement} />
        <span>
          {count} {formatTime()}
        </span>
        <Add onClick={increment} />
      </div>
    </button>
  );
};

export default CustomDurationInput;
