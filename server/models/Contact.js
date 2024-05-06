import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
        // unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    address:{
      type:String,
  },
  postedBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }
})

const ContactModel = mongoose.model("contact",ContactSchema)
export {ContactModel}


