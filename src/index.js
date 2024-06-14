const express = require("express");
const cors = require("cors");
const bunyan = require("bunyan");
const messageRouter = require("./router/ProductRouter");

const app = express();
require("dotenv").config();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const logger = bunyan.createLogger({ name: "Servidor de mi aplicacion" });

app.use("/products", messageRouter);

const PORT = process.env.PORT || process.env.DEV_PORT;

app.listen(PORT, () => {
    logger.info("Servidor encendido");
});

require("./db");
