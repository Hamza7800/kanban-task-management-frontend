import { FormProvider, useForm } from "react-hook-form";
import { useCreateAccountMutation } from "../slices/userAuthApiSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import {
  email_Props,
  name_Props,
  passwordProps,
  confirmPasswordProps,
} from "../utils/inputProps";
import { setCredentials } from "../slices/authSlice";
import { FormContainer } from "../styles/pages/loginPage";

const RegisterUser = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [createUser, { isLoading }] = useCreateAccountMutation();

  const createUserAccount = async (data) => {
    const { name, email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      console.log("Password !== confirmPassword");
      return;
    }
    try {
      console.log({ name, email, password });
      // const res = await createUser({ name, email, password });
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = methods.handleSubmit((data) => {
    createUserAccount(data);
  });

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <h2>Create Account</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputField {...name_Props} />
          <InputField {...email_Props} />
          <InputField {...passwordProps} />
          <InputField {...confirmPasswordProps} />
          <Button
            onClick={submitHandler}
            className={"loginBtn"}
            // disabled={isLoading}
          >
            Register
          </Button>
        </form>
        <h3>
          Already have an account?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </h3>
      </FormContainer>
    </FormProvider>
  );
};

export default RegisterUser;
