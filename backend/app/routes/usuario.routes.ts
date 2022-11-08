import express, { Request, Response } from 'express'
import * as usuarioController from '../controllers/usuarioControllers/usuarioController';
import db from '../models'

const router = express.Router()

router.get('/read', async (_req: Request, res: Response) => {
  try {
    const usuarios = await usuarioController.getUsuarios()
    return res.json(usuarios)
  } catch (error) {
    return res.json({ msg: 'Error al mostrar a los usuarios' })
  }
})

router.get('/read/:rutUsuario', async (req: Request, res: Response) => {
  try {
    console.log(req.params.rutUsuario)
    const correoUsuarioOBtener = await usuarioController.getCorreoUsuario(req.params.rutUsuario)
    return res.json(correoUsuarioOBtener)
  } catch (error) {
    return res.json({ msg: 'Error al el correo del usuario por su rut', error })
  }
})

router.post('/create', async (req: Request, res: Response) => {
  try {
    const newUsuarioEntry = usuarioController.postUsuario({ ...req.body })

    const record = db.Usuario.create(newUsuarioEntry)

    return res.json({ record, msg: 'Usuarios subidos correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ error, msg: 'Error al subir al nuevo usuario' })
  }
})

export default router