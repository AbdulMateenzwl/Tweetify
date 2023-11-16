import mongoose from 'mongoose'

const userModel = new mongoose.Schema({
	username: String,
	firstName: String,
	lastName: String,
	email: String,
	passwordHash: String,
	birthday: { type: String, default: null },
	isVerified: { type: Boolean, default: false },
	createdAt: { type: String, default: Date.now },
	updatedAt: { type: String, default: Date.now },
	isEmailVerified: { type: Boolean, default: false },
	bio:{ type: String, default: '' },
	link:{ type: String, default: '' },
	linkText:{ type: String, default: '' },
	isDeleted: { type: Boolean, default: false },
	profilePictureLink: { type: String, default: '' },
	coverPictureLink: { type: String, default: '' },
	bookmarkTweet: { type: Array, default: [] },
});

export const User = mongoose.models.users || mongoose.model('users', userModel);