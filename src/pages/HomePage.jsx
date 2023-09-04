import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAllBoardsQuery } from "../slices/boardsApiSlice";
// import { useLogoutMutation } from "../slices/userAuthApiSlice";
// import { logout } from "../slices/authSlice";
import { setBoards } from "../slices/boardSlice";
// import NavBar from "../components/Navbar/NavBar";

const HomePage = () => {
  const { data, isLoading, error } = useGetAllBoardsQuery();
  // const [logoutUser] = useLogoutMutation();
  const dispatch = useDispatch();

  // const { boards } = data || [];

  // console.log(boards);

  useEffect(() => {
    if (data?.boards) {
      dispatch(setBoards(data?.boards));
    }
  }, [data, dispatch]);

  return <div>{/* <NavBar /> */}</div>;
};

export default HomePage;
