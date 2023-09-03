import { useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "../utils/inputError";
import { motion, AnimatePresence } from "framer-motion";
import { InputContainer } from "../styles/components/inputField";

const InputField = ({
  label,
  type,
  name,
  id,
  placeholder,
  validation,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <InputContainer>
      <div className="label">
        {label && <label htmlFor={id}>{label}</label>}
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        autoComplete="off"
        {...register(name, validation)}
        className="input"
      />
    </InputContainer>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p {...framer_error} className="error">
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default InputField;
