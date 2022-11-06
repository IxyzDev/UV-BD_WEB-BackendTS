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
//export type SeccionInterface = Omit<SeccionXProductoXMercadoInterface, 'idProducto' | 'idMercado'>
export interface ProductInterface {
  idProducto: string
  nombreProducto: string
  marcaProducto: string
  tipoProducto: TiposProducto
}

export enum TiposProducto {
  Alimento = 'Alimento',
  Limpieza = 'Limpieza',
  Higiene = 'Higiene',
  Alcohol = 'Alcohol'
}

export interface SeccionInterface {
  idSeccion: string
  nombreSeccion: string
  idProducto: string
  idMercado: string
}


export interface MercadoInterface {
  idMercado: string
  nombreMercado: NombresMercado
  direccionMercado: string
}

export enum NombresMercado {
  SantaIsabel = 'Santa Isabel',
  Lider = 'Lider',
  Tottus = 'Tottus',
  Unimarc = 'Unimarc',
  Acuenta = 'Acuenta'
}