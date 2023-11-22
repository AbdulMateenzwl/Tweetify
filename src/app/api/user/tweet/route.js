import mongoose from 'mongoose';
import { Tweet } from '../../../../lib/model/tweet';
import {
	internalServerError,
	notFoundError,
} from '../../../../lib/errors/server';
import { connectionStr } from '../../../../lib/db';
import { NextResponse } from 'next/server';



export async function GET(req,content) {
	try {
		await mongoose.connect(connectionStr);
		const {user_Id} = await req.query;
        console.log(payload);
		// let tweet = new Tweet(payload);
		// await tweet.save();
		return NextResponse.json( { status: 200 });
	} catch {
		internalServerError();
	}
}