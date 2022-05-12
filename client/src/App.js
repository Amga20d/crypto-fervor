import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import Highest from './components/Highest';
import CryptoList from './components/CryptoList';

import './App.css';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("//localhost:5000/home")
      .then((res) => res.json())
      .then(
        (result) => {
          //   setIsLoaded(true);
          setItems(result);
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
    <div className="App">
     <NavBar />
     <Highest list ={items} />
     <CryptoList list ={items}/>

    </div>
  );
}

export default App;
