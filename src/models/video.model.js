import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile:{
        typr: String,
         reuired: true
    },
    thumbnail:{
        typr: String,
         reuired: true
    },
    title:{
        typr: String,
         reuired: true
    },
    description:{
        typr: String,
         reuired: true
    },
    duration:{
        typr: String, //cludnry url
         reuired: true
    },
    view:{
        default: 0,
        type: Number
    },
    isPublished:{
        type: Boolean,
        default: true,
    }, 
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true})
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)