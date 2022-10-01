import {Model} from 'sequelize';

import {MarketInterface, MarketName} from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Market extends Model <MarketInterface> 
    implements MarketInterface{
      idMarket!: number
      marketName!: MarketName
      marketAddress!: string
    static associate(models: any) {
      Market.hasMany(models.Seccion)
    }
  }
  Market.init({
    idMarket: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    marketName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    marketAddress: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Market',
  });
  return Market;
};