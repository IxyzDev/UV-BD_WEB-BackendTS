import db from '../../models'
//import { Op } from "sequelize";
import { UsuarioInterface , CorreoUsuario } from '../../interfaces/types'
import * as v from "./verificacionUsuario"

const usuario = db.Usuario


// Otras modelos
//const gestion = db.Gestion
const publicacion = db.Publicacion

export const getUsuarios = async (): Promise <UsuarioInterface []> => {
    const usuarios: UsuarioInterface [] = await usuario.findAll({ where: {} })
    return usuarios
}

// Mostrar el correo del usuario según su rut
export const getCorreoUsuario = async (rutUsuario: string): Promise <CorreoUsuario[]> => {
  if (!v.isValidRut(rutUsuario)) {
    throw new Error('El rut entregado no es valido')
  }
  
  const usuarios: UsuarioInterface [] = await usuario.findAll({ where: { 
    rutUsuario: rutUsuario
   }})

  // Mapeo a solamente el correo del usuario
  const correoUsuario: CorreoUsuario[] =
    usuarios.map(({ correoUsuario }) => {
      return {
        correoUsuario
      }
    })

  // Retorna unicamente el correo, como un string pero no como un json
  // console.log(usuario[0].correoUsuario)
  return correoUsuario
} 



export const getUsuariosGestionados = async (_idAdmin: string): Promise<UsuarioInterface[]> => {
  const usuarios = await usuario.findAll({
    attributes: ["rutUsuario"],
    include: [
    {
      model: publicacion
      
    }
  ]
  });

console.log(usuarios)

// Muestra los usuarios gestionados por un administrador

/**
  export const getUsuariosGestionados = async (idAdmin: string): Promise<UsuarioInterface []> => {
  const usuarios = await publicacion.findAll({ include: [
    {
      model: gestion,
      where: {
        idAdmin: idAdmin
      }
    },
    {
      model: usuario,
      through: {
        where: {
          rutUsuario: usuario.rutUsuario,
          completed: true
        }
      }
    }
  ]
  });

  console.log(usuarios)
  
 */
  /*
  gestiones.forEach(async (element: GestionInterface) => {
    const usuarios = await publicacion.findAll({
      where: {
        idPublicacion: element.idPublicacion
      }
    });
    console.log(usuarios)
  });

  */

  //const idPublicacion = gestiones[0].idPublicacion

  /**
   const usuarios = await publicacion.findAll({ where: {
    idPublicacion: idPublicacion
  }});
   */

  //console.log(usuarios)

  return usuarios;
}
  
export const postUsuario = (object: any):  UsuarioInterface  => {
  const newEntry:  UsuarioInterface  = {
  rutUsuario: v.parseRutUsuario(object.rutUsuario),
  nombreUsuario: v.parseNombreUsuario(object.nombreUsuario),
  correoUsuario: v.parseCorreoUsuario(object.correoUsuario),
  contrasenaUsuario: v.parseContrasenaUsuario(object.contrasenaUsuario),
  direccionUsuario: v.parseDireccionUsuario(object.direccionUsuario)
  }
  
  return newEntry
}