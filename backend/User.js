import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    email_status: { type: String, required: true },
    password: { type: String, required: true },
    code: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('User', userSchema)