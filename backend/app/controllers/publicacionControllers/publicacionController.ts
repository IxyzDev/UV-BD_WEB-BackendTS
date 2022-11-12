import db from '../../models'
import { PublicacionInterface} from '../../interfaces/types'
import { v4 as uuidv4 } from 'uuid'
import * as v from "./verificacionPublicacion"

const publicacion = db.Publicacion
//import { Op } from "sequelize"

/*
export const getPublicaciones = async (): Promise<PublicacionInterface[]> => {
  const publicaciones = await publicacion.findAll({ where: {} })
  return publicaciones
}
*/

// Consulta que retorna la informacion perteneciente a una publicacion respetando la privacidad del rut del usuario
export const getPublicacionWithoutRutUsuario = async () => {
  const publicaciones: PublicacionInterface[] = await publicacion.findAll({ 
    attributes: ["idPublicacion", "fotoPublicacion", "precioPublicacion", "estadoPublicacion", "tituloPublicacion", "descripcionPublicacion", "idProducto"],
    where: { } })
  return publicaciones
}

// Retorna todas las publicaciones dadas las categorias entregadas
export const getPublicacionByEstado = async (estado: string): Promise<PublicacionInterface[]> => {
  const publicaciones: PublicacionInterface[] = await publicacion.findAll({
    attributes: ["idPublicacion", "fotoPublicacion", "precioPublicacion", "estadoPublicacion", "tituloPublicacion", "descripcionPublicacion", "idProducto"],
    where: {
      estadoPublicacion: v.parseEstadoPublicacion(estado)
    }
  })
  if (publicaciones.length == 0) {
    throw new Error('No se encontraron publicaciones cn ese estado')
  }
  return publicaciones
}

export const postPublicacion = (object: any): PublicacionInterface  => {
  const newEntry: PublicacionInterface = {
    idPublicacion: uuidv4(),
    rutUsuario: v.parseRutUsuario(object.rutUsuario),
    idProducto: v.parseIdProducto(object.idProducto),
    fotoPublicacion: v.parseFotoPublicacion(object.fotoPublicacion),
    precioPublicacion: v.parsePrecioPublicacion(object.precioPublicacion),
    estadoPublicacion: v.parseEstadoPublicacion(object.estadoPublicacion),
    tituloPublicacion: v.parseTituloPublicacion(object.tituloPublicacion),
    descripcionPublicacion: v.parseDescripcionPublicacion(object.descripcionPublicacion),
  }
  return newEntry
}

export const deletePublicacion= async (object: any) => {
  const publicacionDelete = await publicacion.findOne({
    where: {
      idPublicacion: v.parseRutUsuario(object.idPublicacion)
    }
  })

  const publicacionDeleted = await publicacionDelete.destroy();
  return publicacionDeleted;
}

export const VerifUserXProducto =  async (param: any): Promise<boolean> => {
  const verifRut = await v.isRutUsuario(param.rutUsuario)
  const verifId = await v.isIdProducto(param.idProducto)
  if (!verifRut) {
    throw new Error("Rut es incorrecto")
  }
  if (!verifId) {
    throw new Error("Id es incorrecto")
  }
  return true
}