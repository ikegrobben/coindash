import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

// Import logo
import logo from "../../assets/Images/logo.svg";

function Navigation() {
  const [totalData, setTotalData] = useState(null);

  const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Cryptocurrencies", href: "/cryptocurrencies" },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const results = await axios.get(
          "https://api.coingecko.com/api/v3/global"
        );
        console.log(results.data);
        setTotalData(results.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <header className="relative bg-white overflow-hidden max-w-full bg-white drop-shadow-lg">
        <div className="max-w-full  h-20">
          <div className="flex justify-between h-20 items-center max-w-7xl mx-auto">
            <figure>
              <Link
                className="flex items-center space-x-2 text-2xl font-bold"
                to="/"
              >
                <img
                  className="h-10 w-10 text-blue-700"
                  src={logo}
                  alt="coindash logo"
                />
                <h1>Coindash</h1>
              </Link>
            </figure>
            <nav>
              <ul className="flex space-x-6 font-semibold">
                {navigation.map((navItem) => (
                  <li key={navItem.name}>
                    <NavLink
                      to={navItem.href}
                      className={({ isActive }) =>
                        isActive
                          ? " text-white rounded-md bg-blue-700 py-2 px-3"
                          : "text-black hover:bg-slate-100 py-2 px-3 rounded-md"
                      }
                    >
                      {navItem.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="max-w-full bg-blue-700 ">
        <div className="max-w-7xl mx-auto ">
          {totalData && (
            <ul className="flex h-10 text-white items-center  space-x-6 font-normal text-sm">
              <li>
                Total Market Cap: $
                {totalData.total_market_cap.usd.toLocaleString("en-US")}
              </li>
              <li>
                Total Market Cap: $
                {totalData.total_volume.usd.toLocaleString("en-US")}
              </li>
              <li>Coins: {totalData.active_cryptocurrencies}</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Navigation;
