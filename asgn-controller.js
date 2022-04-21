/**
 * controller.js
 * Controller for assignments-api application
 * Project 3
 * Name: Heather Schuster
 * COMP2150 Web Services
 */

 const Assignment = require("./asgn-model");

 /**
  * Handle retrieval of all assignments
  * Corresponds to GET api/assignments
  * @param {*} req 
  * @param {*} res 
  */
 exports.index = function (req, res) {
     Assignment.get(function (err, assignments) {
         if (err) {
             res.json({
                 status: "error",
                 message: err,
             });
         }
         res.json({
             status: "success",
             message: "Assignments retrieved successfully",
             data: assignments
         });
     });
 }
 
 /**
  * Handle create assignment actions 
  * Corresponds to POST api/assignments
  * @param {*} req 
  * @param {*} res 
  */
 exports.new = function (req, res) {
     var assignment = new Assignment();
     assignment.name = req.body.name ? req.body.name : assignment.name;
     assignment.gender = req.body.gender;
     assignment.email = req.body.email;
     assignment.phone = req.body.phone;
 // save the assignment and check for errors
     assignment.save(function (err) {
         if (err) {
             res.json(err);
         }
         res.json({
             message: 'New assignment created!',
             data: assignment
         });
     });
 };
 
 /**
  * Handle find assignment using ID
  * Corresponds to GET /api/assignment/:assignment_id
  * @param {*} req 
  * @param {*} res 
  */
 exports.view = function (req, res) {
     Assignment.findById(req.params.assignment_id, function (err, assignment) {
         if (err) {
             res.send(err);
         }
         res.json({
             message: 'Assignment details loading..',
             data: assignment
         });
     });
 };
 
 /**
  * Handle update assignment
  * Corresponds to PUT /api/assignments/:assignment_id
  * @param {*} req 
  * @param {*} res 
  */
 exports.update = function (req, res) {
     Assignment.findById(req.params.assignment_id, function (err, assignment) {
         if (err) {
             res.send(err);
         }
         assignment.name = req.body.name ? req.body.name : assignment.name;
         assignment.gender = req.body.gender;
         assignment.email = req.body.email;
         assignment.phone = req.body.phone;
 // save the assignment and check for errors
         assignment.save(function (err) {
             if (err) {
                 res.json(err);
             }
             res.json({
                 message: 'Assignment Info updated',
                 data: assignment
             });
         });
     });
 };
 
 /**
 * Handle delete assignment
 * Corresponds to DELETE /api/assignment/:assignment_id
 * @param {*} req 
 * @param {*} res 
 */
 exports.delete = function (req, res) {
     Assignment.remove({
         _id: req.params.assignment_id
     }, function (err, assignment) {
         if (err) {
             res.send(err);
         }
         res.json(
             {
                 status: "success",
                 message: 'Assignment deleted'
             });
     });
 };
 