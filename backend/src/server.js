import express from "express";
import notesRouter from "./routes/notesRouter.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(rateLimiter);

// app.use((req, res, next) => {
//     console.log(`Método: ${req.method} URL: ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
});

