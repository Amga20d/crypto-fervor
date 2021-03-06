import axios from "axios";
import mongoose from "mongoose";
import "dotenv/config.js"
import Currency from "../models/CurrencyModel.js";




mongoose
  .connect(process.env.MONGO_API, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open With Mongodb!");
  })
  .catch((err) => {
    console.log("Oh No Error!!");
    console.log(err);
  });

 
 axios.get(process.env.COIN_API).then((res) => {
   const seed = res.data.data;
 
   Currency.insertMany(seed).then((data) => {
     console.log('seeded')
   }) }).catch((err) => {
    console.log("Oh No Error with seeding!!");
    console.log(err);
  });;
