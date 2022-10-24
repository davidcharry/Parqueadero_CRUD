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

//Consultar una Pregunta por su id
router.get("/MPregunta/:id", (req, res) => {
    const { id } = req.params;
    PreguntaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar un Pregunta por su id
router.put("/MUsuario/:id", (req, res) => {
    const { id } = req.params;
    const { Opcion1, Opcion2, Opcion3, Opcion4, Res_Correcta } = req.body;
    UsuarioSchema
        .updateOne({ _id: id }, {
            $set: { Opcion1, Opcion2, Opcion3, Opcion4, Res_Correcta }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
