module.exports = function (sequelize, DataTypes) {
    var ProfileImage = sequelize.define("ProfileImage", {
        imageName: {
            type: DataTypes.STRING,
        }
    });

    ProfileImage.associate = function(models) {
        // We're saying that a ProfileName should belong to an Author
        // A ProfileName can't be created without an Author due to the foreign key constraint
        ProfileImage.belongsTo(models.User);
      };

    return ProfileImage;
};