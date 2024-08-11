import mongoose, {Schema} from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
const userSchema = new Schema({
    userName:{
        lowerase:true,
        index:true,
        unique:true,
        required:true,
        trim:true,
        type: String,
    },
    email:{
        lowerase:true,
        unique:true,
        required:true,
        trim:true,
        type: String,
    },
    fullName:{
        lowerase:true,
        required:true,
        trim:true,
        type: String,
    },
    avatar:{
        lowerase:true,
        required:true,
        trim:true,
        type: String, //cludnry url
    },
    coverImage:{
        type: String, //cludnry url
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        required:[true, "Password is required"],
        type: String,
    },
    refereshToken:{
        type: String,
    }
},{timestamps:true})
//userSchema.pre("save",()=>{}) use to avoid arrow function because it doesn have this reference in the arrow function
userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 8);
    next();
}) 
userSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password, this.password)
}
userSchema.methods.generateAccessToken = async function (password) {
    return jwt.sign({_id:this._id,email:this.email,fullName:this.fullName,userName:this.userName},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:process.env.ACCESS_TOKEN_EXPIRY}
            )
 }
 userSchema.methods.generateRefereshToken = async function (password) {
    return jwt.sign({_id:this._id},
            process.env.REFERESH_TOKEN_SECRET,
            {expiresIn:process.env.REFERESH_TOKEN_EXPIRY}
    )
 }
export const User = mongoose.model("User", userSchema)