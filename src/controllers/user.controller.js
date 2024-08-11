import { asyncHandler } from "../utils/asyncHandlerWithPromise.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async(req, res)=>{
    // get user details from frontend
    //vaildation not empty
    //check user already exist: username and email unique
    //check for image or avatar
    //up-load to cloudinary ,avatar
    // create user object - create entery in db
    // remove referesh token and password from response
    //check for user creation
    //return response
    const {email, userName, fullName, password} = req.body;
    console.log("data=>>>>>>>>",email, userName, fullName, password)
    if([fullName].some((field)=> field?.trim() === "")){
        throw new ApiError(400,"All fields are required")
    }
    const existedUser = User.findOne({
        $or:[{ userName }, { email }]
    });
    if(existedUser){
        throw new ApiError(409,"User already exist.")
    }
    const avatarLocalFilePath = req.files?.avatar[0]?.path;
    const coverImageLocalFilePath = req.files?.coverImage[0]?.path;
    if(!avatarLocalFilePath){
        throw new ApiError(400,"avatar file is required")
    }
    const avatar = await uploadOnCloudinary(avatarLocalFilePath)
    const coverImage = await uploadOnCloudinary(coverImageLocalFilePath)
    if(!avatar){
        throw new ApiError(400,"avatar file is required")
    }
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        userName: userName.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refereshToken"
    )
    if(!createdUser){
        throw new ApiError(500,"Something went worng while reserting the user.")
    }
    
    res.status(201).json(
        new ApiResponse(200,createdUser,"User registered successfully.")
    )
})

export {registerUser}