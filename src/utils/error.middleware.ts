import { NextFunction, Request, Response } from 'express';
import HttpException from './exceptions/httpexception';
import logger from './logger';

const ErrorHandler = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';

    logger.error(`${error.status} - ${error.message}`)

    response
        .status(status)
        .json({
            "request": { "protocol": request.protocol, "path": request.originalUrl,  "body": request.body },
            "response": {"status": status, "message": message }
        })
}

export default ErrorHandler;