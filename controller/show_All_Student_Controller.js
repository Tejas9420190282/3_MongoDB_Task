const { student } = require("../model/student_Scema");


const show_All_Student_Controller = async (req, res) => {
    try {
        
        const allStudent = await student.find();

        console.log(`all Student's data featch successfully.....`.bgYellow);
        
        res.status(200).json({
            success : true,
            message : `all Student's data featch successfully.....`,
            allStudent : allStudent
        })

    } catch (error) {
        
        console.log(`Error in show_All_Student_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success : false,
            message : `Error in show_All_Student_Controller : ${error.message}`
        })
    }
}

exports.show_All_Student_Controller = show_All_Student_Controller;