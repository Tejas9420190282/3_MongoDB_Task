
const express = require('express');
const { show_Student_Topper_Controller } = require('../controller/show_Student_Topper_Controller');

const show_Student_Topper_Router = express.Router();

show_Student_Topper_Router.get("/show-student-topper", show_Student_Topper_Controller);

exports.show_Student_Topper_Router = show_Student_Topper_Router;

