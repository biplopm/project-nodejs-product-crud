import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import productRouter from "./routes/product.js"
import expressEjsLayouts from 'express-ejs-layouts';


//Environment Setup DotEnv
dotenv.config()


//init Express Server
const app = express()


//port confiq
const PORT = process.env.PORT || 4000;

// use express middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//static folder
app.use(express.static("public"))

//Ejs server Setup
app.set("view engine", "ejs");
app.use(expressEjsLayouts)



//app routes
app.use(productRouter)


//server listening
app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`.bgYellow.white);
})