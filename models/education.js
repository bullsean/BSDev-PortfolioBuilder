module.exports = function (sequelize, DataTypes) {
    var Education = sequelize.define("Education", {
      institution: {
          type: DataTypes.STRING,
      },
      Degree: {
          type: DataTypes.STRING,
      }
  });

  Education.associate = function(models) {
    // We're saying that a Education should belong to an Author
    // A Education can't be created without an Author due to the foreign key constraint
    Education.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
    return Education;
  };
  