import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()




/*
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERR: ", error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log("App is listening")
        })
    } catch (error) {
        console.log("ERROR :", error);
        throw error
    }
})()
*/