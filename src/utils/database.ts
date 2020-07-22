import { createConnection, Connection, ConnectionOptions } from "typeorm";
import logger                           from "./logger";
import * as Entities                    from "../entities"; 
import config                           from "./config";

class DataBaseHandler {

    private connection:Connection | undefined;

    private constructor() {
        var { databaseConfiguration } = config;
        const _connectionProps:ConnectionOptions = {
            type: "mongodb",
            host: databaseConfiguration.host || "localhost",
            port: Number(databaseConfiguration.port) || 2222,
            username: databaseConfiguration.username || "test",
            password: databaseConfiguration.password || "test",
            ssl: false,
            database: "shieldren",
            entities: [
                Entities.User,
                Entities.Child
            ],
            synchronize: true,
            logging: false
        }
        logger.info(`Staring connection to ${_connectionProps.type}://${_connectionProps.host}:${_connectionProps.port}/${_connectionProps.database}`);

        createConnection(_connectionProps)
        .then((conn) => {
                this.connection = conn;
                logger.info("DB connection opened");
            }).catch(error => {
                logger.error(error);
                logger.error("shutdown application");
                process.exit(1);
            })
    }

    static start = ():DataBaseHandler => {
        return new DataBaseHandler;
    }

    public getRepository = (repo: string) => {
        if (!this.connection?.isConnected) return undefined;
        return this.connection.getRepository(repo);
    }
}

export default DataBaseHandler.start;