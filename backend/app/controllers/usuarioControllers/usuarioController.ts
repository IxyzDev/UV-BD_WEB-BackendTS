import db from '../../models'
import {  UserInterface } from '../../interfaces/types'
import * as v from "./verificacionUsuario"

const usuario = db.Usuario

export const getUsuarios = async (): Promise< UserInterface[]> => {
    const usuarios = await usuario.findAll({ where: {} })
    return usuarios
  }
  
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