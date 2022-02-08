import React, { useEffect } from "react";

/** Render page loader */
const Loader = ({ text = "Loading..." }: { text?: string }): JSX.Element => {
  // Effect to make scrolling hidden
  useEffect(() => {
    const { body } = document;

    body.classList.add("overflow-hidden");
    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="loader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
      {text && <h3 className="!mt-6">{text}</h3>}
    </div>
  );
};

export default Loader;
