import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Listado de notas" });
});

router.post("/", (req, res) => {
    res.status(201).json({ message: "Nota creada exitosamente" });
});

router.put("/:id", (req, res) => {
    res.status(200).json({ message: "Nota actualizada exitosamente" });
});

router.delete("/:id", (req, res) => {
    res.status(200).json({ message: "Nota eliminada exitosamente" });
});

export default router;
