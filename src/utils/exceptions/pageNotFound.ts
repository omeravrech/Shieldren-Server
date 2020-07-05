import HttpException from './httpexception';

export default class PageNotFound extends HttpException {
    constructor() {
        super(404, `Page not found.`);
    }
}