export interface AdminInterface {
  idAdmin: string
  adminPassword: string
}

export interface UserInterface {
  userRut: string, // number or string?
  userName: string
  userEmail: string
  userPassword: string
  userAddress: string
}

export interface PublicacionInterface {
  idPublicacion: string
  photo: string
  price: number
  state: EnumState
  title: string
  description: string
}

export type newPublicacionEntry = Omit<PublicacionInterface, 'idPublicacion'>

export interface GestionInterface {
  idGestion: string
  descripcionGestion: string
}

export interface SeccionInterface {
  idSeccion: string
}

export enum EnumState {
  Malo = 'malo',
  MedianamenteMalo = 'medio malo',
  Intermedio = 'intermedio',
  MedianamenteBueno = 'medio bueno',
  Buena = 'bueno',

}

export interface ProductInterface {
  idProducto: string
  productName: string
  brand: string
  type: Type
}

export enum Type {
  Alimento = 'Alimento',
  Limpieza = 'Limpieza',
  Higiene = 'Higiene',
  Alcohol = 'Alcohol'
}

export interface MarketInterface {
  idMarket: string
  marketName: MarketName
  marketAddress: string
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
