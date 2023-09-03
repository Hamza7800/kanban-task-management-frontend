import { styled } from "@mui/system";



const Button = styled("button")(
  ({ theme }) => `
    color: ${ theme.palette.primary?.main };
    background-color: ${ theme.palette.secondary.main };
    display: inline;
    font-size: 12px;
    padding:20px;
    transition:all .3s ease;
`
);


const Section = styled('section')(
  ({ theme }) => `
    background-color:${ theme.palette.background.paper } ;
    color:${ theme.palette.text.primary };
    height:100%;
  `
);

export { Section };