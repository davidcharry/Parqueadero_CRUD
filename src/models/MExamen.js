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
    },
    Preguntas: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Mpregunatas'}]
});

module.exports = mongoose.model('MExamen', ExamenSchema);