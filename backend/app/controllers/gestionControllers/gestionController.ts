import db from '../../models';
import { GestionXPublicacionXAdminInterface } from '../../interfaces/types';
import { v4 as uuidv4 } from 'uuid';
import * as v from "./verificacionGestion";

const gestion = db.Gestion;

export const getGestiones = async (): Promise<GestionXPublicacionXAdminInterface[]> => {
  const gestiones = await gestion.findAll({ where: {} });
  return gestiones;
}

export const VerifNewGestion =  async (param: any): Promise<boolean> => {
  console.log(param)
  const verifIdAdmin = await v.isIdAdmin(param.idAdmin);
  const verifIdPublicacion = await v.isIdPublicacion(param.idPublicacion)
  console.log(verifIdAdmin)
  console.log(verifIdPublicacion)
  if (!verifIdAdmin) {
    throw new Error("El identificador del administrador es incorrecto")
  }
  if (!verifIdPublicacion) {
    throw new Error("El identificador de la publicion es incorrecto")
  }
  return true
}

export const postgestion = (object: any): GestionXPublicacionXAdminInterface  => {
  const newEntry: GestionXPublicacionXAdminInterface = {
    idGestion: uuidv4(),
    descripcionGestion: v.parseDescripcionGestion(object.descripcionGestion),
    idPublicacion: v.parseIdPublicacion(object.idPublicacion),
    idAdmin: v.parseIdAdmin(object.idAdmin)
  }
  return newEntry
}