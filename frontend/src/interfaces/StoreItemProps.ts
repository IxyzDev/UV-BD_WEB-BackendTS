
export interface StoreItemProps {
  id: number
  name: string
  description: string;
  state: string;
  price: number
  imgUrl: string
}
export type StoreItemPropsCard = Omit<StoreItemProps, 'description' | 'state'>
export type StoreItemsProps = Omit<StoreItemProps, "name" | "description" | "state" | "price" >

export type CartItemProps = {
  id: number
  quantity: number
}

export type StoreItemPropsFromApi = Array <{
  id: number
  idPublicacion: string
  idProducto: string
  fotoPublicacion: string
  precioPublicacion: number
  estadoPublicacion: string
  tituloPublicacion: string
  descripcionPublicacion: string
}>
