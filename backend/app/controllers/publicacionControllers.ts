import db from '../models';
import {PublicacionInterface} from '../interfaces/types'
import  * as v  from '../controllers/Verificacion'
import { v4 as uuidv4 } from 'uuid';


const publicacion = db.Publicacion

export const getEntries = async (): Promise<PublicacionInterface[]> => {
    const publicaciones = await publicacion.findAll({where: {}})
    return publicaciones
}

export const postPublicacion = (object: any): PublicacionInterface => {
    const newEntry: PublicacionInterface = {
        idPublicacion: uuidv4(),
        photo: v.parsePhoto(object.photo),
        price: v.parsePrice(object.price),
        state: v.parseState(object.state),
        title: v.parseTittle(object.title),
        description: v.parseDescription(object.description),
    }

    return newEntry
}