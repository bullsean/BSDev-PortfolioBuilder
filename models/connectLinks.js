module.exports = function (sequelize, DataTypes) {
    var ConnectLink = sequelize.define("ConnectLink", {
        facebook: {
            type: DataTypes.STRING,
        },
        linkedin: {
            type: DataTypes.STRING,
        },
        github: {
            type: DataTypes.STRING,
        },
        instagram: {
            type: DataTypes.STRING,
        }
    });

    ConnectLink.associate = function(models) {
        // We're saying that a ContactLink should belong to a User
        // A ContactLink can't be created without a User due to the foreign key constraint
        ConnectLink.belongsTo(models.User);
      };

    return ConnectLink;
};