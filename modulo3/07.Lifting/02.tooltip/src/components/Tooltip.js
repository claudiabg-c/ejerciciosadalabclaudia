import "../styles/Tooltip.scss";

const Tooltip = (props) => {
  console.log(props.children);
  return (
    <div className="tooltip">
      <i className="fas fa-question-circle"></i>
      <div className="tooltiptext">{props.children}</div>
    </div>
  );
};

export default Tooltip;
