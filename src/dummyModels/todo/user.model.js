const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true,
        unique:true,
        lowerCase:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowerCase:true
    },
    firstName:{
        type:String,
        require:true,
        unique:true,
        lowerCase:true

    },
    lastName:{
        type:String,
        require:true,
        unique:true,
        lowerCase:true

    },
    pasword:{
        type:String,
        require:true,
    }
    },{timestamps:true});
export const Todo = mongoose.model("User",userSchema)