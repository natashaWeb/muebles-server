const Product = require("../model/product");
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
