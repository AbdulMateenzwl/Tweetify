import mongoose from 'mongoose';
import { User } from '../../../lib/model/user';
import { connectionStr } from '../../../lib/db';
import {internalServerError} from '../../../lib/errors/server';
import { NextResponse } from 'next/server';

// Get User with username and password
export async function GET(request, content) {
	try{
		await mongoose.connect(connectionStr);
		let findUser = await User.findOne({ username: content.params.user[1],passwordHash: content.params.user[2] });
		if(findUser == null){
			return NextResponse.json({ findUser },{status:404});
		}
		return NextResponse.json({ findUser },{status:200});
	}
	catch{
		internalServerError();
	}
}


export async function POST(request, content) {
	try {
		await mongoose.connect(connectionStr);
		const payload = await request.json();
		await mongoose.connect(connectionStr);
		let user = new User(payload);
		await user.save();
		return NextResponse.json({ user }, { status: 200 });		
	} catch {
		internalServerError();
	}
}