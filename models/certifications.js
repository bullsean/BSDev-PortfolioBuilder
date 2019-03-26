module.exports = function (sequelize, DataTypes) {
    var Certifications = sequelize.define("Certifications", {
      nameOfCert: {
          type: DataTypes.STRING,
      }
  });

  Certifications.associate = function(models) {
    // We're saying that a Certifications should belong to an Author
    // A Certifications can't be created without an Author due to the foreign key constraint
    Certifications.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
    return Certifications;
  };
  