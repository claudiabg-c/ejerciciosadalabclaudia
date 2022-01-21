const InputGroupCheck = (props) => {
  const handleCheckChange = (ev) => {
    props.handleCheck(ev.target.checked);
  };

  return (
    <div className="input-group-checkbox">
      <label className="label-check" htmlFor={props.id}>
        {props.text}
      </label>
      <input
        type="checkbox"
        name={props.id}
        id={props.id}
        checked={props.checked}
        onChange={handleCheckChange}
      />
    </div>
  );
};

export default InputGroupCheck;
