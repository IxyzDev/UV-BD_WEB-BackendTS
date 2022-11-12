import db from '../../models'
import { ProductInterface } from '../../interfaces/types'
import { v4 as uuidv4 } from 'uuid'
import * as v from "./verificacionProducto"

const producto = db.Producto

export const getProductos = async (): Promise<ProductInterface[]> => {
  const productos = await producto.findAll({ where: {}})
  return productos
}

// 
export const getAllProductosByMercado = async (_object: any) => {
  const productosByMercado = await producto.findAll({
    attributes: ["nombreProducto"]

  })

  return productosByMercado
}


export const getAllProductosById = async (object: any): Promise<ProductInterface[]> => {
  const productos = await producto.findAll({ where: { idPRoducto: object } });
  return productos
}

export const postProducto = (object: any):  ProductInterface => {
  const newEntry:  ProductInterface = {
  idProducto: uuidv4(),
  nombreProducto: v.parseNombreProducto(object.nombreProducto),
  marcaProducto: v.parseMarcaProducto(object.marcaProducto),
  tipoProducto: v.parseTipoProducto(object.tipoProducto),
  }

  return newEntry
}