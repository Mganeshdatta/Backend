// const asyncHandler = (requestHandler) => {
//     return (req, res,next) =>{
//         Promise.resolve(requestHandler(req,res,next))
//         .catch((err)=> next(err))
//     }
// }

const asyncHandler = (asyncfunc) => {
    return async (req,res,next) => {
        try{
            return await asyncfunc(req,res,next)
        }catch(error){
            console.log("505 error occured while executing an asynchronous function")
            console.log(error)
        }
    }
}

export {asyncHandler}