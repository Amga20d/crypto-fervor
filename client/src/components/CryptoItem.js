import React, { useEffect, useState } from "react";
import Data from "./Data";

import classes from './CryptoItem.module.css'




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
    <div className={classes.table} >
      <tr className={classes.tr} >
        <th className={classes.th}>Rank</th>
        <th className={classes.th}>Name and Symbol</th>
        <th className={classes.th}>Price</th>
        <th className={classes.th}>Market Capital Usd</th>
        <th className={classes.th}>Fervor</th>
      </tr>
      {items.map((item) => (
        <tr className={classes.tr}> 
          <td className={classes.td}>{item.rank}</td>
          <td className={classes.td}>{`${item.name} ${item.symbol}`}</td>
          <td className={classes.td}>{item.priceUsd} </td>
          <td className={classes.td}>{item.marketCapUsd}</td>
          <td className={classes.td}>{Data.find((el) => el.id === item.id)?.fervor || "not found"}</td>
        </tr>
      ))}
    </div>
  );
}

export default CryptoItem;
