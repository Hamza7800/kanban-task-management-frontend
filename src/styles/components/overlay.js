import styled from "@emotion/styled";

const Container = styled('div')(
  ({ theme }) => `
    position:absolute;
    inset:0;
    background-color:rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
  `
);

export { Container };