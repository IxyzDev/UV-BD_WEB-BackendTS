export interface AdminInterface {
  idAdmin: string
  adminPassword: string
}

export interface UserInterface {
  userRut: string // number or string?
  userName: string
  userEmail: string
  userPassword: string
  userAddress: string
}

export interface PublicacionXUserXProductoInterface {
  idPublicacion: string
  photo: string
  price: number
  state: EnumState
  title: string
  description: string
  userRut: string
  idProducto: string
}

export type PublicacionInterface = Omit<PublicacionXUserXProductoInterface, 'userRut' | 'idProducto'>
//export type PublicacionInterface = Pick<PublicacionXUserXProductoInterface, 'idPublicacion' | 'photo'|  'price'|  'state' |  'title' | 'description' >

export interface GestionXPublicacionXAdminInterface {
  idGestion: string
  descripcionGestion: string
  idPublicacion: string
  idAdmin: string
}

export type GestionInterface = Omit<GestionXPublicacionXAdminInterface, 'idPublicacion' | 'idAdmin'>


export interface SeccionXProductoXMarketInterface {
  idSeccion: string
  nombre: string
  idProducto: string
  idMarket: string
}

export type SeccionInterface = Omit<SeccionXProductoXMarketInterface, 'idProducto' | 'idMarket'>

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
