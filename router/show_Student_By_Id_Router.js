
const express = require('express');
const { show_Student_By_Id_Controller } = require('../controller/show_Student_By_Id_Controller');

const show_Student_By_Id_Router = express.Router();

show_Student_By_Id_Router.get("/show-student-by-id", show_Student_By_Id_Controller)

exports.show_Student_By_Id_Router = show_Student_By_Id_Router;