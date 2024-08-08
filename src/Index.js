//require('dotenv').config({path: './env'})
import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv  from "dotenv";
dotenv.config({
    path: './env'
})
connectDB().then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.error("Error : ",err)
})


/*
import express from "express";
const app = express();
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(err)=>{
            console.error("Error : ", err)
            throw err;
        })       
        app.listen(process.env.PORT,()=>{
            console.log(`connect to port ${process.env.PORT}`)
        })
    }catch(error){
        console.error(error);
        throw error
    }
})()
*/