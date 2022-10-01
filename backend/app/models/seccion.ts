import {Model} from 'sequelize';

import {SeccionInterface} from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Seccion extends Model <SeccionInterface> 
  implements SeccionInterface{
    idSeccion!: number
    static associate(models: any) {
      Seccion.belongsTo(models.Producto)
    }
  }
  Seccion.init({
    idSeccion: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Seccion',
  });
  return Seccion;
};