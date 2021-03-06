import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import Highest from './components/Highest';
import CryptoList from './components/CryptoList';
import Footer from "./components/Footer";

import classes from './App.module.css'

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://mighty-cliffs-73053.herokuapp.com/home")
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
 const content = items;
  return (
    <div className="App">
     <NavBar />
     <section className={classes.Sec}>
       <Highest list ={content} />
     <CryptoList list ={content}/>
     </section>
     <Footer />
    </div>
  );
}

export default App;
