const mongoose = require("mongoose"); // importando el componente mogoose
const UsuarioSchema = mongoose.Schema({
    Nombre: {
        type: String,
        required: true
    },
    Cedula: {
        type: String,
        required: true
    },
    Nom_Institucion: {
        type: String,
        required: true
    },
    Tip_Usu: {
        type: String,
        required: true
    },
    Nom_Usua: {
        type: String,
        required: true
    },
    Contrasena: {
        type: String,
        required: true
    },
    Fecha: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('MUsuario', UsuarioSchema);