import express, { Request, Response } from 'express'
import * as pc from '../controllers/publicacionController'
import db from '../models'

const router = express.Router()

router.get('/read', async (_req: Request, res: Response) => {
  try {
    const publicaciones = await pc.getEntries()
    return res.json(publicaciones)
  } catch (error) {
    return res.json({ msg: 'Error al leer papito' })
  }
})

router.post('/create', async (req: Request, res: Response) => {
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

module.exports = router;