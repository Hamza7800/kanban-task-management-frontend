import { useState } from "react";
import { ReactSVG } from "react-svg";
import FloatingNavbar from "./FloatingNavbar";
import { NavBarContainer } from "../../styles/components/navbar";
import Overlay from "../Overlay";
import Button from "../Button";
import addIcon from "../../assets/icon-add-task-mobile.svg";
import verticalEllipsisIcon from "../../assets/icon-vertical-ellipsis.svg";
// import logo from "../../assets/logo-dark.svg";
import logo from "../../assets/logo-mobile.svg";
import chevronDown from "../../assets/icon-chevron-down.svg";

const NavBar = ({ toggleTheme }) => {
  const localStorageBoards = localStorage.getItem("boards");
  const [boards, setBoards] = useState(JSON.parse(localStorageBoards) || []);
  const [boardId, setBoardId] = useState(boards[0]._id);
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  const boardName = boards.filter((board) => board._id === boardId);

  return (
    <NavBarContainer>
      <div className="logoContainer">
        <ReactSVG src={logo} className="logo" />
        <div className="heading">
          <Button className={"name"} onClick={() => setShowFloatingNav(true)}>
            {boardName[0].name}
          </Button>
          <ReactSVG src={chevronDown} />
        </div>
      </div>
      <div className="btns">
        <Button className={"add"}>
          <ReactSVG src={addIcon} />
        </Button>
        <Button className={"more"}>
          <ReactSVG src={verticalEllipsisIcon} />
        </Button>
      </div>
      {showFloatingNav && (
        <>
          <Overlay onClose={() => setShowFloatingNav(false)} />
          <FloatingNavbar
            boards={boards}
            toggleTheme={toggleTheme}
            setBoardId={setBoardId}
          />
        </>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
