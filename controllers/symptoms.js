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

// Index - GET - display all symptomatic events logged - /symptoms
router.get("/", async (req, res) => {
    const symptoms = await Symptoms.find({})
    const started = await Symptoms.find({}).select("startTime")
    const ended = await Symptoms.find({}).select("endTime")
    res.render("symptoms/index.ejs", {symptoms, started, ended});
});

// New - GET - render form to log new symptomatic event - /symptoms/new
router.get("/new", (req, res) => {
    res.render("symptoms/new.ejs");
});

// Destroy - DELETE - delete a logged symptomatic event - /symptoms/:id
router.delete("/:id", async (req, res) => {
    const id = req.params.id
    await Symptoms.findByIdAndDelete(id)
    res.redirect("/symptoms");
});

// Update - PUT - update a logged symptomatic event - /symptoms/:id
router.put("/:id", async (req, res) => {
    const id = req.params.id
    req.body.treated = req.body.treated === "on" ? true : false
    await Symptoms.findByIdAndUpdate(id, req.body)
    res.redirect("/symptoms");
});

// Create - POST - log new symptomatic event - /symptoms
router.post("/", async (req, res) => {
    
    req.body.treated = req.body.treated === "on" ? true : false
    await Symptoms.create(req.body)
    res.redirect("/symptoms")
});

// Edit - GET - render form to update a symptomatic event - symptoms/:id/edit
router.get("/:id/edit", async (req, res) => {
    const id = req.params.id
    const symptom = await Symptoms.findById(id)
    res.render("symptoms/edit.ejs", {symptom, id})
})

// Show - GET - shows one symptomatic event - /symptoms/:id
router.get("/:id", async (req, res) => {
    const id = req.params.id
    const symptom = await Symptoms.findById(id)
    res.render("symptoms/show.ejs", {symptom, id})
});


// EXPORT ROUTER
module.exports = router