import { Model } from 'sequelize'

import { PublicacionXUserXProductoInterface, EnumState } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Publicacion extends Model<PublicacionXUserXProductoInterface>
    implements PublicacionXUserXProductoInterface {
    idPublicacion!: string
    photo!: string
    price!: number
    state!: EnumState
    title!: string
    description!: string
    userRut!: string
    idProducto!: string

    static associate (models: any) {
      // Publicacion.belongsTo(models.Usuario)
      Publicacion.hasMany(models.Gestion, {
        foreignKey: 'idPublicacion',
        foreignKeyConstraint: true
      })
    }
  }
  Publicacion.init({
    idPublicacion: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      // Atributo de tipo enum declarado en la interfaz
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    // Foreign keys
    userRut: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idProducto: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Publicacion'
  })
  return Publicacion
}
