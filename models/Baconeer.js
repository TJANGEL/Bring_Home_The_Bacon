module.exports = function(sequelize, DataTypes) {
  var Baconeer = sequelize.define("Baconeer", {
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 55]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 36]
      }
    }
  });

  

  return Baconeer;
};