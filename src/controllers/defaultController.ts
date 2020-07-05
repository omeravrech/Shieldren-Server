import { Request, Response, NextFunction } from 'express';
import { HttpExceptions } from '../utils';
import { join } from 'path';
import HttpException from '../utils/exceptions/httpexception';

export namespace DefaultController {
    export function indexPage(req: Request, res:Response, next:NextFunction) {
        res.render("index.html");
    };
    export function  favIcon(req: Request, res:Response, next:NextFunction) {
        res.sendFile(join(__dirname, "..", "..", "views", "favicon.ico"));
    };
    export function  Error404Page(req: Request, res:Response, next:NextFunction) {
        next(new HttpExceptions.PageNotFound());
    };
}