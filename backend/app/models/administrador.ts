import { Model } from 'sequelize'

import { AdminInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Administrador extends Model<AdminInterface>
    implements AdminInterface {
    idAdmin!: string
    adminName!: string
    adminPassword!: string
    static associate (models: any) {
      Administrador.hasMany(models.Gestion, {
        foreignKey: 'idAdmin',
        foreignKeyConstraint: true
      })
    }
  }
  Administrador.init({
    idAdmin: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    adminName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    adminPassword: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Administrador'
  })
  return Administrador
}
