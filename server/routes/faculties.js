//File Name:Comp-229-F2022-MidTerm-Start-010
//Author: Amrit Saigal
//Student ID: 301217316
//Web App Name: https://midtermcomp229amrit.herokuapp.com/

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const faculties = require("../models/faculties");

// define  faculty model
let faculty = require("../models/faculties");

/* GET faculties List page. READ */
router.get('/', (req, res, next) => {
  // find all faculty in the faculties collection
  faculty.find( (err, faculties) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('faculties/index', {
        title: 'faculties',
        faculties: faculties
      });
    }
  });
});

//  GET faculties Details page in order to add new faculty
router.get('/add', (req, res) => {
  faculty.find( (err, faculties) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('faculties/details', {
                title: 'Details',
                faculties: faculties
            });
        }
    });
});

// POST process the faculties Details page and create a new faculty - CREATE
router.post('/add', (req, res, next) => {

  const {Facultyid, Facultyname, Department, Subject} = req.body; // Extrapolating data from req.body

  const newFaculties = new faculty({
    Facultyid,
    Facultyname,
    Department,
    Subject,
  });

    faculty.create(newFaculties, (err, faculty) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh faculty list
            res.redirect('/faculties');
        }
    });
  });
// GET faculties Details page in order to edit existing faculty
router.get('/details/:id', (req, res, next) => {
    let id = req.params.id;

    faculty.findById(id, (err, facultiesToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('faculties/details', {title: 'Edit Faculty', faculties: facultiesToEdit
                });
        }
    });

});

// POST - process the information passed from the details form and update the document
router.post('/details/:id', (req, res, next) => {

    let id = req.params.id;

    const {Facultyid, Facultyname, Department, Subject} = req.body; // Extrapolating data from req.body

  const updatedFaculties = new faculty({

    _id: id,
    Facultyid,
    Facultyname,
    Department,
    Subject
  });

    faculty.updateOne({_id: id}, updatedFaculties, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh  faculty list
            res.redirect('/faculties');
        }
    });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    faculty.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh faculty list
            res.redirect('/faculties');
        }
    });

});

module.exports = router;