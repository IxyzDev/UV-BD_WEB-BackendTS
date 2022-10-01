import {Model}  from 'sequelize';

import {AdminInterface} from '../interfaces/types';

module.exports = (sequelize: any, DataTypes: any) => {
  class Administrador extends Model<AdminInterface> 
  implements AdminInterface {
    idAdmin!: number;
    adminPassword!: string;
    static associate(models: any) {
      Administrador.hasMany(models.Gestion)
    }
  }
  Administrador.init({
    idAdmin: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    adminPassword: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Administrador',
  });
  return Administrador;
};