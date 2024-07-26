import connectDB from './db/index.js';
 //require('dotenv').config({path: './env'}); // old syntax of dotenv
import { app } from './app.js';
import dotenv from "dotenv";
dotenv.config({
    path:'./env'
})



connectDB()

.then(() => {
    app.listen(process.env.PORT || 7000 , () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!" , err)
})












/*
import express from "express";
const app = express()

// IIFE of js
( async () =>{

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // express 
        app.on("errror",(error)=>{
            console.log("ERRR:",error);
            throw error
        })
        app.listen(process.env.PORT,() =>{
          console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR",error)
        throw err;
    }

}) ()

*/
