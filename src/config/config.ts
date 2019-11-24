import { config } from 'dotenv';

export class Config {
    private static instance: Config;

    private constructor() {
        config();
    }
    static initialConfig() {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }

    getConfig() {
        return {
            appPort: process.env.APP_PORT,
            env: process.env.ENV,

            dbPort: Number(process.env.DB_PORT),
            dbHost: process.env.DB_HOST,
            dbUser: process.env.DB_USER,
            dbPass: process.env.DB_PASS,
            dbName: process.env.DB_NAME,
            dbType: process.env.DB_TYPE
        }
    }
}