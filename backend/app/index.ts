import express from 'express'
const cors = require("cors");
import db from './models'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json()) // middleware que transforma la req.body a un json

db.sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Se escucha ${PORT}`)
  })
})

app.get("/", (_req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// rutas
app.use("/publicacion", require("./routes/publicacion.routes"));