import React, { useEffect, useState } from "react";

const data = [
  {
    id: "bitcoin",
    rank: "1",
    symbol: "BTC",
    name: "Bitcoin",
    priceUsd: "6929.8217756835584756",
    fervor: "High",
  },
  {
    id: "ethereum",
    rank: "2",
    symbol: "ETH",
    name: "Ethereum",
    priceUsd: "404.9774667045200896",
    fervor: "Low",
  },
  {
    id: "ripple",
    rank: "3",
    symbol: "XRP",
    name: "XRP",
    priceUsd: "0.4202870472643482",
    fervor: "High",
  },
  {
    id: "bitcoin-cash",
    rank: "4",
    symbol: "BCH",
    name: "Bitcoin Cash",
    priceUsd: "688.8617162705108413",
    fervor: "High",
  },
  {
    id: "eos",
    rank: "5",
    symbol: "EOS",
    name: "EOS",
    priceUsd: "6.9823147841833210",
    fervor: "High",
  },
  {
    id: "stellar",
    rank: "6",
    symbol: "XLM",
    name: "Stellar",
    priceUsd: "0.2341611226032443",
    fervor: "High",
  },
  {
    id: "litecoin",
    rank: "7",
    symbol: "LTC",
    name: "Litecoin",
    priceUsd: "73.3479339685586096",
    fervor: "nice",

  },
  {
    id: "cardano",
    rank: "8",
    symbol: "ADA",
    name: "Cardano",
    priceUsd: "0.1289256506716951",
    fervor: "High",
  },
  {
    id: "tether",
    rank: "9",
    symbol: "USDT",
    name: "Tether",
    priceUsd: "1.0009115584940656",
    fervor: "High",
  },
  {
    id: "iota",
    rank: "10",
    symbol: "MIOTA",
    name: "IOTA",
    priceUsd: "0.8647409095440071",
    fervor: "High",
  },
];

function CryptoItem() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((res) => res.json())
      .then(
        (result) => {
          //   setIsLoaded(true);
          setItems(result.data);
        }
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        // (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        // }
      );
  }, []);

  return (
    <div>
      <tr>
        <th>rank</th>
        <th>name and symbol</th>
        <th>price</th>
        <th>fervor</th>
      </tr>
      {items.map((item) => (
        <tr>
          <td>{item.rank}</td>
          <td>{`${item.name} ${item.symbol}`}</td>
          <td>{item.priceUsd} </td>
          
          <td>{data.find((el) =>  el.id === item.id)?.fervor || 'not found'}</td>

          
        </tr>
      ))}
    </div>
  );
}

export default CryptoItem;
