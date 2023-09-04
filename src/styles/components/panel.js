import styled from "@emotion/styled";


const PanelContainer = styled('div')(
  ({ theme }) => `
    background-color:${ theme.palette.background.paper };
    border-radius:5px;
  `
);

export { PanelContainer };