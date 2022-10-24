const express = require("express");
const router = express.Router(); //manejador de rutas de express
const ExamenSchema = require("../models/MExamen");

//Crear un nuevo Examen
router.post("/MExamen", (req, res) => {
    const MExamen = ExamenSchema(req.body);
    MExamen
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todos los Examenes
router.get("/MExamen", (req, res) => {
    ExamenSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un Examen por su id
router.get("/MExamen/:id", (req, res) => {
    const { id } = req.params;
    ExamenSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar un Usuario por su id
router.put("/MExamen/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, curso, fecha_ini, fecha_fin, pregunta_n, opcion_n, respuesta_n } = req.body;
    ExamenSchema
        .updateOne({ _id: id }, {
            $set: { nombre, curso, fecha_ini, fecha_fin, pregunta_n, opcion_n, respuesta_n }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});