import { DataTypes} from "sequelize";
import sequelize from "../../DB/config.js";

const tokenModel = sequelize.define(
    'Token',
    {
    token: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    },
    {
        timestamps: false
    },
);

export default tokenModel;
