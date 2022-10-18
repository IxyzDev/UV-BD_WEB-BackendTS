import express, { Request, Response } from 'express'

import * as pc from './controllers/publicacionControllers'

import db from './models'

const app = express()
const PORT = 3000

app.use(express.json()) // middleware que transforma la req.body a un json

app.get('/read', async (_req: Request, res: Response) => {
  try {
    return res.json(await pc.getEntries())
  } catch (error) {
    return res.json({ msg: 'Error al leer papito' })
  }
})

app.post('/create', async (req: Request, res: Response) => {
  try {
    const newPublicacionEntry = pc.postPublicacion({ ...req.body })

    const record = db.Publicacion.create(newPublicacionEntry)
    // res.json(newPublicacionEntry)
    return res.json({ record, msg: 'Bien' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al subir papito' })
  }
})

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Se escucha ${PORT}`)
  })
})
