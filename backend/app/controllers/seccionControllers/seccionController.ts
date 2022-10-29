import db from '../../models';
import { SeccionXProductoXMarketInterface } from '../../interfaces/types';
import { v4 as uuidv4 } from 'uuid';
import * as v from "./verificacionSeccion";

const Seccion = db.Seccion;

export const getSecciones = async (): Promise<SeccionXProductoXMarketInterface[]> => {
  const Secciones = await Seccion.findAll({ where: {} });
  return Secciones;
}

export const VerifNewSeccion = async (param: any): Promise<boolean> => {
  const verifIdMarket = await v.isIdMarket(param.idMarket);
  const verifIdProducto = await v.isIdProducto(param.idProducto)
  if (!verifIdMarket) {
    throw new Error("El identificador del minimarket es incorrecto")
  }
  if (!verifIdProducto) {
    throw new Error("El identificador del producto es incorrecto")
  }
  return true
}

export const postSeccion = (object: any): SeccionXProductoXMarketInterface => {
  const newEntry: SeccionXProductoXMarketInterface = {
    idSeccion: uuidv4(),
    nombreSeccion: v.parseNombreSeccion(object.nombreSeccion),
    idProducto: v.parseIdProducto(object.idProducto),
    idMarket: v.parseIdMarket(object.idMarket)
  }
  return newEntry
}