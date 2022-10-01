export interface AdminInterface {
  idAdmin: number,
  adminPassword: string
}

export interface UserInterface {
  userRut: number, //number or string?
  userName: string,
  userEmail: string,
  userPassword: string,
  userAddress: string
}

export interface PublicationInterface {
  idPublication: number,
  photo: string,
  price: number,
  state: EnumState,
  title: string,
  description: string,
}

export interface GestionInterface {
  idGestion: string,
  descripcionGestion: string
}

export interface SeccionInterface {
  idSeccion: number
}

export type PublicationWithoutUserRut = Omit<PublicationInterface, 'userRut'>

export enum EnumState {
  Malo = 'malo',
  MedianamenteMalo = 'medio malo',
  Intermedio = 'intermedio',
  MedianamenteBueno = 'medio bueno',
  Buena = 'bueno',

}

export interface ProductInterface {
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

export interface MarketInterface {
  idMarket: number,
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