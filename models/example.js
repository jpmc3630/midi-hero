module.exports = function(sequelize, DataTypes) {
  var Highscores = sequelize.define("Highscores", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    levelid: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    score: DataTypes.INTEGER
  });
  return Highscores;
};