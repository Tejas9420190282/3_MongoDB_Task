
// Create_Student_using_json_Router.js

const express = require('express');
const { Create_Student_using_json_Controller } = require('../controller/Create_Student_using_json_Controller');

const Create_Student_using_json_Router = express.Router();
 
Create_Student_using_json_Router.post("/create-student-using-json", Create_Student_using_json_Controller);

exports.Create_Student_using_json_Router = Create_Student_using_json_Router;


