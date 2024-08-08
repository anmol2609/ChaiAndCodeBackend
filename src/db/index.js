import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {
        const connectionInctance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected ${connectionInctance.connection.port}`)
        // app.on("error",(err)=>{
        //     console.error("Error : ", err)
        //     throw err;
        // })       
        // app.listen(process.env.PORT,()=>{
        //     console.log(`connect to port ${process.env.PORT}`)
        // })
    } catch (error) {
        console.error("Error : ",error);
        process.exit(1);
    }
}
export default connectDB