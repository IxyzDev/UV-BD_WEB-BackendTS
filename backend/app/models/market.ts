import { Model } from 'sequelize'

import { MarketInterface, NameMarket } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Market extends Model <MarketInterface>
    implements MarketInterface {
    idMarket!: string
    nameMarket!: NameMarket
    addressMarket!: string
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
    nameMarket: {
      allowNull: false,
      type: DataTypes.STRING
    },
    addressMarket: {
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
