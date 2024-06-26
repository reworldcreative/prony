import React, { FC, useContext } from "react";
import "./Marker.scss";
import closeIcon from "@/assets/img/icons/close.svg";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";

interface MarkerProps {
  name: string;
  removeItem?: () => void;
  color?: "info" | "success" | "danger";
  hashColor?: string;
  type?: "standard" | "remove";
}

const Marker: FC<MarkerProps> = ({ name, removeItem, type, color, hashColor }) => {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      className={`posts__marker subtitle-second ${color ? `posts__marker_${color}` : ""}`}
      style={{ backgroundColor: hashColor }}
      tabIndex={0}
    >
      {name}
      {type && type === "remove" && (
        <button className="posts__markerRemove" aria-label="remove marker" onClick={removeItem}>
          <img
            src={closeIcon}
            className={`posts__markerIcon posts__markerIcon_${theme}`}
            alt="remove marker icon"
            width="7"
            height="7"
            aria-hidden="true"
            loading="lazy"
          />
        </button>
      )}
    </div>
  );
};

export default Marker;
