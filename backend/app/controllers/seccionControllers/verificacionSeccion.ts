import { EnumState } from '../../interfaces/types'
import db from '../../models'
const market = db.Market
const producto = db.Producto

export const parseNombreSeccion = (NombreSeccionRequest: any): string => {
    if (!isString(NombreSeccionRequest)) {
        throw new Error('Error en el nombre de la seccion')
    }
    return NombreSeccionRequest
}

export const parseDescription = (DescriptionFromRequest: any): string => {
    if (!isString(DescriptionFromRequest)) {
        throw new Error('La description entregada no es valida')
    }
    return DescriptionFromRequest
}


export const parseIdMarket = (IdMarketRequest: any): string => {
    if (!isString(IdMarketRequest)) {
        throw new Error('EL identificador de mercado es incorrecto')
    }
    return IdMarketRequest
}


export const parseIdProducto = (IdProductoRequest: any): string => {
    if (!isString(IdProductoRequest)) {
        throw new Error('El id del producto es incorrecto')
    }
    return IdProductoRequest
}

export const isIdMarket = async (param: any): Promise<boolean> => {
    const isIdMarket = await market.findByPk(param).then((resultado: any) => {
        if (resultado == null) {
            return false;
        }
        return resultado instanceof market
    })
    return isIdMarket
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