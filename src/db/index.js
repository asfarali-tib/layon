import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDb Connected !! DB HOST: ${connectionInstance.connection.host}`);
        // app.on("error", (error) => {
        //     console.log("ERR: ", error)
        //     throw error
        // })
        // app.listen(process.env.PORT, () => {
        //     console.log("App is listening")
        // })
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1)
    }
}

export default connectDB