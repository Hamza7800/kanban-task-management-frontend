import { useState } from "react";
import { useDispatch } from "react-redux";
// import Switch from "@mui/material/Switch";
import { ReactSVG } from "react-svg";
import { filterBoards } from "../../slices/boardSlice";
import Button from "../Button";
import Panel from "../Panel";
import boardIcon from "../../assets/icon-board.svg";
import addIcon from "../../assets/icon-add-task-mobile.svg";
import darkIcon from "../../assets/icon-dark-theme.svg";
import lightIcon from "../../assets/icon-light-theme.svg";
import SwitchButton from "../SwitchButton";

const FloatingNavbar = ({ boards, toggleTheme, setBoardId }) => {
  const [selectedBoardId, setSelectedBoardId] = useState(boards[0]._id);

  const dispatch = useDispatch();

  const handleClick = (boardId) => {
    dispatch(filterBoards(boardId));
    setSelectedBoardId(boardId);
    setBoardId(boardId);
  };

  const renderList = boards.map((board) => (
    <Button
      className={`btn ${board._id === selectedBoardId ? "active" : ""}`}
      key={board._id}
      onClick={() => handleClick(board._id)}
    >
      <ReactSVG src={boardIcon} alt="boardIcon" className="svg" />
      <span>{board.name}</span>
    </Button>
  ));

  return (
    <section className="floatingNav">
      <Panel style={{ paddingBottom: "25px" }}>
        <h2>ALL BOARDS ({boards.length})</h2>
        {<div>{renderList}</div>}
        <Button className="addBtn">
          {/* <ReactSVG src={boardIcon} alt="boardIcon" className="svg" /> */}
          <ReactSVG src={addIcon} className="svg" />
          Create New Board
        </Button>
        <div className="switchBtn">
          <ReactSVG src={darkIcon} />
          <SwitchButton onChange={toggleTheme} />
          <ReactSVG src={lightIcon} />
        </div>
      </Panel>
    </section>
  );
};

export default FloatingNavbar;
