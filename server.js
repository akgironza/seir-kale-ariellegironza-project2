// DEPENDENCIES
require("dotenv").config(); //import dotenv
const express = require("express"); //import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override"); //import medthodoverride
const symptomsRouter = require("./controllers/symptoms"); //import router
// const Symptoms = require("./models/symptoms"); //import model

// EXPRESS APP
const app = express(); //express application object

// MIDDLEWARE
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use("/symptoms", symptomsRouter);

// ROUTE TEST
// app.get("/test", (req, res) => {
//     res.send("hellooo world")
// })

// INDEX

// NEW

// DESTROY

// UPDATE

// CREATE

// EDIT

// Show - GET - shows one symptomatic event - /symptoms/:id
app.get("/symptoms/:id", async (req, res) => {
    const id = req.params.id
    const symptom = await Symptoms.findById(id)
    res.render("symptoms/show.ejs", {symptom, id})
});


// LISTENER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});
