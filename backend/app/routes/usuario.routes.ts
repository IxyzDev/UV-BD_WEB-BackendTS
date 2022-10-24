import express, { Request, Response } from 'express'
import * as pc from '../controllers/usuarioControllers/usuarioController';
import db from '../models'

const router = express.Router()

router.get('/read', async (_req: Request, res: Response) => {
  try {
    const usuarios = await pc.getEntries()
    return res.json(usuarios)
  } catch (error) {
    return res.json({ msg: 'Error al mostrar a los usuarios' })
  }
})

router.post('/create', async (req: Request, res: Response) => {
  try {
    const newUsuarioEntry = pc.postUsuario({ ...req.body })

    const record = db.Usuario.create(newUsuarioEntry)
    // res.json(newUsuarioEntry)
    return res.json({ record, msg: 'Usuarios subidos correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al subir al nuevo usuario' })
  }
})

export default router