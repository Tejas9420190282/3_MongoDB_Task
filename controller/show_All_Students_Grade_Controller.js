


const { student } = require("../model/student_Scema");

const show_All_Students_Grade_Controller = async (req, res) => {
    try {

        const allStudentData = await student.find();

        const result = allStudentData.map((stu, index) => {

            let total = 0;
            let avg = 0;

            let grade = "F";

            stu.exam.forEach((exm) => {
                total = total + exm.score;

            });

            let examCount = stu.exam.length;

            avg = examCount > 0 ? (total / examCount) : 0;

            if (avg >= 90) {
                grade = "A"
            }
            else if (avg >= 80) {
                grade = "B"
            }
            else if (avg >= 70) {
                grade = "C"
            }
            else if (avg >= 60) {
                grade = "D"
            }
            else if (avg >= 50) {
                grade = "E"
            }
            else {
                grade = "F"
            } 

            return {
                Id : stu.id,
                Name : stu.name,
                Email : stu.email,
                totalScore : total,
                average : avg,
                grade : grade,
                exam : stu.exam
            }

        })

        console.log(`Student data featch successfully...`.bgYellow);
        
        res.status(200).json({
            success : false,
            message : `Student data featch successfully...`,
            StudentData : result
        })
        
    } catch (error) {
        
        console.log(`Error in show_All_Students_Grade_Controller : ${error.message}`.bgRed);

        res.status(500).json({
            success : false,
            message : `EError in show_All_Students_Grade_Controller : ${error.message}`
        })
        
    }
}

exports.show_All_Students_Grade_Controller = show_All_Students_Grade_Controller;