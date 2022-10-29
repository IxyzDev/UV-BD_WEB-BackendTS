import express, { Request, Response } from 'express'
import * as administradorController from '../controllers/administradorControllers/administradorController';
import db from '../models'

const router = express.Router()

router.get('/read', async (_req: Request, res: Response) => {
  try {
    const administradores = await administradorController.getAdministradores()
    return res.json(administradores)
  } catch (error) {
    return res.json({ msg: 'Error al mostrar a los administradores' })
  }
})

router.post('/create', async (req: Request, res: Response) => {
  try {
    const newadministradorEntry = administradorController.postAdministrador({ ...req.body })

    const record = db.Administrador.create(newadministradorEntry)

    return res.json({ record, msg: 'administradores subidos correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({error, msg: 'Error al subir al nuevo administrador' })
  }
})

export default router