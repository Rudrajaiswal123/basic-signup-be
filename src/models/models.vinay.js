import { Model } from 'sequelize';
export default async (sequelize, DataTypes) => {
    class Vinay extends Model {
        static associate(models) {
            Vinay.belongsTo(models.Users, { foreignKey: 'user_id',onDelete: 'CASCADE', });
        }
    };
    Vinay.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_id : DataTypes.UUID,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Vinay'
    });
    return Vinay;
};