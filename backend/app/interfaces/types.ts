export interface AdminAttributes {
  idAdmin: number,
  adminPassword: string
}

export interface User {
  rut: number, //number or string?
  name: string,
  email: string,
  userPassword: string,
  userAddress: string
}

export interface Publication {
  idPublication: number,
  photo: string,
  price: number,
  state: State,
  title: string,
  description: string,
  userRut: number
}

export type PublicationWithoutUserRut = Omit<Publication, 'userRut'>

export enum State {
  Malo = 'malo',
  MedianamenteMalo = 'medio malo',
  Intermedio = 'intermedio',
  MedianamenteBueno = 'medio bueno',
  Buena = 'bueno',

}

export interface Product {
  idProducto: number,
  productName: string,
  brand: string,
  type: Type,
}

export enum Type {
  Alimento = 'Alimento',
  Limpieza = 'Limpieza',
  Higiene = 'Higiene',
  Alcohol = 'Alcohol'
}

export interface Market {
  marketName: MarketName,
  marketAddress: string,
}

export enum MarketName {
  SantaIsabel = 'Santa Isabel',
  Lider = 'Lider',
  Tottus = 'Tottus',
  Unimarc = 'Unimarc',
  Acuenta = 'Acuenta'
}

// Tutorial

export enum Weather {
  A = 'a',
  B = 'b',
  C = 'c',
}

export enum Visibility {
  Buena = 'buena',
  Mala = 'mala'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NoComment = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NoComment = Omit<DiaryEntry, 'comment'>

export type newDiaryEntry = Omit<DiaryEntry, 'id'>