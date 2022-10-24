import express, { Request, Response } from 'express'
import * as pc from '../controllers/publicacionControllers/publicacionController';
import db from '../models'

const router = express.Router()

router.get('/read', async (_req: Request, res: Response) => {
  try {
    const publicaciones = await pc.getPublicacion()
    return res.json(publicaciones)
  } catch (error) {
    return res.json({ msg: 'Error al mostrar las publicaciones' })
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
    return res.json({ msg: 'Error al crear una nueva publicacion' })
  }
})

export default router