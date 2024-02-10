import React, { FC } from "react";
import "./OptionButton.scss";
const OptionButton: FC = () => {
  return (
    <button className="optionButton" aria-label="more option">
      <span className="optionButton__dot" />
      <span className="optionButton__dot" />
      <span className="optionButton__dot" />
    </button>
  );
};

export default OptionButton;
