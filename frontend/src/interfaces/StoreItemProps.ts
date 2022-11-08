export interface StoreItemProps {
  Cantidad: number
  idPublicacion: string
  idProducto: string
  name: string
  description: string;
  state: string;
  price: number
  imgUrl: string
}

export type CartItemProps = {
  id: number
  quantity: number
}

export type StoreItemPropsFromApi = Array <{
  idPublicacion: string
  idProducto: string
  fotoPublicacion: string
  precioPublicacion: number
  estadoPublicacion: string
  tituloPublicacion: string
  descripcionPublicacion: string
}>