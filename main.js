
// main.js

const express = require('express');
const colors = require('colors');
const { connectDB } = require('./config/db');
const { Create_Student_using_urlencoded_Router } = require('./router/Create_Student_using_urlencoded_Router');
const { Create_Student_using_json_Router } = require('./router/Create_Student_using_json_Router');
const { show_Student_By_Id_Router } = require('./router/show_Student_By_Id_Router');
const { show_All_Student_Router } = require('./router/show_All_Student_Router');
const { show_All_Student_Grade_Router } = require('./router/show_All_Student_Grade_Router');
const { show_Student_Topper_Router } = require('./router/show_Student_Topper_Router');



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(Create_Student_using_urlencoded_Router);

app.use(Create_Student_using_json_Router);

app.use(show_Student_By_Id_Router);

app.use(show_All_Student_Router);

app.use(show_All_Student_Grade_Router);

app.use(show_Student_Topper_Router);

const PORT = 7878;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {

            console.log(`Server running on http://localhost:${PORT}`.bgGreen);           
        })
        
    } catch (error) {
        
        console.log(`Error in server start : ${error.message}`.bgRed);
    }
}


startServer();








