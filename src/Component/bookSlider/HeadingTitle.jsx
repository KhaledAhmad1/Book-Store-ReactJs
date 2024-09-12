const HeadingTitle = (props) => {
  return (
    <div style={HeadStyles}>
      <h2 style={TextStyles}>{props.title}</h2>
    </div>
  );
};
const HeadStyles = {
  padding: "10px 30px",
  backgroundColor: "white",
};

const TextStyles = {
  color: "#1926d2",
  fontSize: "1.5rem",
  width: "max-content",
  marginBottom: "5px",
  paddingBottom: "5px",
  borderBottom: "2px solid #1926d2",
};
export default HeadingTitle;
