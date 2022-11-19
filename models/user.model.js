import { Sequelize} from "sequelize";
import dB from '../config/database.js';

const {DataTypes} = Sequelize;

const User = dB.define('user', {
    name: DataTypes.STRING(100),
    email: DataTypes.STRING,
    gender: DataTypes.ENUM('man', 'woman'),
}, 
{
    freezeTableName: true
}
);

export default User;

/* 
 * Self Invoking in javascript
 * Function who can run herself
 *  or i can say auto run function
 */
(async()=>{
    await dB.sync();
})();