import React from "react";
import { BOSS_BUS_SVG } from "../constants";

const { ErrorSvg } = BOSS_BUS_SVG;

const AppState = ({ text = "Sorry! Nothing here" }: { text?: string }) => {
  return (
    <div className="empty__state">
      <ErrorSvg />
      {text && <h3 className="!mt-6">{text}</h3>}
    </div>
  );
};

export default AppState;
