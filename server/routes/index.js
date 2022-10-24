//File Name:Comp-229-F2022-MidTerm-Start-010
//Author: Amrit Saigal
//Student ID: 301217316
//Web App Name: https://midtermcomp229amrit.herokuapp.com/


// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let faculty = require("../models/faculties");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    faculties: "",
  });
});

module.exports = router;
