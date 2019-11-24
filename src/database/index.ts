import {createConnection} from "typeorm";
import { getConfig } from '../config';
import { User } from "../modules/users/entity/user.entity";

const dbConnection = createConnection({
    type: "postgres",
    host: getConfig().dbHost,
    port: getConfig().dbPort,
    username: getConfig().dbUser,
    password: getConfig().dbPass,
    database: getConfig().dbName,
    entities: [
        User
    ],
    synchronize: true,
    logging: false
});

export default dbConnection;