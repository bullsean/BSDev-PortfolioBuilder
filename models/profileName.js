module.exports = function (sequelize, DataTypes) {
    var ProfileName = sequelize.define("ProfileName", {
        profileFirstName: {
            type: DataTypes.STRING,
        },
        profileLastName: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
        }
    });

    ProfileName.associate = function(models) {
        // We're saying that a ProfileName should belong to an Author
        // A ProfileName can't be created without an Author due to the foreign key constraint
        ProfileName.belongsTo(models.User);
      };

    return ProfileName;
};