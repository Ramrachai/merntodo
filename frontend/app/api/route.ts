import connectToDB from '@/utils/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    await connectToDB()
    return NextResponse.json({
        message: "Hello from get request"
    })
}


