import {Model}  from 'sequelize';
import { UserInterface } from '../interfaces/types';

module.exports = (sequelize: any, DataTypes: any) => {
  class Usuario extends Model<UserInterface> 
  implements UserInterface {
    userRut!: number;
    userName!: string;
    userEmail!: string;
    userPassword!: string;
    userAddress!: string;
    
    static associate(models: any) {
      Usuario.hasMany(models.Publicacion)
    }
  }
  Usuario.init({
    userRut: {
      type: DataTypes.INTEGER,
      unique: true,
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
        type: DataTypes.STRING,
        unique: true
    }
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};