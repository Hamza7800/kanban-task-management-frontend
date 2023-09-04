import styled from "@emotion/styled";


const NavBarContainer = styled('nav')(
  ({ theme }) => `
    background-color:${ theme.palette.background.paper };
    min-height:13vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid ${ theme.palette.primary.dark };
    padding:15px;

    .logoContainer{
      display:flex;
      align-items:center;
      justify-content:space-between;
      .logo{
        margin-right:15px;
      }
      .heading{
        cursor:pointer;
        display:flex;
        align-items:center;
        .name{
          padding:0;
          width:unset;
          font-size:1.2rem; 
          margin-right:5px;
          margin-bottom:0px;
          color:${ theme.palette.text.primary }
        }
      }
    }
    .btns{
      display:flex;
      align-items:center;
      padding:0 10px;
      .add{
        margin-right:20px;
        background-color:#635fc7;
        padding:5px 15px;
        border-radius:10px;
        margin-bottom:0px;
        &:hover{
          background-color:#a8a4ff;
        }
      }
      .more{
        padding:7px;
        border-radius:10px;
        margin-bottom:0px;
        &:hover{
          background-color:${ theme.palette.background.default }
        }
      }
    }

    
    .floatingNav{
      position:absolute;
      width:fit-content;
      width:320px;
      z-index:999;
      margin:0 auto;
      top:5rem;
      left:50%;
      transform:translateX(-50%);

      h2{
        font-size:.8rem;
        margin:0 20px;
        padding:20px 0;
        letter-spacing:3px;
        color:#828fa3;
      }
    }

    button{
      background-color:transparent;
      color:#fff;
      display:flex;
      align-items:center;
      padding:15px 0;
      width:90%;
      border:none;
      font-size:1.1rem;
      font-weight:bold;
      cursor:pointer;
      border-top-right-radius:50px;
      border-bottom-right-radius:50px;
      margin-bottom:3px;
      transition:all .1s ease;
    }

    .btn{
      color:#828fa3;
      &:hover{
        background-color:#a8a4ff;
        color:#fff;
      }
      .svg{
        margin:0 20px;
        fill:#fff;
      }
    }
    .addBtn{
      margin-top:5px;
      color:#635fc7;
      font-size:1rem;
      .svg{
        margin:0 20px;
        fill:#fff;
      }
      &:hover{
        color: rgba(99, 95, 199, 0.25);
      }
    }

    .switchBtn{
      display:flex;
      width:70%;
      border-radius:6px;
      margin:0 auto;
      background-color:${ theme.palette.background.default };
      align-items:center;
      justify-content:space-evenly;
      padding:15px;
    }

    .active{
      color:#fff;
      background-color:#635fc7;
      &:hover{
        background-color:#635fc7;
      }
    }

  `
);


export { NavBarContainer };