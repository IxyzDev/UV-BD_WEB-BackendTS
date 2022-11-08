import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
//import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import { useEffect, useState } from "react"

// Importacion de las interfaces
import { StoreItemPropsFromApi, CartItemProps, StoreItemProps } from "../interfaces/StoreItemProps";

// Interfaz 1
interface ItemState {
  itemsList: Array<StoreItemProps>
  newItem: number 
}

// EStado inicial
const [itemState, setItemState] = useState<ItemState["itemsList"]>([])

// Obtener las publicaciones a mostrar desde la base de datos
useEffect(() => {
  const fetchProps = (): Promise<StoreItemPropsFromApi> => {
    return fetch('http://localhost:3000/publicacion/read').then(res => res.json())
  }

// Mapear las respues del API
const mapFromApiStoreItemPropsFromApi = (apiResponse: StoreItemPropsFromApi): 
Array<StoreItemProps> => {
  return apiResponse.map(itemFromApi => {
    const {
    idPublicacion: idPublicacion,
    idProducto: idProducto,
    fotoPublicacion: imgUrl,
    precioPublicacion: price,
    estadoPublicacion: state,
    tituloPublicacion: name,
    descripcionPublicacion: description
    } = itemFromApi 

    // Retornamos las variables entrantes
    return {
      idPublicacion,
      idProducto,
      name,
      description,
      state,
      price,
      imgUrl,
    }
  })
}

fetchProps()
  .then(mapFromApiStoreItemPropsFromApi)
  .then(setItemState)

}, [])
 //patrocina,  toallitas femeninas , el buen policia,= no se te escapa un chorro. :) 
 // pd : mañana te llevo una dona con crema pastelera bañada en chocolate :) 
 // QUE RICOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
/**
useEffect(() => {
  fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(Base_de_datos => {
      console.log(Base_de_datos)
    })
}, [])
**/

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = setItemState.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}
