//to make a schema of the contact list

const mongoose=require('mongoose');

const todoschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    listing_type:{
        type:String,
        required:true
    },
    due_date:{
        type:Date,
        required:true
    }
});

const todolist =mongoose.model('contact',todoschema);

module.exports=todolist;