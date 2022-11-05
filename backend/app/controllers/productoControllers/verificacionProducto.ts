import { TypeProduct } from '../../interfaces/types'

export const parseProductName = (productNameRequest: any): string => {
  if (!isString(productNameRequest)) {
    throw new Error('Error en el nombre del producto')
  }
  return productNameRequest
}

export const parseBrand = (brandRequest: any): string => {
  if (!isString(brandRequest)) {
    throw new Error('Error en la marca del producto')
  }
  return brandRequest
}

export const parseType = (typeRequest: any): TypeProduct => {
  if (!isString(typeRequest) || !isTypeProduct(typeRequest)) {
    throw new Error('Error en la marca del producto')
  }
  return typeRequest
}

export const isTypeProduct = (param: any): boolean => {
  return Object.values(TypeProduct).includes(param)
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}