import express, { Request, Response } from 'express'
import * as productoController from '../controllers/productoControllers/productoController';
import db from '../models'

const router = express.Router()

router.get('/read', async (_req: Request, res: Response) => {
  try {
    const productos = await productoController.getProductos()
    return res.json(productos)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar los productos' })
  }
})

router.post('/create', async (req: Request, res: Response) => {
  try {
    const newProductosEntry = productoController.postProducto({ ...req.body })

    const record = db.Producto.create(newProductosEntry)

    return res.json({ record, msg: 'Ingreso de producto correcto' })
  } catch (error) {
    console.log(error)
    return res.json({ error, msg: 'Error al crear un nuevo producto' })
  }
})

export default router