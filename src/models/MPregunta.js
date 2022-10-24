const mongoose = require("mongoose"); // importando el componente mogoose
const PreguntaSchema = mongoose.Schema({
    Opcion1: {
        type: String,
        required: true
    },
    Opcion2: {
        type: String,
        required: true
    },
    Opcion3: {
        type: String,
        required: true
    },
    Opcion4: {
        type: String,
        required: true
    },
    Res_Correcta: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Mpregunta', PreguntaSchema);