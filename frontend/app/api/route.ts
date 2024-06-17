import blogModel from '@/models/blogModel';
import connectToDB from '@/utils/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    return NextResponse.json({
        message: "Hello from get request"
    })
}


export async function POST(request: Request) {
    let clientData = await request.json()
    // let clientFormData = await request.formData()

    console.log("api client data==", clientData)
    // console.log("api client form data==", clientFormData)

    await connectToDB()
    const newBlog = await blogModel.create({
        title: clientData.title,
        description: clientData.description
    })

    if (newBlog) {
        console.log("blog added successfully")
    }
    return NextResponse.json({
        message: 'blog added successfully',
        newBlog
    })
}