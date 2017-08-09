module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    price: {
      type: DataTypes.FLOAT(10,2),
      validate: {
        isDecimal: true 
      }
    }
  });

  Listing.associate = function(db) {
    // We're saying that a Listing should belong to a User
    // A Listing can't be created without a User due to the foreign key constraint
    Listing.belongsTo(db.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  Listing.associate = function(db) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Listing.hasMany(db.Images, {
      onDelete: "cascade"
    });
  };

  return Listing;
};

 