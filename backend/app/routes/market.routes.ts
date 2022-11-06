import express, { Request, Response } from 'express'
import * as marketControllers from '../controllers/mercadoControllers/mercadoController';
import db from '../models'

const router = express.Router()

router.get('/read', async (_req: Request, res: Response) => {
    try {
        const markets = await marketControllers.getMarket()
        return res.json(markets)
    } catch (error) {
        return res.json({ msg: 'Error al mostrar los mercados disponibles' })
    }
})

router.post('/create', async (req: Request, res: Response) => {
    try {
        const newMarketEntry = marketControllers.postMarket({ ...req.body })

        const record = db.Market.create(newMarketEntry)

        return res.json({ record, msg: 'Mercado añadido correctamente' })
    } catch (error) {
        console.log(error)
        return res.json({error, msg: 'Error al momento de crear el mercado' })
    }
})

export default router