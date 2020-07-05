import HttpException from './httpexception';

export default class AuthenticationFailed extends HttpException {
    constructor() {
        super(400, 'Wrong username or password');
    }
}
