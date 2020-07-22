import { Request, Response, NextFunction } from 'express';
import { HttpExceptions } from '../utils';
import { join } from 'path';

export namespace DefaultController {
    export const getIndexPage = (req: Request, res:Response, next:NextFunction) => {
        res.render("index.html");
    };
    export const  getFavIcon = (req: Request, res:Response, next:NextFunction) => {
        res.sendFile(join(__dirname, "..", "..", "views", "favicon.ico"));
    };
    export const Error404Page = (req: Request, res:Response, next:NextFunction) => {
        next(new HttpExceptions.PageNotFound());
    };
}