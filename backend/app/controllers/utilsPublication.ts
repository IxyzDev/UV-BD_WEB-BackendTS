
import { PublicationWithoutUserRut } from "../interfaces/types"
import { getPosts } from "./publicationController"

const Publicacions: PublicationWithoutUserRut[] = getPosts as PublicationWithoutUserRut[]

export const parseID = (object: any): number => {
    const newID = {
        // id: diaries.length + 1
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }

    diaries.push(newEntry)
    return newID
}

export const addPublication = (newPublicationEntry: newPublicationEntry): PublicationEntry => {
    const newEntry = {
        // id: diaries.length + 1
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }

    diaries.push(newEntry)
    return newEntry
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
