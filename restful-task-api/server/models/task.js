const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    title:{  
        type:String,
        required: [true,'title is required'],
        minlength:[2,'taks must be longer than 2'],
        trim:true
    },
    description:{
        type:String,
        trim: true,
    },
    completed: {
        type:Boolean,
        default: false,
    },
 created_at: {
     type: Date,
     default: Date.now
 },
 updated_at: {
     type:Date,
     default:Date.now
 }
 });
 
 module.exports = {
     Task : mongoose.model('Task',TaskSchema)
 }