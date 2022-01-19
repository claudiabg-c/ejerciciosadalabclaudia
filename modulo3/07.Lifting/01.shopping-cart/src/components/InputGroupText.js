const InputGroupText = (props) => {
  const handleInputChange = (ev) => {
    props.handleInput(ev.target.value);
  };

  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor={props.id}>
        {props.text}
      </label>
      <input
        className="input-text"
        type={props.type}
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputGroupText;
