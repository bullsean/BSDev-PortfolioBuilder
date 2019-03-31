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
        // We're saying that a ProfileName should belong to a User
        // A ProfileName can't be created without a User due to the foreign key constraint
        ProfileName.belongsTo(models.User);
      };

    return ProfileName;
};