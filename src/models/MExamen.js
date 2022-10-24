const mongoose = require("mongoose"); // importando el componente mogoose
const ExamenSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    fecha_ini: {
        type: String,
        required: true
    },
    fecha_fin: {
        type: String,
        required: true
    },
    pregunta_n: {
        type: Number,
        required: true
    },
    opcion_n: {
        type: Number,
        required: true
    },
    respuesta_n: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('MExamen', ExamenSchema);