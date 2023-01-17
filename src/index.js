const express = require('express');
const mongoose = require('mongoose');
const { use } = require('./routes/products');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/products');

const app = express();
//Asignamos el puerto o si no esta disponible toma otro por defecto
const port = process.env.PORT || 9000;

// middleware
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my API in Node js");
})

//mongodb connection
mongoose
    .set("strictQuery", false)
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a Mongo'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Servidor escuchando en el puerto', port));