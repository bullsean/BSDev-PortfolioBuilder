module.exports = function (sequelize, DataTypes) {
    var Skills = sequelize.define("Skills", {
      nameOfCert: {
          type: DataTypes.STRING,
      }
  });

  Skills.associate = function(models) {
    // We're saying that a Skills should belong to an Author
    // A Skills can't be created without an Author due to the foreign key constraint
    Skills.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
    return Skills;
  };
  