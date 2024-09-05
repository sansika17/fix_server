import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
    title: String,
    category: String,
    location: String,
    description: String,
},
{ timestamps: true }
);

const Request = mongoose.model('Request', RequestSchema);
export default Request;