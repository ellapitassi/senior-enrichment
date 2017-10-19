'use strict'
const api = require('express').Router() //export this
module.exports = api;
const db = require('../db')
const Campuses = db.Campuses;
const Students = db.Students;
//bodyparser for requests

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

	//e: api/hello
	api.get('/hello', (req, res) => res.send({hello: 'world'})) //< shows up in console as json

const bodyParser = require('body-parser')
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: true}));

api.use('/students', require('./routes/students'));
api.use('/campuses', require('./routes/campuses'));


api.use(function(req,res){
    res.sendStatus(500)
})
// api.use((err, req, res, next) => 
// 	res.status(err.status || 505).send(err.message || 'Internal server error.')
// );

//app?.get...
//find all etc
//remember error cases like catch(next)

//for post - find or create
//promise.all if you need 2 values to do something, first get both with promise.all

// ```
// GET
// - all campuses
// - a campus by id
// - all students
// - a student by id

// POST
// - new campus
// - new student

// PUT
// - updated student info for one student
// - updated campus info for one campus

// DELETE
// - a campus
// - a student
// ```