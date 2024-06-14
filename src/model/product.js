const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true,
    },
    texto: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
