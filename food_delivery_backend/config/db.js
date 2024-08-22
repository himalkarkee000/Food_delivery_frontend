import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://himalkarkee000:himalkarkee000@cluster0.fk3he.mongodb.net/food_delivery_backend').then(()=>console.log("DB connected"))
}