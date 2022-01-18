const Link = (props) => {
  // Comprobamos si nos pasan la prop type
  // - Si nos la pasan typeClassName será button-type-xl
  // - Si no nos la pasa typeClassName será un string vacío
  const openInNewTab = props.type === undefined ? "" : `${props.type}`;

  return (
    <a title={props.title} href={props.link} target={openInNewTab}>
      {props.text}
    </a>
  );
};

export default Link;
