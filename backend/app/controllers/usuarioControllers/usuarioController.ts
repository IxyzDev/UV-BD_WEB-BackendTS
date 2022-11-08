import db from '../../models'
import { UserInterface, CorreoUsuario } from '../../interfaces/types'
import * as v from "./verificacionUsuario"

const usuario = db.Usuario
const UserInterface: UserInterface[] = usuario as UserInterface[]

export const getUsuarios = async (): Promise <UserInterface[]> => {
    const usuarios = await usuario.findAll({ where: {} })
    return usuarios
}

// Mostrar el correo del usuario según su rut
export const getCorreoUsuario = async (rutUsuario: string)=> {
  const correoUsuario = await usuario.findAll({ where: { rutUsuario } })
  return correoUsuario
}

export const transformCorreoUsuario = (): CorreoUsuario[] =>
  UserInterface.map(({correoUsuario}) => {
    return {
      correoUsuario
    }
  })
  
export const postUsuario = (object: any):  UserInterface => {
  const newEntry:  UserInterface = {
  rutUsuario: v.parseRutUsuario(object.rutUsuario),
  nombreUsuario: v.parseNombreUsuario(object.nombreUsuario),
  correoUsuario: v.parseCorreoUsuario(object.correoUsuario),
  contrasenaUsuario: v.parseContrasenaUsuario(object.contrasenaUsuario),
  direccionUsuario: v.parseDireccionUsuario(object.direccionUsuario)
  }
  
  return newEntry
}