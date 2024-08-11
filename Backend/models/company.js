import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    decription:{
        type:String
    },
    website:{
        type:String
    },
    location:{
        type:String
    },
    logo:{
        type:String  //URL comapny logo
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps: true});
export const Company = mongoose.model("Company", companySchema);