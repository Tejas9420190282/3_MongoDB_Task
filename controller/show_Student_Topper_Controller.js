const { student } = require("../model/student_Scema");

const show_Student_Topper_Controller = async (req, res) => {
    try {
        const allStudent = await student.find();

        let topperStudent = null;

        let hightestAvg = 0;

        allStudent.map((stu, index) => {
            let total = 0;

            stu.exam.forEach((exm) => {
                total = total + exm.score;
            });

            const exmCount = stu.exam.length;

            const avg = exmCount > 0 ? total / exmCount : 0;

            if (avg > hightestAvg) {
                hightestAvg = avg;

                let grade = "F";

                if (avg >= 90) {
                    grade = "A";
                } else if (avg >= 80) {
                    grade = "B";
                } else if (avg >= 70) {
                    grade = "C";
                } else if (avg >= 60) {
                    grade = "D";
                } else if (avg >= 50) {
                    grade = "E";
                } else {
                    grade = "F";
                }

                topperStudent = {
                    Id: stu._id,
                    Name : stu.name,
                    Email : stu.email,
                    totalScore : total,
                    avgerage : parseInt(avg.toFixed(2)),
                    grade : grade,
                    Exam : stu.exam
                };
            }
        });

        if (!topperStudent) {
            
            console.log("No students found or exams missing");

            return res.status(404).json({
                success: false,
                message: "No students found or exams missing"
            });
        }

        console.log("Topper student data fetched successfully...".bgYellow);

        res.status(200).json({
            success: true,
            message: "Topper student data fetched successfully...",
            topper: topperStudent
        });

    } catch (error) {
        console.log(
            `Error in show_Student_Topper_Controller : ${error.message}`.bgRed
        );

        res.status(500).json({
            success: false,
            message: `Error in show_Student_Topper_Controller : ${error.message}`,
        });
    }
};

exports.show_Student_Topper_Controller = show_Student_Topper_Controller;
