import { Request, Response, NextFunction } from 'express';
import { check, sanitize, validationResult } from 'express-validator';
import { HttpExceptions } from '../utils';

export namespace AuthenticationController {
    export const postRegister = async (req: Request, res:Response, next:NextFunction) => {
        await check("email", "Email is not valid").isEmail().run(req);
        await check("password", "Password not match the minimal requirement.").isLength({ min: 8 }).run(req);
        await check("confirmPassword", "Passwords do not match").equals(req.body.password).run(req);
        await sanitize("email").normalizeEmail({ gmail_remove_dots: false }).run(req);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            req.flash("errors", errors.array().toString());
            return next(new HttpExceptions.AuthenticationFailed())
        }
    
    }
}