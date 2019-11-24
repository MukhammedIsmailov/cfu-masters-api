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
        }
    }
}