import { Routes, Route } from "react-router-dom";
import "./App.css";

// Import pages for routing
import Dashboard from "./pages/Dashboard/Dashboard";
import Coins from "./pages/Coins/Coins";
import CoinView from "./pages/CoinView/CoinView";
import Navigation from "./layouts/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main className="main-content nax-w-full bg-blue-50">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cryptocurrencies" element={<Coins />} />
          <Route path="/cryptocurrencies/:id" element={<CoinView />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
