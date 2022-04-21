/**
 * model.js
 * Controller for assignments-api application
 * Project 3
 * Name: Heather Schuster
 * COMP2150 Web Services
 */

const mongoose = require("mongoose");

var assignmentSchema = mongoose.Schema({
	courseName: {
		type: String,
		required: true
	},
	assignmentName: {
		type: String,
		required: true
	},
	dueDate:{
		type: Date,
		default: Date.now
	}
});

var Assignment = module.exports = mongoose.model("assignment2", assignmentSchema);
module.exports.get = function (callback, limit) {
	Assignment.find(callback).limit(limit);
}