const { student } = require("../model/student_Scema");

const show_Student_By_Id_Controller = async  (req, res) => {
    try {
        
        const {id} = req.body;

        if (!id) {
            
            console.log(`All the input are mandatory.....`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `All the input are mandatory.....`
            })
        }

        const studentData = await student.findById(id);

        if (!studentData) {
            
            console.log(`student not found...`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `student not found...`
            })
        }

        console.log(`Student data featch  successfully....`.bgYellow);
        
        res.status(200).json({
            success : true,
            message : `Student data featch  successfully....`,
            studentData : studentData
        })


    } catch (error) {
        
        console.log(`Error in show_Student_By_Id_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success : false,
            message : `Error in show_Student_By_Id_Controller : ${error.message}`
        })
    }
}

exports.show_Student_By_Id_Controller = show_Student_By_Id_Controller;