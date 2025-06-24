import express from "express";
import notesRouter from "./routes/notesRouter.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// Middleware
app.use(express.json());

app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`);
});

