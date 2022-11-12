import express, { Request, Response } from 'express'
import * as usuarioController from '../controllers/usuarioControllers/usuarioController';
import db from '../models'

const router = express.Router()

// ¿Puedo hacer que estas peticiones se realizen unicamente para un usuario logeado?

router.get('/mostrar', async (_req: Request, res: Response) => {
  try {
    const usuarios = await usuarioController.getUsuarios()
    return res.json(usuarios)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar a los usuarios' })
  }
})

router.get('/mostrar/correo/:rutUsuario', async (req: Request, res: Response) => {
  try {
    const usuarios = await usuarioController.getCorreoUsuario(req.params.rutUsuario)
    return res.json(usuarios)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar correo del usuario por su rut'})
  }
})

router.get('/mostrar/admin/:idAdmin', async (req: Request, res: Response) => {
  try {
    console.log(req.params.idAdmin)
    const usuarios = await usuarioController.getUsuariosGestionados(req.params.idAdmin)
    return res.json(usuarios)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar correo del usuario por su rut' })
  }
})

router.post('/crear', async (req: Request, res: Response) => {
  try {
    const newUsuarioEntry = usuarioController.postUsuario({ ...req.body })

    const record = db.Usuario.create(newUsuarioEntry)

    return res.json({ record, msg: 'Usuarios subidos correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({msg: 'Error al subir al nuevo usuario' })
  }
})

export default router