import { PanelContainer } from "../styles/components/panel";

const Panel = ({ children, style, className }) => {
  return (
    <PanelContainer style={style} className={className}>
      {children}
    </PanelContainer>
  );
};

export default Panel;
