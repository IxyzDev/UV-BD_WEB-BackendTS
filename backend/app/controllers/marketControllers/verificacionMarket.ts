import { NameMarket } from "../../interfaces/types"

export const parseNameMarket = (NameMarketRequest: any): NameMarket => {
  if (!isString(NameMarketRequest) || !isNameMarket(NameMarketRequest)) {
    throw new Error('Error en el nombre del mercado')
  }
  return NameMarketRequest
}

export const isNameMarket = (param: any): boolean => {
  return Object.values(NameMarket).includes(param)
}

//https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos
export const parseAddressMarket = (AddressMarketFromRequest: any): string => {
  if (!isString(AddressMarketFromRequest)) {
    throw new Error('La direccion del mercado no es correcta')
  }
  return AddressMarketFromRequest
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}
