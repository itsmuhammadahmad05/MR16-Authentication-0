import { DataTypes} from "sequelize";
import sequelize from "../DB/config.js";

const userModel = sequelize.define(
    'User',
    {
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    },
    {
        timestamps: false
    },
);

export default userModel;
