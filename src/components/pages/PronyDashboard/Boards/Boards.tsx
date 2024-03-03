import React, { FC, useContext, useState } from "react";
import "./Boards.scss";
import { Reorder } from "framer-motion";
import Header from "@/components/widgets/Header/Header";
import AsideMenu from "@/components/widgets/AsideMenu/AsideMenu";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import Button from "@/components/UI/buttons/Button/Button";
import BoardsItem, { BoardsItemProps } from "./BoardsItem";
import boardsData from "@/data/Boards.json";
import Info from "@/components/widgets/Info/Info";
import PopUp from "@/components/widgets/PopUp/PopUp";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import CreateForm from "./forms/CreateForm/CreateForm";
import { FieldValues } from "react-hook-form";

type BoardMessageType = {
  visible: boolean;
  text: string;
  type: "success" | "danger";
};

const initialBoardMessageState: BoardMessageType = {
  visible: false,
  text: "This is a success message!",
  type: "success",
};

const Boards: FC = () => {
  const [boards, setBoards] = useState(boardsData);
  const [newBoardData, setNewBoardData] = useState<FieldValues>();
  const [boardMessage, setBoardMessage] = useState<BoardMessageType>(
    initialBoardMessageState
  );
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);

  const canMove = (newBoards: BoardsItemProps[]) => {
    let newList: BoardsItemProps[] = [];
    let canMove: boolean = true;

    for (let index = 0; index < boards.length; index++) {
      const element = boards[index];
      canMove = true;

      if (element.locked === false && newBoards[index].id !== element.id) {
        canMove = false;
        break;
      } else {
        newList.push(newBoards[index]);
      }
    }

    return canMove ? [...newList] : [...boards];
  };

  const handleReorder = (newBoards: BoardsItemProps[]) => {
    setBoards(canMove(newBoards));
  };

  const lockItem = (index: number, lock: boolean) => {
    boards[index].locked = lock;
  };

  const handleOpenPopUp = () => {
    setOpenPopUp(true);
  };

  const showMessage = (text: string, type: "success" | "danger") => {
    const newBoardMessage: BoardMessageType = {
      ...boardMessage,
      visible: true,
      text: text,
      type: type,
    };
    setBoardMessage(newBoardMessage);

    setTimeout(() => {
      const hiddenBoardMessage: BoardMessageType = {
        ...newBoardMessage,
        visible: false,
      };

      setBoardMessage(hiddenBoardMessage);
    }, 5000);
  };

  const handleCreateNewBoard = (data: FieldValues) => {
    setNewBoardData(data);
    const newItem: BoardsItemProps = {
      id: boards.length + 1,
      name: data.boardName,
      posts: 0,
      locked: true,
      privacy:true,
    };
    boards.push(newItem);
    showMessage("This is a success message!", "success");
  };

  return (
    <>
      <PopUp>
        <CreateForm submitSuccess={handleCreateNewBoard} />
      </PopUp>

      <Header />

      <div className="pageContainer">
        <AsideMenu />

        <main className="pageContainer__main">
          <section className="board-MainSection">
            <Breadcrumbs />

            <div className="board-MainSection__top">
              <h1 className="title board-MainSection__title">Boards</h1>

              <Button type="primary" click={handleOpenPopUp}>
                Create Board
              </Button>
            </div>

            <Info
              type={boardMessage.type}
              text={boardMessage.text}
              visible={boardMessage.visible}
            />

            <section className="boards">
              <p className="visibility-hidden">boards list</p>

              <div className="boards__header">
                <h2 className="boards__caption subtitle">Name</h2>
                <h2 className="boards__caption subtitle">Posts</h2>
              </div>

              <Reorder.Group
                className="boards__list"
                axis="y"
                values={boards}
                onReorder={(Boards) => {
                  handleReorder(Boards);
                }}
              >
                {boards.map((board, index) => (
                  <BoardsItem
                    item={board}
                    key={index}
                    lockItem={lockItem.bind(null, index)}
                  />
                ))}
              </Reorder.Group>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default Boards;
