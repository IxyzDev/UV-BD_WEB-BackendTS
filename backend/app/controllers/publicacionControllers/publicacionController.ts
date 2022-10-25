import db from '../../models'
import { PublicacionXUserXProductoInterface } from '../../interfaces/types'
import { v4 as uuidv4 } from 'uuid'
import * as v from "./verificacionPublicacion"

const publicacion = db.Publicacion

export const getPublicaciones = async (): Promise<PublicacionXUserXProductoInterface[]> => {
  const publicaciones = await publicacion.findAll({ where: {} })
  return publicaciones
}

export const VerifUserXProducto =  async (param: any): Promise<boolean> => {
  const verifRut = await v.isRutUsuario(param.idPRoducto)
  const verifId = await v.isIdProducto(param.userRut)
  if (!verifRut) {
    throw new Error("Rut es incorrecto")
  }
  if (!verifId) {
    throw new Error("Id es incorrecto")
  }
  if (verifId && verifRut) {
    return true
  }
  return false
}

export const postPublicacion = (object: any): PublicacionXUserXProductoInterface  => {
  const newEntry: PublicacionXUserXProductoInterface = {
    idPublicacion: uuidv4(),
    photo: v.parsePhoto(object.photo),
    price: v.parsePrice(object.price),
    state: v.parseState(object.state),
    title: v.parseTittle(object.title),
    description: v.parseDescription(object.description),
    userRut: v.parseUserRut(object.userRut),
    idProducto: v.parseIdProducto(object.idProducto)
  }
  return newEntry
}