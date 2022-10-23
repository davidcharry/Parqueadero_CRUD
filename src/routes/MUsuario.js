const express = require("express");
const router = express.Router(); //manejador de rutas de express
const UsuarioSchema = require("../models/MUsuario");

//Crear un nuevo material
router.post("/MUsuario", (req, res) => {
    const MUsuario = UsuarioSchema(req.body);
    MUsuario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todos los Materiales didacticos
router.get("/MUsuario", (req, res) => {
    MdidacticoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Consultar un material por su id
router.get("/MUsuario/:id", (req, res) => {
    const { id } = req.params;
    UsuarioSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un material por su id
router.put("/MUsuario/:id", (req, res) => {
    const { id } = req.params;
    const {Nombre, Cedula, Nom_Institucion, Tip_Usu, Nom_Usua, Contrasena, Fecha } = req.body;
    UsuarioSchema
        .updateOne({ _id: id }, {
            $set: { Nombre, Cedula, Nom_Institucion, Tip_Usu, Nom_Usua, Contrasena, Fecha }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Eliminar un material por su id
router.delete("/MUsuario/:id", (req, res) => {
    const { id } = req.params;
    UsuarioSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;