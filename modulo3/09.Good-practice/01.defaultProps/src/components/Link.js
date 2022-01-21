import "../styles/Link.scss";

const Link = (props) => {
  return (
    <a title={props.title} href={props.link} target={props.openInNewTab}>
      {props.text}
    </a>
  );
};

Link.defaultProps = {
  openInNewTab: null,
};

export default Link;
