import React, { FC, useEffect, useRef, useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import eye from "@/assets/img/icons/eye.svg";
import lock from "@/assets/img/icons/lock.svg";
import OptionButton from "@/components/UI/buttons/OptionButton/OptionButton";
import OpenMenu from "@/components/UI/forms/OpenMenu/OpenMenu";
import { Link } from "react-router-dom";
import { PopUpData } from "./Boards";
import { useInView } from "react-intersection-observer";

interface BoardsItemProps {
  id: number;
  name: string;
  posts: number;
  locked: boolean;
  privacy: boolean;
  On_roadmap: boolean;
  Indexed: boolean;
  Post_pre_approval: boolean;
  Anonymous_voting: boolean;
  URL: string;
  description: string;
}

interface Props {
  item: BoardsItemProps;
  lockItem: (lock: boolean) => void;
  openPopUp: (data: PopUpData) => void;
  changePrivacy: (data: BoardsItemProps) => void;
}

const BoardsItem: FC<Props> = ({ item, lockItem, openPopUp, changePrivacy }) => {
  const controls = useDragControls();
  const [lockedMove, setLockedMove] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenuButtonRef = useRef<HTMLButtonElement>(null);

  const handleChangeLockedMove = () => {
    setLockedMove(!lockedMove);
    lockItem(lockedMove);
  };

  const handleChangePrivacy = () => {
    changePrivacy(item);
  };

  const openMenuLinks = [
    {
      icon: "./img/icons/eye.svg",
      text: `${item.privacy ? "Public" : "Private"} view`,
      onClick: handleChangePrivacy,
    },
    {
      icon: "./img/icons/menu/gear.svg",
      text: "Edit board settings",
      onClick: () => openPopUp({ title: "Edit Board", type: "edit", formData: item }),
    },
    { icon: "./img/icons/menu/list.svg", text: "List board tags", url: "/tags" },
    {
      icon: "./img/icons/menu/pen.svg",
      text: "Edit board post",
      onClick: () => openPopUp({ title: "Edit board post form", type: "editPost" }),
    },
    {
      icon: "./img/icons/menu/cross.svg",
      text: "Delete board",
      onClick: () => openPopUp({ title: "Delete board", type: "delete" }),
    },
    { icon: "./img/icons/menu/message.svg", text: "View posts", url: "/posts" },
  ];

  const [dragging, setDragging] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Reorder.Item className="boards__item" value={item} dragListener={false} dragControls={controls} ref={ref}>
      {inView ? (
        <>
          <div
            className={`drag boards__item_drag ${!lockedMove ? "dragOn" : ""} ${
              dragging ? "dragging" : ""
            } reorder-handle`}
            onPointerDown={(e) => {
              setDragging(true);
              !lockedMove && controls.start(e);
            }}
            onPointerUp={(e) => {
              setDragging(false);
            }}
          >
            <div className="dot__col">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <div className="dot__col">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>

          <p className="boards__title heading-h6">{item.name}</p>
          <p className="boards__amount title-second">
            {item.posts} <span className="visibility-hidden">posts</span>
          </p>
          <div className="boards__settings">
            <button
              title="visibility change"
              className={`boards__button ${item.privacy ? "boards__button_active" : ""}`}
              aria-label="visibility change"
              onClick={handleChangePrivacy}
            >
              <img
                className="boards__icon"
                src={eye}
                alt="visibility"
                width="24"
                height="24"
                aria-hidden="true"
                loading="lazy"
              />
            </button>

            <button
              title="privacy change"
              className={`boards__button ${lockedMove ? "boards__button_active" : ""}`}
              aria-label={`${lockedMove ? "unlock" : "lock"} move`}
              onClick={handleChangeLockedMove}
            >
              <img
                className="boards__icon"
                src={lock}
                alt="lock"
                width="24"
                height="24"
                aria-hidden="true"
                loading="lazy"
              />
            </button>

            <div aria-live="assertive" className="boards__menu-wrapper">
              <OptionButton
                title="open options menu"
                label={isOpenMenu ? "close" : "open"}
                addClass="boards__button boards__button-menu"
                click={() => setIsOpenMenu(!isOpenMenu)}
                buttonRef={openMenuButtonRef}
              />

              <OpenMenu
                isOpen={isOpenMenu}
                addClass={`boards__openMenu ${isOpenMenu ? "openMenu_open" : ""}`}
                ariaHidden={!isOpenMenu}
                openButton={openMenuButtonRef}
              >
                {openMenuLinks.map((link, index) =>
                  link.url ? (
                    <Link to={link.url} className="openMenu__item" key={index}>
                      <img
                        src={link.icon}
                        className="openMenu__icon"
                        alt={link.text}
                        aria-hidden="true"
                        width="20"
                        height="20"
                      />
                      <span className="text openMenu__text">{link.text}</span>
                    </Link>
                  ) : (
                    <button onClick={link.onClick} className="openMenu__item" key={index}>
                      <img
                        src={link.icon}
                        className="openMenu__icon"
                        alt={link.text}
                        aria-hidden="true"
                        width="20"
                        height="20"
                      />
                      <span className="text openMenu__text">{link.text}</span>
                    </button>
                  )
                )}
              </OpenMenu>
            </div>
          </div>
        </>
      ) : (
        <div className="skeleton" />
      )}
    </Reorder.Item>
  );
};

export default BoardsItem;
export { BoardsItemProps };
