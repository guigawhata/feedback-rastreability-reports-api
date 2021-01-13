import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const Lote = sequelize.define(
    'Lote',
    {
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        numero: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    },
    {
        tableName: 'tb_lote',
    },
);

export default Lote;
