import React from "react";

function Coin({
  coinRank,
  coinIcon,
  coinName,
  coinSymbol,
  coinPrice,
  coinPriceChange,
  coinMcap,
  coinVolume,
}) {
  return (
    <tr>
      <td>{coinRank}</td>
      <td>
        <img className="h-5 w-5" src={coinIcon} alt={coinName} />
      </td>
      <td>{coinName}</td>
      <td>{coinSymbol}</td>
      {coinPrice < 0.99 ? (
        <td>$ {coinPrice.toFixed(6)}</td>
      ) : (
        <td>$ {coinPrice.toFixed(2)}</td>
      )}
      {coinPriceChange < 0 ? (
        <td className="red">{coinPriceChange.toFixed(2)}%</td>
      ) : (
        <td className="green">{coinPriceChange.toFixed(2)}%</td>
      )}
      <td>$ {coinMcap.toLocaleString("en-US")}</td>
      <td>$ {coinVolume.toLocaleString("en-US")}</td>
    </tr>
  );
}

export default Coin;
