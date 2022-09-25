// IMPORT IMAGES
import allBeers from "../Images/all-beers.jpg";
import randomBeer from "../Images/random-beer.jpg";

// IMPORT ROUTER DOM
import { Link } from "react-router-dom";

// IMPORT CSS
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div className="home-beer-wrapper">
        <img src={allBeers} alt="Beers" />
        <Link to="/beers">All Beers</Link>
        <p>
          See all the beers here! Beer is one of the oldest and most widely
          consumed alcoholic drinks in the world, and the third most popular
          drink overall after water and tea.
        </p>
      </div>
      <div className="home-beer-wrapper">
        <img src={randomBeer} alt="Beer Tasting" />
        <Link to="/beers/random">Random Beers</Link>
        <p>
          Let us surprise you! Beer is one of the oldest and most widely
          consumed alcoholic drinks in the world, and the third most popular
          drink overall after water and tea.
        </p>
      </div>
    </main>
  );
};

export default Home;
