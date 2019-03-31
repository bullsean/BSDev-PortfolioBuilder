module.exports = function (sequelize, DataTypes) {
    var Skaccom = sequelize.define("Skaccom", {
      skaccomName: {
          type: DataTypes.STRING,
      }
  });

  Skaccom.associate = function(models) {
    // We're saying that a Skills should belong to a User
    // A Skills can't be created without a User due to the foreign key constraint
    Skaccom.belongsTo(models.User);
  };
  
    return Skaccom;
  };
  