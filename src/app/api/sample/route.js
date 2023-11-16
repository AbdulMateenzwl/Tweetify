import mongoose from 'mongoose';
import { connectionStr } from '../../../lib/db';
import { internalServerError } from '../../../lib/errors/server';
import { NextResponse } from 'next/server';

// Get User with username and password
export async function GET(request, content) {
	try {
		await mongoose.connect(connectionStr);
		
		if () {
			return NextResponse.json({  }, { status: 404 });
		}
		return NextResponse.json({  }, { status: 200 });
	} catch {
		internalServerError();
	}
}
