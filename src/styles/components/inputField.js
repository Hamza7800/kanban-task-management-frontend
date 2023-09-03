import { styled } from "@mui/system";

const InputContainer = styled('section')(
  ({ theme }) => `
    .label{
      margin:10px 0;
      display:flex;
      align-items:center;
      justify-content:space-between;
    }
    .error{
      color:${ theme.palette.error.main };
    }

    .input {
      background-color:${ theme.palette.background.paper };
      color:${ theme.palette.text.primary };
      border:0;
      outline:2px solid rgba(130,143,163,.4);
      width:100%;
      display:block;
      border-radius:3px;
      margin:0 auto;
      padding:12px;
      transition:all .2s ease;
      &:focus{
        outline-color:#635fc7;
      }
    }
  `
);


export { InputContainer };