import mongoose from 'mongoose';

import { NextResponse } from 'next/server';



export async function GET() {
	return NextResponse.json({ message: 'Test Api' });
}

export async function GET(req, content) {
	try {
		await mongoose.connect(connectionStr);
		const values = await req.nextUrl.searchParams;
		console.log(values + ',');
		// let tweet = new Tweet(payload);
		// await tweet.save();
		return NextResponse.json({ status: 200 });
	} catch {
		internalServerError();
	}
}