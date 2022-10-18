import { Model } from 'sequelize'

import { SeccionInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Seccion extends Model <SeccionInterface>
    implements SeccionInterface {
    idSeccion!: string
    static associate (models: any) {
      Seccion.belongsTo(models.Producto)
    }
  }
  Seccion.init({
    idSeccion: {
      primaryKey: true,
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
