import                   "reflect-metadata";
import express      from 'express';
import compression  from "compression";
import bodyParser   from "body-parser";
import path         from "path";
import flash        from "express-flash";
import lusca        from "lusca";

import routes       from './router';
import {
    logger,
    ErrorHandler }  from "./utils";


const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.set("view engine", 'ejs');
app.engine("html", require('ejs').renderFile);
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

app.use((req, res, next) => {
    logger.info(`client ${req.connection.remoteAddress} request ${req.method} HTTP${req.httpVersion} ${req.url}`)
    next();
})
app.use("/", routes);
app.use(ErrorHandler);

export default app;