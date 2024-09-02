import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userRoute.js";
import companyRoute from "./routes/companyRoute.js";
import jobRoute from "./routes/jobRoute.js";
import applicationRoute from "./routes/applicationRoute.js";
// import path from "path"

dotenv.config({});

const app = express();

// const DIRNAME = path.resolve();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

//api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// app.use(express.static(path.join(DIRNAME, "/frontend/dist")));
// app.use("*", (_, res) =>{
//     res.sendFile(path.resolve(DIRNAME, "frontend", "dist", "index.html"));
// });

// Connect to database and start server
// connectDB().then(() => {
//     const PORT = process.env.PORT || 3000;
//     app.listen(PORT, () => {
//         console.log(`Server running at port ${PORT}`);
//     });
// }).catch((error) => {
//     console.error('Failed to connect to the database', error);
//     process.exit(1); // Exit with a failure code if database connection fails
// });

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});

// app.listen(8080, () => {
//     console.log("server is listening to port 8080");
// });