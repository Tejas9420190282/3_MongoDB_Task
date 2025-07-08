
// student_Scema.js
const { default: mongoose } = require("mongoose");
const { exam_Scema } = require("./Exam_Scema");

const student_Scema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is required"]
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },

    exam : [exam_Scema],     // Embedded exams array
}, {
    timeStand : true,    
})

const student = mongoose.model('student', student_Scema);

exports.student = student;




