import mongoose from 'mongoose';
import { Relation } from '../../../lib/model/relation';
import { connectionStr } from '../../../lib/db';

import { NextResponse } from 'next/server';

export async function POST(request) {
	const payload = await request.json();

	await mongoose.connect(connectionStr);
	let relation = new Relation(payload);
	await relation.save();

	return NextResponse.json({ message: 'Hello from API route', relation });
}
