import { styled } from "@mui/system";


const FormContainer = styled('div')(
  ({ theme }) => `
    width:80%;
    margin:0 auto;
    max-width:700px;

    h2{
      padding-top:2rem;
      margin-bottom:2rem;
      font-size:2rem;
    }

    h3{
      margin-top:2rem;
      font-size:1rem;
      .link{
        color:#635fc7;
      }
    }

    .loginBtn{
      background-color:#635fc7;
      margin-top:1.7rem;
      border:0;
      padding:10px 20px;
      font-size:1.1rem;
      border-radius:4px;
      color:white;
      letter-spacing:1px;
      cursor:pointer;
      transition:all .2s ease;
      &:hover{
        background-color: #a8a4ff;
      }
    }
  `
);


export { FormContainer };