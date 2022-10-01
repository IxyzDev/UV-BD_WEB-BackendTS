import {Model} from 'sequelize';

import {ProductInterface, Type} from '../interfaces/types';

module.exports = (sequelize: any, DataTypes: any) => {
  class Producto extends Model <ProductInterface> 
  implements ProductInterface {
    idProducto!: number
    productName!: string
    brand!: string
    type!: Type

    static associate(models: any) {
      Producto.hasMany(models.Publicacion)
    }
  }
  Producto.init({
    idProducto: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
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
    modelName: 'Producto',
  });
  return Producto;
};