import React, {useEffect, useState} from "react";

// const data = [
//   {
//     id: "bitcoin",
//     rank: "1",
//     symbol: "BTC",
//     name: "Bitcoin",
//     priceUsd: "6929.8217756835584756",
//   },
//   {
//     id: "ethereum",
//     rank: "2",
//     symbol: "ETH",
//     name: "Ethereum",
//     priceUsd: "404.9774667045200896",
//   },
//   {
//     id: "ripple",
//     rank: "3",
//     symbol: "XRP",
//     name: "XRP",
//     priceUsd: "0.4202870472643482",
//   },
//   {
//     id: "bitcoin-cash",
//     rank: "4",
//     symbol: "BCH",
//     name: "Bitcoin Cash",
//     priceUsd: "688.8617162705108413",
//   },
//   {
//     id: "eos",
//     rank: "5",
//     symbol: "EOS",
//     name: "EOS",
//     priceUsd: "6.9823147841833210",
//   },
//   {
//     id: "stellar",
//     rank: "6",
//     symbol: "XLM",
//     name: "Stellar",
//     priceUsd: "0.2341611226032443",
//   },
//   {
//     id: "litecoin",
//     rank: "7",
//     symbol: "LTC",
//     name: "Litecoin",
//     priceUsd: "73.3479339685586096",
//   },
//   {
//     id: "cardano",
//     rank: "8",
//     symbol: "ADA",
//     name: "Cardano",
//     priceUsd: "0.1289256506716951",
//   },
//   {
//     id: "tether",
//     rank: "9",
//     symbol: "USDT",
//     name: "Tether",
//     priceUsd: "1.0009115584940656",
//   },
//   {
//     id: "iota",
//     rank: "10",
//     symbol: "MIOTA",
//     name: "IOTA",
//     priceUsd: "0.8647409095440071",
//   },
// ];


function CryptoItem () {
    
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("https://api.coincap.io/v2/assets")
          .then(res => res.json())
          .then(
            (result) => {
            //   setIsLoaded(true);
              setItems( result.data);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            // (error) => {
            //   setIsLoaded(true);
            //   setError(error);
            // }
            
          )
      }, [])





    return(
<div>
<tr>
    <th>rank</th>
    <th>name and symbol</th>
    <th>price</th>
</tr>
{
    items.map ((item) =>
    <tr>
    <td>{item.rank}</td>
    <td>{`${item.name} ${item.symbol}`}</td>
    <td>{item.priceUsd} </td>
</tr>
    )
}



</div>

    );
}


export default CryptoItem; 
