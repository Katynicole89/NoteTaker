const fs = require("fs");
const router = require("express").Router();
const notesData = require("../Develop/db/db.json");


router.get("/api/notes/", function(req,res) {
    res.json(notesData);
});

router.post("/api/notes/", function(req,res) {
    notesData.push(req.body);
    res.json(true);
});

module.exports = router; 
