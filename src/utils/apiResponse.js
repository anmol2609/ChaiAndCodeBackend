class ApiResponse extends Error {
    constructor(statusCode,data,message = "success", errors = []) {
        this.statusCode = statusCode;
        this.message = message;
        this.success = statusCode < 400;
        this.data = null;
        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
        stack = "" ;
    }
}
export {ApiResponse}