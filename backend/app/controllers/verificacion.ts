import {EnumState} from "../interfaces/types";


export const parseState = (StateFromRequest: any): EnumState => {
    if (!isString(StateFromRequest) || !isState(StateFromRequest)) {
        throw new Error('En el estado')
    }
    return StateFromRequest
} 

export const parsePhoto = (PhotoFromRequest: any): string => {
    if (!isString(PhotoFromRequest)) { //typeof PhotoFromRequest != 'string'
        throw new Error('Error en la foto')
    }
    return PhotoFromRequest
}

export const parsePrice = (priceFromRequest: any): number => {
    if (!isNumber(priceFromRequest)) {
        throw new Error ('Numero erroneo')
    }

    return priceFromRequest
}

export const parseTittle = (TittleFromRequest: any): string => {
    if (!isString(TittleFromRequest)) { //typeof TittleFromRequest != 'string'
        throw new Error('Error en el titulo')
    }
    return TittleFromRequest
}

export const parseDescription = (DescriptionFromRequest: any): string => {
    if (!isString(DescriptionFromRequest)) { //typeof DescriptionFromRequest != 'string'
        throw new Error('Error la descripcion')
    }
    return DescriptionFromRequest
}

export const isState = (param: any): boolean => {
    return Object.values(EnumState).includes(param)
}

export const isString = (string: string): boolean => {
    return typeof string == 'string'
}

export const isNumber = (number: number): boolean => {
    return typeof number == 'number'
}

