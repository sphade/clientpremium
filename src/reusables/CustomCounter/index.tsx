import React, { useState } from "react";
import { ReactComponent as DecrementIcon } from "./../../assets/svgs/decrement.svg";
import { ReactComponent as IncrementIcon } from "./../../assets/svgs/increment.svg";

const CustomCounter = ({
  text = "passenger",
  outlined = false,
  mb = false,
}: {
  text?: string;
  outlined?: boolean;
  mb?: boolean;
}) => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count < 2) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div
      className={`${outlined ? "outlined" : ""} ${
        mb ? "mb" : ""
      } custom__counter`}
    >
      <DecrementIcon onClick={decrement} />
      <p>
        {count} {count === 1 ? text : `${text}s`}
      </p>
      <IncrementIcon onClick={increment} />
    </div>
  );
};

export default CustomCounter;
