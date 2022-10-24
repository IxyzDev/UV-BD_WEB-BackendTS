import { Model } from 'sequelize'

import { ProductInterface, Type } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Producto extends Model <ProductInterface>
    implements ProductInterface {
    idProducto!: string
    productName!: string
    brand!: string
    type!: Type

    static associate (models: any) {
      Producto.hasMany(models.Publicacion, {
        foreignKey: 'idProducto',
        foreignKeyConstraint: true
      })
      Producto.hasMany(models.Seccion, {
        foreignKey: 'idProducto',
        foreignKeyConstraint: true
      })
    }
  }
  Producto.init({
    idProducto: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    productName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    brand: {
      allowNull: false,
      type: DataTypes.STRING
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Producto'
  })
  return Producto
}
