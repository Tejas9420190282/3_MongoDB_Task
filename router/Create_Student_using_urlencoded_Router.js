
// Create_Student_using_urlencoded_Router.js 

const express = require('express');
const { Create_Student_using_urlencoded_Controller } = require('../controller/Create_Student_using_urlencoded_Controller');

const Create_Student_using_urlencoded_Router = express.Router();

Create_Student_using_urlencoded_Router.post("/create-student-using-urlencoded", Create_Student_using_urlencoded_Controller);

exports.Create_Student_using_urlencoded_Router = Create_Student_using_urlencoded_Router;

