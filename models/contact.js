module.exports = function (sequelize, DataTypes) {
    var ContactLinks = sequelize.define("ContactLinks", {
        facebook: {
            type: DataTypes.STRING,
        },
        instagram: {
            type: DataTypes.STRING,
        },
        linkedIn: {
            type: DataTypes.STRING,
        },
        github: {
            type: DataTypes.STRING,
        },
    });

    ContactLinks.associate = function(models) {
        // We're saying that a ContactLinks should belong to an Author
        // A ContactLinks can't be created without an Author due to the foreign key constraint
        ContactLinks.belongsTo(models.User);
      };

    return ContactLinks;
};