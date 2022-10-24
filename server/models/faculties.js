//File Name:Comp-229-F2022-MidTerm-Start-010
//Author: Amrit Saigal
//Student ID: 301217316
//Web App Name: https://midtermcomp229amrit.herokuapp.com/

let mongoose = require("mongoose");

// create a model class
let Faculty = mongoose.Schema(
  {
    Facultyid: Number,
    Facultyname: String,
    Department: String,
    Subject: String,
  },
  {
    collection: "faculties",
  }
);

module.exports = mongoose.model("Faculty", Faculty);
