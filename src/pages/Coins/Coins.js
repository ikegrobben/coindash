import React, { useEffect, useState } from "react";
import axios from "axios";
import Coin from "../../Components/Coin/Coin";

function Dashboard() {
  const [cryptoList, setCryptoList] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const results = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pageNumber}&sparkline=false`
        );
        console.log(results.data);
        setCryptoList(results.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [pageNumber]);

  return (
    cryptoList && (
      <div className="max-w-7xl mx-auto">
        <h1>Cryptocurrencies</h1>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-700">
              <th>#</th>
              <th>Coin</th>
              <th></th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th>Market Cap</th>
              <th>24h Volume</th>
            </tr>
          </thead>
          <tbody>
            {cryptoList.map((crypto) => {
              return (
                <Coin
                  key={crypto.market_cap}
                  coinRank={crypto.market_cap_rank}
                  coinIcon={crypto.image}
                  coinName={crypto.name}
                  coinSymbol={crypto.symbol}
                  coinPrice={crypto.current_price}
                  coinPriceChange={crypto.price_change_percentage_24h}
                  coinMcap={crypto.market_cap}
                  coinVolume={crypto.total_volume}
                />
              );
            })}
          </tbody>
        </table>
        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Previous
        </button>
        <button onClick={() => setPageNumber(pageNumber + 1)}>next</button>
      </div>
    )
  );
}

export default Dashboard;
