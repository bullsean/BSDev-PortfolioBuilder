module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: {
        type: DataTypes.STRING,
        // validate: {
        //     isNull: false,
        //     len: [1]
        // }
    },
    lastName: {
        type: DataTypes.STRING,
        // validate: {
        //     isNull: false,
        //     len: [1]
        // }
    },
    password: {
        type: DataTypes.STRING,
        // validate: {
        //     isNull: false,
        //     len: [8]
        // }
    },
    email: {
        type: DataTypes.STRING,
        // validate: {
        //     isEmail: true
        // }
    },
});

User.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Project, {
        onDelete: "cascade"
    });

    User.hasOne(models.ProfileName, {
        onDelete: "cascade"
    });

    User.hasMany(models.Certifications, {
        onDelete: "cascade"
    });

    User.hasOne(models.ContactLinks, {
        onDelete: "cascade"
    });

    User.hasMany(models.Education, {
        onDelete: "cascade"
    });

    User.hasMany(models.Skills, {
        onDelete: "cascade"
    });
};

  return User;
};
