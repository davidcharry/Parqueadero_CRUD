const express = require("express");
const router = express.Router(); //manejador de rutas de express
const PreguntaSchema = require("../models/MPregunta");


//Crear un nueva Pregunta
router.post("/MPregunta", (req, res) => {
    const MPregunta = PreguntaSchema(req.body);
    MPregunta
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todas las Preguntas
router.get("/MPregunta", (req, res) => {
    PreguntaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
