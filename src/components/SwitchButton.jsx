import { Switch } from "../styles/components/switchButton";

const SwitchButton = ({ onChange }) => {
  return (
    <Switch>
      <div className="switch">
        <input type="checkbox" id="toggle" onChange={onChange} />
        <label htmlFor="toggle"></label>
      </div>
    </Switch>
  );
};

export default SwitchButton;
