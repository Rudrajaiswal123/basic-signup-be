import { Model } from 'sequelize';
export default async (sequelize, DataTypes) => {
    class Vinay extends Model {
        static associate(models) {
        }
    };
    Vinay.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Vinay'
    });
    return Vinay;
};