import React, { FC, ReactNode, useContext, useEffect, useRef, useState } from "react";
import "./PopUp.scss";
import closeIcon from "@/assets/img/icons/close.svg";
import { GlobalContext } from "../GlobalContext/GlobalContext";

interface PopUpProps {
  children: ReactNode;
}

const rootElement = document.getElementById("root");

const PopUp: FC<PopUpProps> = ({ children }) => {
  const { theme, setTheme, isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);

  const popUpRef = useRef(null);
  const popUpCloseButtonRef = useRef(null);

  useEffect(() => {
    popUpRef.current.focus();
  }, [isOpenPopUp]);

  const togglePopup = () => {
    setOpenPopUp(!isOpenPopUp);
  };

  useEffect(() => {
    isOpenPopUp ? rootElement.classList.add("scroll-lock") : rootElement.classList.remove("scroll-lock");

    return () => {
      rootElement.classList.remove("scroll-lock");
    };
  }, [isOpenPopUp]);

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Tab" && !event.shiftKey && popUpRef.current) {
      event.preventDefault();
      popUpRef.current.focus();
    }
  };

  return (
    <div className={`popUp ${isOpenPopUp ? "popUp_open" : ""}`}>
      <div className="popUp__container" ref={popUpRef} tabIndex={0} aria-live="assertive">
        {children}
        <button
          className="popUp__close"
          aria-label="close pop-up"
          onClick={togglePopup}
          ref={popUpCloseButtonRef}
          onKeyDown={handleTabKeyDown}
        >
          <img
            src={closeIcon}
            className={`popUp__closeIcon popUp__closeIcon_${theme}`}
            alt="close icon"
            width="24"
            height="24"
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="popUp__BG" onClick={togglePopup}></div>
    </div>
  );
};

export default PopUp;
