import mongoose, { Mongoose } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let comicSchema= new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    imageUrl:{type:String}
    // publishingDate:{type:Date, required:true, default:new Date()},
    // available:{type:Boolean, required:true,default: true},
});
comicSchema.plugin(mongoosePaginate);
const Comic=mongoose.model("Comic",comicSchema);


export default Comic;