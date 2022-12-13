require('dotenv').config();
//Importar dependencias
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bp = require('body-parser')

mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


const app = express();
//configuración de cors (control de acceso)
app.use(cors())
// analizar las solicitudes de tipo de contenido - application/json
app.use(bp.json())
// analizar las solicitudes de tipo de contenido - application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: true }))

require("./app/routes/admin.routes");
require("./app/routes/gestion.routes");
require("./app/routes/mercado.routes");
require("./app/routes/producto.routes");
require("./app/routes/publicacion.routes");
require("./app/routes/seccion.routes");
require("./app/routes/usuario.routes");






const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
