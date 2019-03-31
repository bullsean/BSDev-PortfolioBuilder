module.exports = function (sequelize, DataTypes) {
    var Education = sequelize.define("Education", {
      institution: {
          type: DataTypes.STRING,
      },
      degree: {
          type: DataTypes.STRING,
      }
  });

  Education.associate = function(models) {
    // We're saying that a Education should belong to a User
    // A Education can't be created without a User due to the foreign key constraint
    Education.belongsTo(models.User);
  };
  
    return Education;
  };
  