import { EnumState } from '../../interfaces/types'
import db from '../../models'
const usuario = db.Usuario
const producto = db.Producto

export const parseState = (StateFromRequest: any): EnumState => {
  if (!isString(StateFromRequest) || !isState(StateFromRequest)) {
    throw new Error('Error al ingresar el estado de la publicacion')
  }
  return StateFromRequest
}

export const parsePhoto = (PhotoFromRequest: any): string => {
  if (!isString(PhotoFromRequest)) {
    throw new Error('Error en la fotografia de la publicacion')
  }
  return PhotoFromRequest
}

export const parsePrice = (priceFromRequest: any): number => {
  if (!isNumber(priceFromRequest)) {
    throw new Error('EL valor introducido al producto no es valido (error desde publicacion)')
  }

  return priceFromRequest
}

export const parseTittle = (TittleFromRequest: any): string => {
  if (!isString(TittleFromRequest)) {
    throw new Error('EL titulo de la publicacion no es valido')
  }
  return TittleFromRequest
}

export const parseDescription = (DescriptionFromRequest: any): string => {
  if (!isString(DescriptionFromRequest)) { 
    throw new Error('La description entregada no es valida')
  }
  return DescriptionFromRequest
}


export const parseUserRut = (UserRutRequest: any): string => {
  const resultado = isRutUsuario(UserRutRequest)
  console.log(resultado)
  if (!isString(UserRutRequest) || !resultado) {
    console.log("BBBBBBBBBBBBBBBBB")
    throw new Error('EL rut es incorrecto')
  }
  return UserRutRequest
}


export const parseIdProducto = (IdProductoRequest: any): string => {
  const resultado = isIdProducto(IdProductoRequest)
  console.log(resultado)
  if (!isString(IdProductoRequest) || !resultado) {
    console.log("AAAAAAAAAAAAAAAAA")
    throw new Error('El id del producto es incorrecto')
  }
  return IdProductoRequest
}

export const isRutUsuario = async (param: any): Promise<boolean> => {
  const RutUsuario = await usuario.findByPk(param).then((resultado: any) => {
    if (resultado == null) {
      return false;
    }
    return resultado instanceof usuario
  })
  return RutUsuario
}
  

export const isIdProducto = async (param: any): Promise<boolean> => {
  const IdProducto = await producto.findByPk(param).then((resultado: any) => {
    if (resultado == null) {
      return false;
    }
    return resultado instanceof producto
  })
  return IdProducto
}

//const project = await ProjefindByPk(param);
//if (project === null) {
  //console.log('Not found!');
//} else {
  //console.log(project instanceof Project); // true
  // Its primary key is 123
//}


export const isState = (param: any): boolean => {
  return Object.values(EnumState).includes(param)
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}

export const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}