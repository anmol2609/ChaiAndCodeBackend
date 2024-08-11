
export const asyncHandler = (requestHandler) => async(req, res, next) =>{
    try {
        const hadnlerRes = await requestHandler(req, res, next)
        return hadnlerRes;
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}

//export const asyncHandler = (fun) => {()=> {}}

//export const asyncHandler = (fun) => () =>{}