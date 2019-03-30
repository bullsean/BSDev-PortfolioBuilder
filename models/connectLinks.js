module.exports = function (sequelize, DataTypes) {
    var ConnectLinks = sequelize.define("ConnectLinks", {
        facebook: {
            type: DataTypes.STRING,
        },
        instagram: {
            type: DataTypes.STRING,
        },
        linkedin: {
            type: DataTypes.STRING,
        },
        github: {
            type: DataTypes.STRING,
        },
    });

    ConnectLinks.associate = function(models) {
        // We're saying that a ContactLinks should belong to an Author
        // A ContactLinks can't be created without an Author due to the foreign key constraint
        ConnectLinks.belongsTo(models.User);
      };

    return ConnectLinks;
};