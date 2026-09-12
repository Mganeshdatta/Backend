class ApiError extends Error {
    constructor(
        statusCode,
        message= "Somethin went Wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        if(statusCode<100 || statusCode>=1000){
            this.statusCode=404
        }
        else{
            this.statusCode=statusCode
        }
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors


        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}