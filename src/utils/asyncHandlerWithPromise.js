export const asyncHandler = (requestHandler) => {
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error))
    }
}
// export const asyncHandler = () => async(req, res, next) =>{
//     try {
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

//export const asyncHandler = (fun) => {()=> {}}

//export const asyncHandler = (fun) => () =>{}