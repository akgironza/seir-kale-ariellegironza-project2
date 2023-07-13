// IMPORT DEPENDENCIES
const express = require('express'); //import expresss library
const SymptomaticEvents = require('../models/symptomaticEvents'); //import model

// ROUTER
const router = express.Router();

// ROUTES

// INDEX
router.get('/', async (req, res) => {
    const symptomaticEvents = await SymptomaticEvents.find({});
    res.render("symptomaticEvents/index.ejs", {symptomaticEvents});
});

// NEW

// DESTROY

// UPDATE

// CREATE

// EDIT

// SHOW

// EXPORT ROUTER
module.exports = router