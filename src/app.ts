// Imported modules
import                  "reflect-metadata";
import express      from "express";
import flash        from "express-flash";
import session      from "express-session";
import compression  from "compression";
import bodyParser   from "body-parser";
import path         from "path";
import lusca        from "lusca";

// Projects modules
import routes       from './router';
import { logger,
    ErrorHandler }  from "./utils";
import Database     from './database';

const app = express();

app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "../views"));
app.set("db", Database());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'test',
    resave: true,
    saveUninitialized: true,
}));
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