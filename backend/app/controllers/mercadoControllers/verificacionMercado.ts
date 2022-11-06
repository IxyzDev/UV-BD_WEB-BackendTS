import { NombresMercado } from "../../interfaces/types"

export const parseNombreMercado = (NombreMercadoFromRequest: any): NombresMercado => {
  if (!isString(NombreMercadoFromRequest) || !isNombreMercadoFrom(NombreMercadoFromRequest)) {
    throw new Error('Error en el nombre del mercado')
  }
  return NombreMercadoFromRequest
}

export const isNombreMercadoFrom = (param: any): boolean => {
  return Object.values(NombresMercado).includes(param)
}

//https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos
export const parseDireccionMercado = (DireccionMercadoFromRequest: any): string => {
  if (!isString(DireccionMercadoFromRequest)) {
    throw new Error('La direccion del mercado no es correcta')
  }
  return DireccionMercadoFromRequest
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}
