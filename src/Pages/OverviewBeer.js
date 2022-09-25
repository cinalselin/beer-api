// IMPORT USEEFFECT USESTATE
import { useEffect, useState } from "react";

// IMPORT COMPONENTS
import Nav from "../Components/Nav";
import BeerInfo from "../Components/BeerInfo";

const OverviewBeer = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  return (
    <div className="overview-wrapper">
      {beers.map((b, index) => (
        <BeerInfo
          key={"Beer" + index}
          img={b.image_url}
          name={b.name}
          tagline={b.tagline}
          id={b._id}
        />
      ))}
      <Nav />
    </div>
  );
};

export default OverviewBeer;
