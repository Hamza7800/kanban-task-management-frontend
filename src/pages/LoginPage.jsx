import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/userAuthApiSlice";
import { FormContainer } from "../styles/pages/loginPage";
import { passwordProps, email_Props } from "../utils/inputProps";
import Button from "../components/Button";

// component
const LoginPage = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const { user } = useSelector((state) => state.auth);

  const loginUser = async (data) => {
    const { email, password } = data;

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = methods.handleSubmit((data) => {
    loginUser(data);
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <h2>Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputField {...email_Props} />
          <InputField {...passwordProps} />
          <Button
            onClick={submitHandler}
            className={"loginBtn"}
            disabled={isLoading}
          >
            Login
          </Button>
        </form>
        <h3>
          Don't have an account?{" "}
          <Link to="/create-account" className="link">
            Create now
          </Link>
        </h3>
      </FormContainer>
    </FormProvider>
  );
};

export default LoginPage;
