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
        // We're saying that a ContactLinks should belong to an Author
        // A ContactLinks can't be created without an Author due to the foreign key constraint
        ConnectLink.belongsTo(models.User);
      };

    return ConnectLink;
};