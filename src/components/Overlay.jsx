import ReactDOM from "react-dom";
import { Container } from "../styles/components/overlay";

const Overlay = ({ onClose }) => {
  return ReactDOM.createPortal(
    <Container onClick={onClose}></Container>,
    document.querySelector("#overlay")
  );
};

export default Overlay;
