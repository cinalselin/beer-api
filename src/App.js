// IMPORT CSS
import "./App.css";

// IMPORT PAGES
import Home from "./Pages/Home";
import OverviewBeer from "./Pages/OverviewBeer";

// ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Overview" element={<OverviewBeer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// overview:
// image_url, name, tagline, created by (name), details button

// Detail page:
// img_url, name, tagline, first_brewed, attenuation_level, description, go back button
