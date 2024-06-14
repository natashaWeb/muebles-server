const mongoose = require("mongoose");

const url = process.env.DB;

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conectado correctamente a MongoDB");
    })
    .catch((error) => {
        console.error("Error al conectar a MongoDB:", error);
    });
