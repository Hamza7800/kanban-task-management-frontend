import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { user } = useSelector((state) => state.auth);

  return user ? (
    <Outlet />
  ) : (
    <div>
      <p>Please Login to get your invoices</p>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default PrivateRoute;
