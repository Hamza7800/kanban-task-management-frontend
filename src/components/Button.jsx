const Button = ({ onClick, className, children, rest }) => {
  return (
    <button onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
