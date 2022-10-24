const express = require("express");
const router = express.Router(); //manejador de rutas de express
const PreguntasSchema = require("../models/Mpreguntas");


//Crear un nueva Pregunta
router.post("/Mpreguntas", (req, res) => {
    const Mpreguntas = PreguntasSchema(req.body);
    Mpreguntas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todas las Preguntas
router.get("/Mpreguntas", (req, res) => {
    PreguntasSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
