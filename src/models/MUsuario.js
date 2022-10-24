const mongoose = require("mongoose"); // importando el componente mogoose
const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true
    },
    nom_institucion: {
        type: String,
        required: true
    },
    tip_usu: {
        type: String,
        required: true
    },
    nom_usua: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    Examen: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'MExamen'}]
});

module.exports = mongoose.model('MUsuario', UsuarioSchema);