
// exam_Scema.js

const { default: mongoose } = require("mongoose");

 const exam_Scema = mongoose.Schema({
    subject : {
        type : String,
        required : true
    },
    score : {
        type :Number,
        required : true,
        min : 0,
        max : 100
    }
 })

 exports.exam_Scema = exam_Scema;

