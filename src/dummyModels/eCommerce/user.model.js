import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowerCase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowerCase:true
    },
    firstName:{
        type:String,
        required:true,
        unique:true,
        lowerCase:true

    },
    lastName:{
        type:String,
        required:true,
        unique:true,
        lowerCase:true

    },
    pasword:{
        type:String,
        required:true,
    }
},{timestamps:true})
export const user = mongoose.model('User',userSchema)