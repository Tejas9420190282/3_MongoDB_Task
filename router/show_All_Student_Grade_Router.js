
const express = require('express');
const { show_All_Students_Grade_Controller } = require('../controller/show_All_Students_Grade_Controller');

const show_All_Student_Grade_Router = express.Router();

show_All_Student_Grade_Router.get("/show-all-student-grade", show_All_Students_Grade_Controller);

exports.show_All_Student_Grade_Router = show_All_Student_Grade_Router;