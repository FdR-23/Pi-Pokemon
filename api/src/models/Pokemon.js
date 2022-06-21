const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER, // identificador único universal, lo uso para que no se choquen los id de db y la api.
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(500),

      defaultValue: "https://www.models-resource.com/resources/big_icons/5/4247.png"
    },
    hp: {
      type: DataTypes.INTEGER,
    },
    attack: {
      type: DataTypes.INTEGER
    },

    defense: {
      type: DataTypes.INTEGER,

    },

    speed: {
      type: DataTypes.INTEGER
    },

    weight: {
      type: DataTypes.INTEGER
    },

    height: {
      type: DataTypes.INTEGER,

    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  });
};
