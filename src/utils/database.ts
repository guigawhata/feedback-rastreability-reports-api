import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'mssql',
    dialectOptions: {
        options: {
            validateBulkLoadParameters: true,
            trustedConnection: true,
        },
    },
    host: '192.168.1.176',
    database: 'dbfeeddev',
    username: 'sa',
    password: 'feed333',
});

export default sequelize;
