import React, { FC, Suspense, useContext, useRef, useState } from "react";
import "./HeaderUserMenu.scss";
import PictureComponent from "@/../plugins/PictureComponent";
import avatar from "@/assets/img/avatars/avatar_1.jpg";
import OptionButton from "@/components/UI/buttons/OptionButton/OptionButton";
import HeaderDropDownMenu from "./HeaderDropDownMenu";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import exitIcon from "@icons/header/exit.svg";
// import Login from "@/components/UI/forms/Login/Login";
const Login = React.lazy(() => import("@/components/UI/forms/Login/Login"));

type HeaderUserMenuProps = {
  useOption: boolean;
};
const HeaderUserMenu: FC<HeaderUserMenuProps> = ({ useOption = false }) => {
  const [openHeaderMenu, setOpenHeaderMenu] = useState(false);
  const { authorized, setOpenPopUp, popUpData, setPopUpData } = useContext(GlobalContext);
  const handleChangeOpenHeaderMenu = () => {
    setOpenHeaderMenu(!openHeaderMenu);
  };

  const handleLogin = () => {
    setPopUpData(
      <Suspense fallback={<></>}>
        <Login formTitle="Login" />
      </Suspense>
    );
    setOpenPopUp(true);
  };
  const dropDownMenuButtonRef = useRef<HTMLButtonElement>(null);
  return authorized ? (
    <div className="headerUserMenu">
      <PictureComponent
        src={avatar}
        height="40"
        width="40"
        className="headerUserMenu__avatar"
        alt="a guy with glasses"
      />

      <div className="headerUserMenu__info">
        <p className="headerUserMenu__name subtitle-second">Lucy Lavender</p>
        <div className="headerUserMenu__status">
          <span className="headerUserMenu__status_label online" aria-hidden="true" />
          <p className="headerUserMenu__status caption">Online</p>
        </div>
      </div>

      {useOption ? (
        <OptionButton
          click={handleChangeOpenHeaderMenu}
          buttonRef={dropDownMenuButtonRef}
          label={!openHeaderMenu ? "open" : "close"}
        />
      ) : (
        false
      )}

      <div aria-live="assertive" className="headerUserMenu__menu">
        <nav aria-label={`menu is ${openHeaderMenu ? "open" : "close"}`}>
          {openHeaderMenu ? <HeaderDropDownMenu openButton={dropDownMenuButtonRef} isOpen={openHeaderMenu} /> : false}
        </nav>
      </div>
    </div>
  ) : (
    <button className="headerUserMenu__button heading-h6" onClick={handleLogin}>
      <img
        src={exitIcon}
        alt="exit icon"
        className="headerUserMenu__button-icon"
        width="16"
        height="16"
        aria-hidden="true"
        loading="lazy"
      />
      Log in
    </button>
  );
};

export default HeaderUserMenu;
