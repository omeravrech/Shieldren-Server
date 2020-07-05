import * as winston from "winston";

const options: winston.LoggerOptions = {
    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV === "production" ? "error" : "debug"
        }),
        new winston.transports.File({
            filename: "./logs/debug.log",
            level: "debug",
            format: winston.format.combine(
                winston.format.timestamp(),
                //winston.format.prettyPrint(),
                winston.format.colorize()
            )
        }),
    ]
};
const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}

export default logger;