import db from '../../models'
import {  AdminInterface } from '../../interfaces/types'
import * as v from "./verificacionAdministrador"
import { v4 as uuidv4 } from 'uuid'

const administrador = db.Administrador

export const getAdministradores = async (): Promise< AdminInterface[]> => {
    const administradors = await administrador.findAll({ where: {} })
    return administradors
  }
  
  export const postAdministrador = (object: any):  AdminInterface => {
    const newEntry:  AdminInterface = {
      idAdmin: uuidv4(),
      nombreAdmin: v.parseNombreAdmin(object.nombreAdmin),
      contrasenaAdmin: v.parseContrasenaAdmin(object.contrasenaAdmin)
    }
  
    return newEntry
  }