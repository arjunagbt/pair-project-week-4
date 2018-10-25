'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    nominal_needed: DataTypes.BIGINT,
    nominal_now: DataTypes.BIGINT,
    nominal_paid: DataTypes.BIGINT,
    owner_id: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    Project.belongsTo(models.User, { foreignKey: 'owner_id', targetKey: 'id'})
    Project.belongsToMany(models.User, { through: models.ProjectUser, foreignKey: 'project_id', otherKey: 'funder_id' })
  };
  Project.prototype.getPercent = function(){
    return `${((this.nominal_now/this.nominal_needed) * 100).toFixed(2)}% funded`
  }
  return Project;
};