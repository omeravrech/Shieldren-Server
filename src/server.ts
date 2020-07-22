import * as http        from "http";
import * as https       from "https";
import {
    readFileSync,
    existsSync
}                       from "fs";
import app              from "./app";
import { logger }       from "./utils";

class Server {
    server: http.Server|https.Server;

    constructor(sb: ServerBuilder) {
        if (sb.securityStatus && sb.certificates) {
            this.server = https.createServer(sb.certificates, app);
        } else {
            this.server = http.createServer(app);
        }

        this.server.listen(app.get("port"), () => {
            logger.info("Server start to listen on port " + app.get("port"));
            logger.info("Server mode: " + app.get("env"));
        });
    }
}

class ServerBuilder {
    private _certificate: Certificate | null;
    private _secured: boolean;

    constructor() {
        this._certificate = null;
        this._secured = false;
    }
    get certificates() { return this._secured?this._certificate:null; }
    get securityStatus() { return this._secured; }
    
    enableSecurity (certPath: string, keyPath:string): void {
        try {
            if (existsSync(certPath) && existsSync(keyPath)) {
                this._certificate = {
                    cert: readFileSync(certPath),
                    key: readFileSync(keyPath)
                };
                this._secured = true;
            }

        } catch (err) {
            this._secured = false;
        }
    }

    StartServer(): Server { return new Server(this); }
}

const server:Server = new ServerBuilder().StartServer();


process.on("uncaughtException", (err) => { console.log({ data: "uncaughtException", error: err.stack }); });
process.on("SIGTERM", () => { process.exit(0); });

export default server;