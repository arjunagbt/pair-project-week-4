'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectUser = sequelize.define('ProjectUser', {
    funder_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    nominal: DataTypes.INTEGER
  }, {});
  ProjectUser.associate = function(models) {
    ProjectUser.belongsTo(models.User, {foreignKey: 'funder_id', targetKey: 'id'})
    ProjectUser.belongsTo(models.Project, {foreignKey: 'project_id', targetKey: 'id'})
  };
  return ProjectUser;
};