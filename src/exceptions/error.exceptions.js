export class  ErrorException {
    constructor(message, code){
        this.message = message || 'Error Exception';
        this.code = code || 500;
    }
}