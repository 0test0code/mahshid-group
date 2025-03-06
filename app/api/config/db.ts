import mongoose from "mongoose";

export const connectDB = async () =>{
    try {const conn = await mongoose.connect(process.env.DATABASE_URL as string);
        console.log(`MongoDB connected successfully: ${conn.connection.host}`);        
    } catch (error:any) { console.log("Error connecting to MongoDB : ", error.message);
        process.exit(1);
    }
}