/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { scrollTo } from "../../utils/animateScroll";

const ScrollToButton = ({
  toId,
  toRef,
  duration,
  children,
}: {
  toId: string;
  toRef?: any;
  duration?: number;
  children: JSX.Element | JSX.Element[];
}) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

  return <button onClick={handleClick}>{children}</button>;
};

export default ScrollToButton;
