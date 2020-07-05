import HttpException from './httpexception';

export default class MissingArguments extends HttpException {
    constructor(argName:String) {
        super(400, `Invalid data. ${argName} is not defined.`);
    }
}