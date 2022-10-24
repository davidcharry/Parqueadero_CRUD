const express = require("express");
const router = express.Router(); //manejador de rutas de express
const PreguntasSchema = require("../models/Mpreguntas");


//Crear un nuevo Usuario
router.post("/MPreguntas", (req, res) => {
    const Mpreguntas = PreguntasSchema(req.body);
    Mpreguntas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});