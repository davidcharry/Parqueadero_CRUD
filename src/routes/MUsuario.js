const express = require("express");
const router = express.Router(); //manejador de rutas de express
const UsuarioSchema = require("../models/MUsuario");

//Crear un nuevo Usuario
router.post("/MUsuario", (req, res) => {
    const MUsuario = UsuarioSchema(req.body);
    MUsuario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todos los Usuarios
router.get("/MUsuario", (req, res) => {
    UsuarioSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Consultar un Usuario por su id
router.get("/MUsuario/:id", (req, res) => {
    const { id } = req.params;
    UsuarioSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar un Usuario por su id
router.put("/MUsuario/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, cedula, nom_institucion, tip_usu, nom_usua, contrasena, fecha } = req.body;
    UsuarioSchema
        .updateOne({ _id: id }, {
            $set: { nombre, cedula, nom_institucion, tip_usu, nom_usua, contrasena, fecha }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Eliminar un Usuario por su id
router.delete("/MUsuario/:id", (req, res) => {
    const { id } = req.params;
    UsuarioSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;