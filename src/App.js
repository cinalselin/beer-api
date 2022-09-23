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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Beers" element={<OverviewBeer />} />
          <Route path="/Beers/:id" element={<DetailBeer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
