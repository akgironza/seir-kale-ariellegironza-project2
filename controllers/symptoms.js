// IMPORT DEPENDENCIES
const express = require("express"); //import expresss library
const Symptoms = require("../models/symptoms"); //import model


// ROUTER
const router = express.Router();


// ROUTES

// TEST
// app.get("/test", (req, res) => {
//     res.send("hellooo world")
// })

// INDEX
router.get("/", async (req, res) => {
    const symptoms = await Symptoms.find({});
    res.render("symptoms/index.ejs", {symptoms});
});

// NEW
router.get("/new", (req, res) => {
    res.render("symptoms/new.ejs");
});

// DESTROY

// UPDATE

// CREATE

// EDIT

// Show - GET - shows one symptomatic event - /symptoms/:id
router.get("/:id", async (req, res) => {
    const id = req.params.id
    const symptom = await Symptoms.findById(id)
    res.render("symptoms/show.ejs", {symptom, id})
});

// EXPORT ROUTER
module.exports = router