import "../styles/Link.scss";

const Link = (props) => {
  const openInNewTab = props.type === undefined ? "" : `${props.type}`;

  return (
    <a title={props.title} href={props.link} target={openInNewTab}>
      {props.text}
    </a>
  );
};

export default Link;
