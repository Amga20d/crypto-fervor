import React, { useEffect, useState } from "react";


import classes from './CryptoItem.module.css'




function CryptoItem(props) {
  // const [items, setItems] = useState([]);
 


  // useEffect(() => {
  //   fetch("//localhost:5000/home")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         //   setIsLoaded(true);
  //         setItems(result);
  //       }
        
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       // (error) => {
  //       //   setIsLoaded(true);
  //       //   setError(error);
  //       // }
  //     );
  // }, []);
  const items = props.list;
  
  

  return (
    <div className={classes.table} >
      <tr className={classes.tr} >
        <th className={classes.th}>Rank</th>
        <th className={classes.th}>Name and Symbol</th>
        <th className={classes.th}>Price</th>
        <th className={classes.th}>Market Capital Usd</th>
        <th className={classes.th}>Previous Count</th>
        <th className={classes.th}>Current Count</th>
        <th className={classes.th}>Fervor</th>
      </tr>
      {items.map((item) => (
        <tr className={classes.tr}> 
          <td className={classes.td}>{item.rank}</td>
          <td className={classes.td}>{`${item.name} ${item.symbol}`}</td>
          <td className={classes.td}>{item.priceUsd} </td>
          <td className={classes.td}>{item.marketCapUsd}</td>
          <td className={classes.td}>{item.prevCount}</td>
          <td className={classes.td}>{item.currCount}</td>
          <td className={classes.td}>{item.fervorChange} </td>
        </tr>
      ))}
    </div>
  );
}

export default CryptoItem;
