import React, { useEffect, useState } from "react";
import { ICustomFormikProps } from "../Input/types";
import { ReactComponent as DecrementIcon } from "./../../assets/svgs/decrement.svg";
import { ReactComponent as IncrementIcon } from "./../../assets/svgs/increment.svg";

const CustomCounter = ({
  text = "passenger",
  outlined = false,
  mb = false,
  formik,
  name = "passenger",
  getCount,
}: {
  text?: string;
  outlined?: boolean;
  mb?: boolean;
  formik?: ICustomFormikProps;
  name?: string;
  getCount?: (count: number) => void;
}) => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count < 2) {
      return;
    }
    setCount(count - 1);
  };

  useEffect(() => {
    if (formik) {
      const { setFieldValue } = formik;

      setFieldValue(name, count);
    }

    if (getCount) {
      getCount(count);
    }
  }, [count]);

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
