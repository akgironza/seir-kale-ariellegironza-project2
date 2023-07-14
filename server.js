// DEPENDENCIES
require("dotenv").config(); //import dotenv
const express = require("express"); //import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override"); //import medthodoverride
const symptomsRouter = require("./controllers/symptoms"); //import router

// EXPRESS APP
const app = express(); //express application object

// MIDDLEWARE
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use("/symptoms", symptomsRouter);



// LISTENER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});
