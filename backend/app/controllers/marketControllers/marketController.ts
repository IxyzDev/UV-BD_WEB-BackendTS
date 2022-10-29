import db from '../../models'
import {  MarketInterface } from '../../interfaces/types'
import * as v from "./verificacionMarket"
import { v4 as uuidv4} from 'uuid'

const market = db.Market

export const getMarket = async (): Promise< MarketInterface[]> => {
    const markets = await market.findAll({ where: {} })
    console.log(markets)
    return markets
  }
  
  export const postMarket = (object: any):  MarketInterface => {
    const newEntry:  MarketInterface = {
      idMarket: uuidv4(),
      nameMarket: v.parseNameMarket(object.nameMarket),
      addressMarket: v.parseAddressMarket(object.addressMarket),
    }
  
    return newEntry
  }