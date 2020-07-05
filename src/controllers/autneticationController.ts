import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';

export namespace AuthenticationController {
    export const postLogin = async (req: Request, res:Response, next:NextFunction) => {
        await check('email').isEmail().run(req);
        await check('password').isLength({ min: 6 }).run(req);
        
    }
}