import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    name:{type:String, required:true},
    desc:{type:String, required:true},
    bgColor:{type:String, required:true},
    image:
})