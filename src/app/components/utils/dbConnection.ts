import mongoose from "mongoose";

const MONGO_URL = process.env.MONGOURI;

const dbConnection = async () => mongoose.connect(MONGO_URL!);

export default dbConnection;
