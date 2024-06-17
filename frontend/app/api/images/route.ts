import { NextRequest, NextResponse } from 'next/server';
import Image from '@/models/imageModel';
import connectToDB from '@/utils/mongodb';


export async function POST(request: NextRequest) {
    const { caption, imageName } = await request.json()
    const url = process.env.NEXT_PUBLIC_FRONTEND_URL + "/uploads/" + imageName

    await connectToDB()
    try {
        await Image.create({ imageName, caption, url })
        return NextResponse.json({ success: true, message: "image added to database" })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error while uploading image to database", success: false })
    }

}

export async function GET(request: Request) {
    await connectToDB()

    try {
        const images = await Image.find().select("imageName url caption ").sort({ createdAt: -1 })
        return NextResponse.json({ images });
    } catch (error) {
        console.error('Error fetching images:', error);
        return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
    }
}


export async function DELETE(request: NextRequest) {
    const { id } = await request.json()
    await connectToDB()
    try {
        await Image.findByIdAndDelete(id)
        return NextResponse.json({ success: true, message: "Image deleted successfully" })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error while deleting image" })
    }

}
