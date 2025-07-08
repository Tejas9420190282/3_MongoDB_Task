
const express = require('express');
const { show_All_Student_Controller } = require('../controller/show_All_Student_Controller');

const show_All_Student_Router = express.Router();

show_All_Student_Router.get("/show-all-students-data", show_All_Student_Controller);

exports.show_All_Student_Router = show_All_Student_Router;