// IMPORT CSS
import "./App.css";

// IMPORT PAGES
import Home from "./Pages/Home";
import OverviewBeer from "./Pages/OverviewBeer";
import DetailBeer from "./Pages/DetailBeer";

// ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>BEER APP</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<OverviewBeer />} />
          <Route path="/beers/:id" element={<DetailBeer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
