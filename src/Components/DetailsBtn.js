import { Link } from "react-router-dom";

const DetailsBtn = (props) => {
  return (
    <button id="details-button">
      <Link to={`/Beers/${props.id}`}>Details</Link>
    </button>
  );
};

export default DetailsBtn;
