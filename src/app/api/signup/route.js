import mongoose from 'mongoose';
import { User } from '../../../lib/model/user';
import { connectionStr } from '../../../lib/db';

import { NextResponse } from 'next/server';

export async function POST(request) {
	const payload = await request.json();

	await mongoose.connect(connectionStr);
	let user = new User(payload);
	await user.save();

	return NextResponse.json({ message: 'Hello from API route', user });

}
