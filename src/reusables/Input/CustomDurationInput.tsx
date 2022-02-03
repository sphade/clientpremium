import React from "react";
import { ReactComponent as Timer } from "../../assets/svgs/timer.svg";
import { ReactComponent as Add } from "../../assets/svgs/button-add.svg";
import { ReactComponent as Subtract } from "../../assets/svgs/button-subtract.svg";
import { ICustomFormikProps } from "./types";

const CustomDurationInput = ({
  label,
  isHour = true,
  formik,
  name = "duration",
}: {
  label: string;
  isHour?: boolean;
  formik?: ICustomFormikProps;
  name?: string;
}) => {
  let count = 1;

  if (formik) {
    const { values } = formik;
    count = values[name] || 1;
  }

  const increment = () => {
    if (formik) {
      const { setFieldValue } = formik;
      const newValue = count + 1;
      setFieldValue(name, newValue);
    }
  };
  const decrement = () => {
    if (formik) {
      const { setFieldValue } = formik;
      if (count < 2) {
        return;
      }
      const newValue = count - 1;
      setFieldValue(name, newValue);
    }
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
    <div className="w-full duration__box">
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
    </div>
  );
};

export default CustomDurationInput;
