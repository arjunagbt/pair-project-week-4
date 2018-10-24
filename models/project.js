'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    owner_id: DataTypes.INTEGER,
    nominal: DataTypes.INTEGER,
    amount_paid: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    Project.belongsTo(models.User, { foreignKey: 'owner_id', targetKey: 'id'})
    Project.belongsToMany(models.User, { through: models.ProjectUser, foreignKey: 'project_id', otherKey: 'funder_id' })
  };
  return Project;
};