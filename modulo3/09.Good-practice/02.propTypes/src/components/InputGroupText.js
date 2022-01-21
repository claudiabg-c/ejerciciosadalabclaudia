import PropTypes from "prop-types";

const InputGroupText = (props) => {
  const handleInputChange = (ev) => {
    props.handleInput(props.id, ev.target.value);
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

InputGroupText.propTypes = {
  handleInput: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputGroupText;
