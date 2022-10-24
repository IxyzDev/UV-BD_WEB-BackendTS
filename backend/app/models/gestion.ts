import { Model } from 'sequelize'

import { GestionXPublicacionXAdminInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Gestion extends Model <GestionXPublicacionXAdminInterface>
    implements GestionXPublicacionXAdminInterface {
    idGestion!: string
    descripcionGestion!: string
    idPublicacion!: string
    idAdmin!: string
    
    
    static associate (_models: any) {
      //Gestion.belongsTo(models.Publicacion)
      // Gestion.hasMany(models.Administrador)
    }
  }
  Gestion.init({
    idGestion: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    descripcionGestion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    // foreign Key
    idPublicacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idAdmin: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    timestamps: false,
    modelName: 'Gestion'
  }
  )
  return Gestion
}
