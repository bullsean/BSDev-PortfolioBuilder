module.exports = function (sequelize, DataTypes) {
    var ProfileImage = sequelize.define("ProfileImage", {
        imageName: {
            type: DataTypes.STRING,
        }
    });

    ProfileImage.associate = function(models) {
        // We're saying that a ProfileName should belong to a User
        // A ProfileName can't be created without a User due to the foreign key constraint
        ProfileImage.belongsTo(models.User);
      };

    return ProfileImage;
};