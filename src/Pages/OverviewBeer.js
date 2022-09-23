// IMPORT USEEFFECT USESTATE
import { useEffect, useState } from "react";

// IMPORT ROUTER DOM
import { Link } from "react-router-dom";

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
    <div>
      {beers.map((b, index) => (
        <BeerInfo
          key={"Beer" + index}
          img={b.image_url}
          name={b.name}
          tagline={b.tagline}
        />
      ))}
      <Nav />
    </div>
  );
};

export default OverviewBeer;

// overview:
// image_url, name, tagline, created by (name), details button

// Detail page:
// img_url, name, tagline, first_brewed, attenuation_level, description, go back button
