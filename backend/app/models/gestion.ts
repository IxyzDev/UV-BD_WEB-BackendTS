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
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    descripcionGestion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Gestion',
  });
  return Gestion;
};