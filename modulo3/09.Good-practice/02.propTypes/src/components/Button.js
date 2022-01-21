const Button = (props) => {
  return (
    <button
      className={props.class}
      disabled={props.disabled}
      onClick={props.click}
    >
      {props.text}
    </button>
  );
};

export default Button;
