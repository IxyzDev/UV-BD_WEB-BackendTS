import {Model}  from 'sequelize';

import {GestionInterface} from '../interfaces/types';

module.exports = (sequelize: any, DataTypes: any) => {
   class Gestion extends Model <GestionInterface> 
   implements GestionInterface {
    idGestion!: string
    descripcionGestion!: string
    static associate(models: any) {
      Gestion.belongsTo(models.Publicacion)
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
    
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Gestion',
  },
);
  return Gestion;
};