import db from '../models'
import { PublicacionInterface } from '../interfaces/types'
import { v4 as uuidv4 } from 'uuid'
import * as v from "./verificacion"

const publicacion = db.Publicacion

export const getEntries = async (): Promise<PublicacionInterface[]> => {
  const publicaciones = await publicacion.findAll({ where: {} })
  return publicaciones
}

export const postPublicacion = (object: any): PublicacionInterface => {
  const newEntry: PublicacionInterface = {
    idPublicacion: uuidv4(),
    photo: v.parsePhoto(object.photo),
    price: v.parsePrice(object.price),
    state: v.parseState(object.state),
    title: v.parseTittle(object.title),
    description: v.parseDescription(object.description)
  }

  return newEntry
}