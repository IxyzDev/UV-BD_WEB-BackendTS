import { newDiaryEntry, Visibility, Weather } from "../interfaces/types";

const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) { //typeof commentFromRequest != 'string'
        throw new Error('Error en el comentario')
    }
    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Ta malita la fecha')
    }
    return dateFromRequest
    
} 

const parseWeather = (weatherFromRequest: any): Weather => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('MAL CLIMA PAPITO')
    }
    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error ('Visibilidad mala')
    }

    return visibilityFromRequest
}

const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param)
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param)
}

const isString = (string: string): boolean => {
    return typeof string == 'string'
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
    const newEntry: newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }

    return newEntry
}
export default toNewDiaryEntry