import express from "express";
import notesRouter from "./notesRouter.js";

const app = express();

app.use("/api/notes", notesRouter);

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});
