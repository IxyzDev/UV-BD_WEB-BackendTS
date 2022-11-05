import { Model } from 'sequelize'
import { UserInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Usuario extends Model<UserInterface>
    implements UserInterface {
    userRut!: string
    userName!: string
    userEmail!: string
    userPassword!: string
    userAddress!: string

    static associate (models: any) {
      Usuario.hasMany(models.Publicacion, {
        foreignKey: 'userRut',
        foreignKeyConstraint: true
      })
    }
  }
  Usuario.init({
    userRut: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userAddress: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Usuario'
  })
  return Usuario
}
