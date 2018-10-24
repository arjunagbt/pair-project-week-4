'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectUser = sequelize.define('ProjectUser', {
    funder_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    nominal: DataTypes.INTEGER
  }, {});
  ProjectUser.associate = function(models) {
    // associations can be defined here
  };
  return ProjectUser;
};