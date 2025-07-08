
// db.js

const { default: mongoose } = require("mongoose");

const connectDB = async (req, res) => {
    try {
        
        await mongoose.connect(`mongodb://127.0.0.1:27017/task1`);

        console.log(`Database created successfully...`.bgGreen);
        

    } catch (error) {
        
        console.log(`Error in database connection : ${error.message}`.bgRed);
    }
}

exports.connectDB = connectDB;

