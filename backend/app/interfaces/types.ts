export interface AdminInterface {
  idAdmin: string
  nombreAdmin: string
  contrasenaAdmin: string
}

export interface GestionInterface {
  idGestion: string
  tituloGestion: string
  descripcionGestion: string
  idAdmin: string
  idPublicacion: string
}

export interface PublicacionInterface {
  idPublicacion: string
  rutUsuario: string
  idProducto: string
  fotoPublicacion: string
  precioPublicacion: number
  estadoPublicacion: EstadosPublicacion
  tituloPublicacion: string
  descripcionPublicacion: string
}

//export type PublicacionInterface = Omit<PublicacionXUserXProductoInterface, 'userRut' | 'idProducto'>
//export type PublicacionInterface = Pick<PublicacionXUserXProductoInterface, 'idPublicacion' | 'photo'|  'price'|  'state' |  'title' | 'description' >


export enum EstadosPublicacion {
  Malo = 'Malo',
  MedianamenteMalo = 'Medianamente malo',
  Intermedio = 'Intermedio',
  MedianamenteBueno = 'Medianamente bueno',
  Buena = 'Bueno',
}

export interface UserInterface {
  rutUsuario: string
  nombreUsuario: string
  correoUsuario: string
  contrasenaUsuario: string
  direccionUsuario: string
}

export interface SeccionInterface {
  idSeccion: string
  nombreSeccion: string
  idProducto: string
  idMarket: string
}

//export type SeccionInterface = Omit<SeccionXProductoXMarketInterface, 'idProducto' | 'idMarket'>

export interface ProductInterface {
  idProducto: string
  productName: string
  brand: string
  type: TypeProduct
}

export enum TypeProduct {
  Alimento = 'Alimento',
  Limpieza = 'Limpieza',
  Higiene = 'Higiene',
  Alcohol = 'Alcohol'
}

export interface MarketInterface {
  idMarket: string
  nameMarket: NameMarket
  addressMarket: string
}

export enum NameMarket {
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
