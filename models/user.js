'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.TEXT,
    full_name: DataTypes.STRING,
    balance: DataTypes.BIGINT
  }, {});
  User.associate = function (models) {
    User.belongsToMany(models.Project, { through: models.ProjectUser, foreignKey: 'funder_id', otherKey: 'project_id' })
  };
  return User;
};