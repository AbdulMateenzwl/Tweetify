import mongoose from 'mongoose'

const userModel = new mongoose.Schema({
	name: String,
	email: String,
	passwordHash: String,
	birthday: { type: String, default: Date.now },
});

export const User = mongoose.models.users || mongoose.model('users', userModel);