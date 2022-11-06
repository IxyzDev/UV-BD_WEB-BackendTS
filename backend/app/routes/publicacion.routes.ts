import express, { Request, Response } from 'express'
import * as publicacionController from '../controllers/publicacionControllers/publicacionController';
import db from '../models'

const router = express.Router()

router.get('/read', async (_req: Request, res: Response) => {
  try {
    const publicaciones = await publicacionController.getPublicaciones()
    return res.json(publicaciones)
  } catch (error) {
    return res.json({ msg: 'Error al mostrar las publicaciones', error })
  }
})

router.post('/create', async (req: Request, res: Response) => {
  try {
    if (!await publicacionController.VerifUserXProducto({ ...req.body })) {
      throw new Error('Error dentro de los parametros de rut o  identificador de producto')
    }

    const newPublicacionEntry = publicacionController.postPublicacion({ ...req.body })

    const record = db.Publicacion.create(newPublicacionEntry)

    return res.json({record, msg: 'Ingreso de publicacion correcto' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al crear una nueva publicacion' })
  }
})

export default router