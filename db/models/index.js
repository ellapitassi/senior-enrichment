'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

// This is also probably a good place for you to set up your associations

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
Campuses.hasMany(Students);
//, {onDelete: 'cascade'}..not working
// Also places albumId column on song rows, which is redundant to Song.belongsTo(Album)
// However, it also allows for the use of album.getSongs/album.setSong(s)/addSong(s)/etc

Students.belongsTo(Campuses);
// Places studectId column on song rows
// Allows song.getAlbum/setAlbum/removeAlbum to exist and function

module.exports = { db, Students, Campuses}