import HttpException from './httpexception';

export default class ForbiddenAccess extends HttpException {
    constructor() {
        super(403, `You're not authorized to access.`);
    }
}