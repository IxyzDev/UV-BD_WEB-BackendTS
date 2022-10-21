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
      Usuario.hasMany(models.Publicacion)
    }
  }
  Usuario.init({
    userRut: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING
    },
    userEmail: {
      type: DataTypes.STRING
    },
    userPassword: {
      type: DataTypes.STRING
    },
    userAddress: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Usuario'
  })
  return Usuario
}
