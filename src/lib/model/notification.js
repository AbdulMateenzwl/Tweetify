import mongoose from 'mongoose';

const notificaitonModel = new mongoose.Schema({
	userId: String,
	createdAt: { type: String, default: Date.now },
	isDeleted: { type: Boolean, default: false },
	isOpened: { type: Boolean, default: false },
	type: {
		type: String,
		enum: ['like', 'comment', 'retweet', 'message', 'follow', 'mention', 'reply'],
		default: 'like',
	},
	linkedTweetId: { type: String, default: '' },
	chatId: { type: String, default: '' },
	senderId: { type: String, default: '' },
});

export const Notification =
	mongoose.models.notification ||
	mongoose.model('notification', notificaitonModel);
