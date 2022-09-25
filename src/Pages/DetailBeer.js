// IMPORT PARAMS
import { useParams } from "react-router-dom";

// IMPORT HOOKS
import { useState, useEffect } from "react";

// IMPORT COMPONENTS
import Nav from "../Components/Nav";
import GoBackBtn from "../Components/GoBackBtn";

// IMPORT CSS
import "./DetailBeer.css";

const DetailBeer = () => {
  const [beers, setBeers] = useState([]);
  let params = useParams();

  // Du kannst die API auch mit beers/bierID anrufen!
  // z.B.: https://ih-beers-api2.herokuapp.com/beers/5fb6a86265b9c209606e10e0
  // let beerSorts = beers[params.id];

  //https://ih-beers-api2.herokuapp.com/beers/random

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  return (
    <div className="detail-wrapper">
      <img src={beers.image_url} />
      <div>
        <h2>{beers.name}</h2>
        <h3>{beers.tagline}</h3>
        <div>
          <p>First brewed:</p>
          <p>{beers.first_brewed}</p>
          <p>Attenuation level: </p>
          <p>{beers.attenuation_level}</p>
        </div>
        <p>{beers.description}</p>
        <GoBackBtn />
        <Nav />
      </div>
    </div>
  );
};

export default DetailBeer;
