module.exports = function (sequelize, DataTypes) {
    var ConnectLinks = sequelize.define("ConnectLinks", {
        website: {
            type: DataTypes.STRING,
        },
        link: {
            type: DataTypes.STRING,
        }
    });

    ConnectLinks.associate = function(models) {
        // We're saying that a ContactLinks should belong to an Author
        // A ContactLinks can't be created without an Author due to the foreign key constraint
        ConnectLinks.belongsTo(models.User);
      };

    return ConnectLinks;
};