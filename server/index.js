import express from "express";
import bodyParser from "body-parser";
import cors from "cors";



const app = express();
const port = 5000;
app.listen(port,()=>console.log(`server is listening to port ${port}`));
//Middleware
app.use(bodyParser.json())
app.use(cors());

//  Routes
import posts from "./routes/api/posts.js"
app.use("/api/posts",posts);


