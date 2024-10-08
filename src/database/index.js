import mongoose from "mongoose"
import { DB_NAME } from "../constant.js";

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`mDB Connnected and DB Host: ${connectionInstance.connection.host}`);
        

        
    } catch (error) {
        console.log("MongoDb connection Failed", error);
        process.exit(1);
        
        
    }
}

export default connectDB;