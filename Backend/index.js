import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config({});
import  connectDB from './utils/db.js'
import userRoute from "./routes/user.route.js"

const app = express();
const PORT =  process.env.PORT || 3000;



//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    Credentials:true,
}
app.use(cors(corsOptions));

// api's
app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);

app.listen(PORT,()=>{   
    connectDB();
    console.log('server running at port ${PORT}');
})