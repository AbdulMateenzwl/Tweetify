import mongoose from 'mongoose';
import { User } from '../../../lib/model/user';
import {connectionStr} from '../../../lib/db';

import { NextResponse } from 'next/server';

export async function GET({ body }) {
	await mongoose.connect(connectionStr);
	// let { name, email, password } = await body;
	// let user = await new User({ name, email, password });
	// return NextResponse.json({ message: 'Hello from API route', user });
	return NextResponse.json({ message: 'Hello from API route' });
}
