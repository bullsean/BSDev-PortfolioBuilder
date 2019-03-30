module.exports = function (sequelize, DataTypes) {
    var Licert = sequelize.define("Licert", {
      licertName: {
          type: DataTypes.STRING,
      }
  });

  Licert.associate = function(models) {
    // We're saying that a Certifications should belong to an Author
    // A Certifications can't be created without an Author due to the foreign key constraint
    Licert.belongsTo(models.User);
  };
  
    return Licert;
  };
  