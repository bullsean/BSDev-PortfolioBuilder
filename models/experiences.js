module.exports = function (sequelize, DataTypes) {
    var Experience = sequelize.define("Experience", {
      comJectName: {
          type: DataTypes.STRING,
      },
      titleRole: {
          type: DataTypes.STRING,
      },
      description: {
          type: DataTypes.TEXT,
      }
  });

  Experience.associate = function(models) {
    // We're saying that a Project should belong to a User
    // A Project can't be created without a User due to the foreign key constraint
    Experience.belongsTo(models.User);
  };
  
    return Experience;
  };
  