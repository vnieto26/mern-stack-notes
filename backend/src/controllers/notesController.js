import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error al obtener las notas", error);
        res.status(500).json({ message: error.message });
    }
};

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Nota no encontrada" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.log("Error al obtener la nota", error);
        res.status(500).json({ message: error.message });
    }
};

export async function createNote(req, res) {
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        const savedNote = await newNote.save();
        res.status(201).json({ message: "Nota creada exitosamente", savedNote });
    } catch (error) {
        console.log("Error al crear la nota", error);
        res.status(500).json({ message: error.message });
    }
};

export async function updateNote(req, res) {
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if (!updatedNote) {
            return res.status(404).json({ message: "Nota no encontrada" });
        }
        res.status(200).json({ message: "Nota actualizada exitosamente", updatedNote });
    } catch (error) {
        console.log("Error al actualizar la nota", error);
        res.status(500).json({ message: error.message });
    }
};

export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Nota no encontrada" });
        }
        res.status(200).json({ message: "Nota eliminada exitosamente", deletedNote });
    } catch (error) {
        console.log("Error al eliminar la nota", error);
        res.status(500).json({ message: error.message });
    }
};
