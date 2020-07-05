import { Request, Response, NextFunction } from 'express';

import { join } from 'path';

export default class DefaultController {
    static indexPage(req: Request, res:Response, next:NextFunction) {
        res.render("index.html");
    };
    static favIcon(req: Request, res:Response, next:NextFunction) {
        res.sendFile(join(__dirname, "..", "..", "views", "favicon.ico"));
    };
    static Error404Page(req: Request, res:Response, next:NextFunction) {
        res.status(404).send();
    };
}