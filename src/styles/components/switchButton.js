import styled from "@emotion/styled";


const Switch = styled('div')(
  ({ theme }) => `
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 16px;
  }
  .switch input {
    display: none;
  }
  
  .switch label {
    background-color: #635fc7;
    border-radius: 17px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    transition: background-color 0.4s;
  }

  .switch label::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: white;
    top: 1.9px;
    left: 4px;
    transition: transform 0.4s;
  }

  .switch input:checked + label {
    background-color: #635fc7;
  }
  
  .switch input:checked + label::before {
    transform: translateX(20px);
  }
  `
);


export { Switch };