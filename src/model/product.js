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

async function predefinidos() {
    try {
        const count = await Producto.countDocuments();

        if (count === 0) {
            await Producto.create([
                {
                    titulo: "Table",
                    autor: "The Rock",
                    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a fermentum lorem, eget laoreet est.",
                    imagen: "/imagen1.png",
                },
                {
                    titulo: "Chair",
                    autor: "Messi",
                    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a fermentum lorem, eget laoreet est.",
                    imagen: "/imagen2.png",
                },
                {
                    titulo: "Couch",
                    autor: "Suares",
                    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a fermentum lorem, eget laoreet est.",
                    imagen: "/imagen3.png",
                },
            ]);
        }
    } catch (error) {
        console.error("Error al agregar datos predefinidos:", error);
    }
}

const Producto = mongoose.model("Producto", productoSchema);

predefinidos()

module.exports = Producto;
