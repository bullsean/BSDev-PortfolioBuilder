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
    // Associating User with other Models
    // When a User is deleted, also delete any associated Model
    User.hasMany(models.Experience, {
        onDelete: "cascade"
    });

    User.hasOne(models.ProfileName, {
        onDelete: "cascade"
    });

    User.hasMany(models.Licert, {
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

    User.hasOne(models.ConnectLink, {
        onDelete: "cascade"
    });
}
    return User;
};
