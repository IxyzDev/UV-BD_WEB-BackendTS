import { Model } from 'sequelize'

import { MarketInterface, MarketName } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Market extends Model <MarketInterface>
    implements MarketInterface {
    idMarket!: string
    marketName!: MarketName
    marketAddress!: string
    static associate (models: any) {
      Market.hasMany(models.Seccion, {
        foreignKey: 'idMarket',
        foreignKeyConstraint: true
      })
    }
  }
  Market.init({
    idMarket: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
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
    timestamps: false,
    modelName: 'Market'
  })
  return Market
}
