import mongoose from "mongoose";
const MONGODB_URI=process.env.MONGODB_URI;

const connectDB= async ()=>{
    await mongoose.connect(MONGODB_URI)
                    .then(()=>{
                        console.log("MongoDB connected");
                    }).catch((err)=>{
                        console.log('MongoDB Connection Error',err);
                    })
}

export default connectDB;