import {Model}  from 'sequelize';

import {PublicationInterface, EnumState} from '../interfaces/types';

module.exports = (sequelize: any, DataTypes: any) => {
  class Publicacion extends Model<PublicationInterface>
  implements PublicationInterface {
    idPublication!: number;
    photo!: string;
    price!: number;
    state!: EnumState;
    title!: string;
    description!: string;


    static associate(models: any) {
      // Publicacion.belongsTo(models.Usuario)
      Publicacion.hasMany(models.Gestion)
    }
  }
  Publicacion.init({
    idPublication: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
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
      //Atributo de tipo enum declarado en la interfaz
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Publicacion',
  });
  return Publicacion;
};