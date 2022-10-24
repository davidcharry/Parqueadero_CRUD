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