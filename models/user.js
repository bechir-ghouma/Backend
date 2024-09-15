module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    average_raiting: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    avaibility: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    vehicle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_restaurant: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'Client',
    },
  }, {
    timestamps: false  // Disable automatic timestamps
  });

  User.associate = function(models) {
    User.hasMany(models.Order, {
      foreignKey: 'client_id',
      as: 'clientOrders',
    });

    User.hasMany(models.Order, {
      foreignKey: 'restaurant_id',
      as: 'restaurantOrders',
    });

    User.hasMany(models.Order, {
      foreignKey: 'delivery_person_id',
      as: 'deliveryPersonOrders',
    });
    User.hasMany(models.Category, {
      foreignKey: 'id_restaurant',
      as: 'categories',
    });
  };

  return User;
};
