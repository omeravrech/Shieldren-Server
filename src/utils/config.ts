import * as dotenv from 'dotenv';

dotenv.config();

export default {
    databaseConfiguration: {
        host: process.env.DB_SERVER_ADDRESS,
        port: process.env.DB_SERVER_PORT,
        username: process.env.DB_SERVER_USER,
        password: process.env.DB_SERVER_PASS
    }
}