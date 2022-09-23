// IMPORT COMPONENTS
import DetailsBtn from "./DetailsBtn";

const BeerInfo = (props) => {
  return (
    <div>
      <img src={props.img} />
      <div>
        <h2>{props.name}</h2>
        <h3>{props.tagline}</h3>
        <p>Created by: {props.name}</p>
        <DetailsBtn id={props.id} />
      </div>
    </div>
  );
};

export default BeerInfo;
