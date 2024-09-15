module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_restaurant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Fait référence au modèle User
        key: 'id',
      },
    },
  }, {
    timestamps: false,
  });

  Category.associate = function(models) {
    Category.belongsTo(models.User, {
      foreignKey: 'id_restaurant',
      as: 'restaurant',
    });
    Category.hasMany(models.Menu, {
      foreignKey: 'id_category',
      as: 'menus',
    });
  };

  return Category;
};
