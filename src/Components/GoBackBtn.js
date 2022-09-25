import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Back from "../Images/Back.svg";

const GoBackBtn = () => {
  const location = useLocation();
  console.log(location);
  if (location.pathname !== "/beers/random") {
    return (
      <Link to={`/beers`}>
        <img src={Back} />
      </Link>
    );
  } else {
    return (
      <Link to={`/`}>
        <img src={Back} />
      </Link>
    );
  }
};

export default GoBackBtn;
