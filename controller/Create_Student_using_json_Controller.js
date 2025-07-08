
// Create_Student_using_json_Controller.js

const { student: StudentModel } = require("../model/student_Scema");

const Create_Student_using_json_Controller = async (req, res) => {
    try {
        
        const { name, email, exam } = req.body;

        if (!name || !email || !Array.isArray(exam)) {

            console.log("name, email, and exam are required".bgRed);
            
            
            return res.status(400).json({
                success : false,
                message : "name, email, and exam are required"
            });
        }

        const student = new StudentModel({
            name,
            email,
            exam
        });

        await student.save();   // save data in mongoDB

        res.status(200).json({
            success : true,
            message : "Student data inseted successfully",
            student : student
        })

    } catch (error) {
        
        console.log(`Error in Create_Student_using_json_Controller : ${error.message}`.bgRed);

        res.status(500).json({
            success : true,
            message : `Error in Create_Student_using_json_Controller : ${error.message}`
        })
    }
}

exports.Create_Student_using_json_Controller = Create_Student_using_json_Controller;




/*  
    Input send through postman ----> body ----> row     
    
    like this 

    {
        "name": "Ravi Kumar",
        "email": "ravi@example.com",
        "exam": [
            { "subject": "Math", "score": 88 },
            { "subject": "English", "score": 76 },
            { "subject": "Science", "score": 93 }
        ]
    }

*/
