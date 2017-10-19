'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

// This is also probably a good place for you to set up your associations

//e: part 1: models
// - Students
//   * have profile info (e.g. name and email)
//   * must be assigned to a campus

// - Campuses
//   * have info such as a name and image
//   * can have many students assigned (may have none)

const Sequelize = require('sequelize');
const db = require('../index.js')

const Students = db.define('students',//add more like pics? grade? 
{
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,  
		//isEmail: true
	}
})

const Campuses = db.define('campuses', 
{
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	image: {
		type: Sequelize.STRING//?
	}
})

//associations
Students.belongsTo(Campuses);
// Places albumId column on song rows
// Allows song.getAlbum/setAlbum/removeAlbum to exist and function
Campuses.hasMany(Students);
// Also places albumId column on song rows, which is redundant to Song.belongsTo(Album)
// However, it also allows for the use of album.getSongs/album.setSong(s)/addSong(s)/etc

module.exports = { db, Students, Campuses}