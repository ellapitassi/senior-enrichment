const api = require('express').Router();
const Sequelize = require('sequelize');
var db = require('../../db/models');
var Campuses = db.Campuses;
var Students = db.Students;
module.exports = api;

// /api/students
api.get('/', function(req,res,next){
    Students.findAll({})
    .then(students => res.json(students))
    .catch(next)
})

api.get('/:id', function(req,res,next){
    const studentId = req.params.id;
	Students.findById(studentId)
	.then(function(student){
        if (!student){
            res.status(404).send("This student doesnt exist!")
        } else{
            res.json(student)
        }
    })
    .catch(next);
})

api.post('/campus/:campusId', function(req,res,next){
    if (!req.body.name) {
        res.status(404).send("No student name included")
    }
    Students.create(req.body)
    .then(newStudent => newStudent.setCampus(Number(req.params.campusId)))
    .then(newStudent => res.status(201).json(newStudent))
    .catch(next)
})

api.put('/:studentId', function(req, res, next){
    const studentId = req.params.studentId;
    Students.findById(studentId)
    .then(function(student) {
        if (!student){
            res.status(404).send("No update can me made because this student does not exist")
        } 
        return student.update( req.body)
    })
    .then (updatedStudent => res.json(updatedStudent))
    .catch(next);
});

api.delete('/:studentId', function(req,res,next){
    const studentId = req.params.studentId;
    Students.destroy( {where: { id: studentId }})
    .then(function(student) {
        if (!student) {
            res.status(404).json('Student did not exist to begin with.')
        } else {
            res.status(204).json('Student successfully deleted.')
        }
    }) 
    .catch(next); 
})