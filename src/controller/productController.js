const Product = require("../model/product");

async function predefinidos() {
    try {
        const count = await Product.countDocuments();
        if (count === 0) {
            await Product.create([
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

predefinidos();

const messageController = {
    async read(req, res) {
        try {
            const productos = await Product.find();
            res.json(productos).status(200);
        } catch (error) {
            let errorMessages = {
                title: "Server error.",
                text: "Server error.",
            };
            res.json(errorMessages).status(500);
        }
    },
};

module.exports = messageController;
