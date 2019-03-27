module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
      projectName: {
          type: DataTypes.STRING,
      },
      role: {
          type: DataTypes.STRING,
      },
      description: {
          type: DataTypes.TEXT,
      }
  });

  Project.associate = function(models) {
    // We're saying that a Project should belong to an Author
    // A Project can't be created without an Author due to the foreign key constraint
    Project.belongsTo(models.User);
  };
  
    return Project;
  };
  