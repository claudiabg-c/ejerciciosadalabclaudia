const InputGroupRadio = (props) => {
  const handleRadioChange = (ev) => {
    props.handleRadio(ev.target.value);
  };
  return (
    <div className="input-group-radio">
      <label className="label-radio" htmlFor={props.value}>
        {props.text}
      </label>

      <input
        type="radio"
        name="paymentType"
        id={props.value}
        value={props.value}
        checked={props.checked}
        onChange={handleRadioChange}
      />
    </div>
  );
};

export default InputGroupRadio;
