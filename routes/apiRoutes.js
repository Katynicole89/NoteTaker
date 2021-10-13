const fs = require("fs");
const router = require("express").Router();
const db = require('../db/db.json');
const path = require('path');
const { v4: uuidv4 } = require('uuid');




router.get("/notes", function(req,res) {
    res.json(db);
});



router.post("/notes", function(req, res) {
    db.push(req.body);
    //Add ID to each note 
    req.body.id = uuidv4();
  
    //Write to file 
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
        res.json(db);
      });
   });
  
   router.delete('/notes/:id', (req, res)=>{
    const id = req.params.id;

    db.splice(id - 1, 1)
    db.forEach((obj, i) => {
      obj.id = i + 1;
    });
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
      res.json(db);
    });
  });


module.exports = router; 
