import {DataTypes } from 'sequelize';
import sequelize from '../../DB/config.js';

const studentModel = sequelize.define(
    'student',
    {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
      // allowNull defaults to true
    },
    },
    {
    // Other model options go here
    },
);

// `sequelize.define` also returns the model
// console.log(studentModel === sequelize.models.student); // true

export default studentModel;