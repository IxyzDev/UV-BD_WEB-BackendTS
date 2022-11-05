import { Model } from 'sequelize'

import { SeccionXProductoXMarketInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Seccion extends Model <SeccionXProductoXMarketInterface>
    implements SeccionXProductoXMarketInterface {
    idSeccion!: string
    nombreSeccion!: string
    idProducto!: string
    idMarket!: string
    static associate (_models: any) {
      //Seccion.belongsTo(models.Producto)
    }
  }
  Seccion.init({
    idSeccion: {
      primaryKey: true,
      type: DataTypes.STRING,

      allowNull: false
    },
    nombreSeccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idProducto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idMarket: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Seccion'
  })
  return Seccion
}
