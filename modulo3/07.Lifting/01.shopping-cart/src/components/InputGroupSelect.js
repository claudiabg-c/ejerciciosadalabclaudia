const InputGroupSelect = (props) => {
  const handleSelectChange = (ev) => {
    props.handleSelect(ev.target.value);
  };

  return (
    <div className="input-group-select">
      <label className="label-text" htmlFor={props.id}>
        {props.text}
      </label>
      <select
        className="input-select"
        name={props.id}
        id={props.id}
        value={props.value}
        onChange={handleSelectChange}
      >
        <option>España peninsular</option>
        <option>Islas Canarias</option>
        <option>Islas Baleares</option>
        <option>Ceuta</option>
        <option>Melilla</option>
      </select>
    </div>
  );
};

export default InputGroupSelect;
