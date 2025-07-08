const { student : student_Scema } = require("../model/student_Scema");

const Create_Student_using_urlencoded_Controller = async (req, res) => {
    try {
        const { name, email, subject, score } = req.body;

        if (!name || !email || !subject || !score) {
            console.log(`All the inputs are mandatory....`.bgRed);

            res.status(404).json({
                success: false,
                message: `All the inputs are mandatory....`,
            });
        }

        // Split subjects and scores into arrays

        const subjectArrray = subject.split(","); // "Math,English" → ["Math", "English"]

        const scoreArray = score.split(","); // "88,76" → ["88", "76"]

        // validate array length

        if (subjectArrray.length !== scoreArray.length) {
            console.log("Subject and score counts do not match".bgRed);

            return res.status(400).json({
                success: false,
                message: "Subject and score counts do not match",
            });
        }

        // Build exams array
        const exam = subjectArrray.map((subject, index) => ({
            subject: subject.trim(),
            score: Number(scoreArray[index])
        }));

        const student = new student_Scema({
            name,
            email,
            exam
        })

        await student.save();

        console.log(`Stdent and exam data inserted successfully...`.bgYellow);
        
        res.status(200).json({
            success : true,
            message : `Stdent and exam data inserted successfully...`,
            student : student
        })

    } catch (error) {
        console.log(
            `Error in Create_Student_using_urlencoded_Controller : ${error.message}`
                .bgRed
        );

        res.status(500).json({
            success: false,
            message: `Error in Create_Student_using_urlencoded_Controller : ${error.message}`,
        });
    }
};

exports.Create_Student_using_urlencoded_Controller =
    Create_Student_using_urlencoded_Controller;



/*  
    Input send through postman ----> body ----> x-www-form-urlencoded       
    
    like this 

    name = abc,
    email = abc@gmail.com,
    subject = Math, English, Science,
    score = 70, 80, 90
*/
