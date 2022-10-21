import express, { Request, Response } from 'express'
import * as pc from '../controllers/productoControllers/productosControllers';
import db from '../models'

const router = express.Router()

router.get('/read', async (_req: Request, res: Response) => {
  try {
    const productoses = await pc.getproductos()
    return res.json(productoses)
  } catch (error) {
    return res.json({ msg: 'Error al mostrar las productoses' })
  }
})

router.post('/create', async (req: Request, res: Response) => {
  try {
    const newproductosEntry = pc.postproductos({ ...req.body })

    const record = db.productos.create(newproductosEntry)
    // res.json(newproductosEntry)
    return res.json({ record, msg: 'Bien' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al crear una nueva productos' })
  }
})

export default router