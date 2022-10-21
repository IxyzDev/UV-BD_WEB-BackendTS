import db from '../../models'
import {  UserInterface } from '../../interfaces/types'
import * as v from "./verificacionProducto"

const usuario = db.Usuario

export const getEntries = async (): Promise< UserInterface[]> => {
    const usuarios = await usuario.findAll({ where: {} })
    return usuarios
  }
  
  export const postUsuario = (object: any):  UserInterface => {
    const newEntry:  UserInterface = {
    userRut: v.parseUserRut(object.userRut),
    userName: v.parseUserName(object.userName),
    userEmail: v.parseUserEmail(object.userEmail),
    userPassword: v.parseUserPassword(object.userPassword),
    userAddress: v.parseUserAddress(object.userAddress)
    }
  
    return newEntry
  }