module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, { timestamps: false, underscored: true } );

  sales.associate = (models) => {
    sales.belongsTo(models.users, { foreignKey: 'userId', as: 'customer' }),
    sales.belongsTo(models.users, { foreignKey: 'sellerId', as: 'seller' })
  }

  return sales;
};