import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRouter from "./routes/project.routes.js";
import contactRouter from "./routes/contact.routes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connect DB
connectDB();

// test server
app.get("/", (req, res) => {
  res.send("API is running...");
});


app.use('/api/project' ,projectRouter)
app.use('/api/contact' , contactRouter)
// PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
