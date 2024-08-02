const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    todoName:{
        type:String,
        require:true,
        unique:true,
        lowerCase:true
    },
    todoContent:{
        type:String,
        require:true,
        unique:true,
        lowerCase:true
    },
    todoCreatedBy:{
        type:String,
        require:true,
        unique:true,
        lowerCase:true

    }
    },{timestamps:true});
export const Todo = mongoose.model("Todo",todoSchema)