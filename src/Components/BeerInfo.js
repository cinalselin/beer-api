// IMPORT COMPONENTS
import DetailsBtn from "./DetailsBtn";

// IMPORT CSS
import "./BeerInfo.css";

const BeerInfo = (props) => {
  return (
    <div className="beer-info-wrapper">
      <img src={props.img} />
      <div className="beer-info">
        <h2>{props.name}</h2>
        <h3>{props.tagline}</h3>
        <p>Created by: {props.name}</p>
        <DetailsBtn id={props.id} />
      </div>
    </div>
  );
};

export default BeerInfo;
