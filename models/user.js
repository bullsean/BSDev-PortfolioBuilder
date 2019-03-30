module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    uid: {
        type: DataTypes.STRING
    }
});

User.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Experience, {
        onDelete: "cascade"
    });

    User.hasOne(models.ProfileName, {
        onDelete: "cascade"
    });

    User.hasMany(models.Licert, {
        onDelete: "cascade"
    });

    User.hasOne(models.ConnectLinks, {
        onDelete: "cascade"
    });

    User.hasMany(models.Education, {
        onDelete: "cascade"
    });

    User.hasMany(models.Skaccom, {
        onDelete: "cascade"
    });

    User.hasOne(models.ProfileImage, {
        onDelete: "cascade"
    });
}
    return User;
};
