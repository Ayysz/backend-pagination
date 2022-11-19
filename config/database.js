import { Sequelize } from "sequelize";

const dB_config = {
    host: 'localhost',
    dialect: 'mysql',
};

const dB = new Sequelize('db_pagination', 'root', '', dB_config);

export default dB;