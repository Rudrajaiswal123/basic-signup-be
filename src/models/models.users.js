import { Model } from 'sequelize';
export default async (sequelize, DataTypes) => {
    class Users extends Model {
        static associate(models) {
        }
    };
    Users.init({
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
        modelName: 'Users'
    });
    return Users;
};