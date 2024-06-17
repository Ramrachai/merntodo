'use server'

import path from 'path';
import fs, { writeFile } from "fs/promises"
import { revalidatePath } from 'next/cache';
import { ImageType } from '@/lib/definitions';
import { api_url__image } from '@/lib/api_url';

export async function deleteimage(image: ImageType) {
    let filepath = path.join(process.cwd(), '/public/uploads', image.imageName)

    try {
        await fs.unlink(filepath)
        await fetch(api_url__image, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: image._id })
        })
        revalidatePath("/image")
        return {
            status: 200,
        }
    } catch (error) {
        console.log('error deleting image', error)
        return {
            status: 400,
        }
    }
}


export const uploadImageAction = async (formData: FormData) => {
    const file = formData.get("file") as File;
    const caption = formData.get("caption") as String

    const imageName = (Math.random() * 99999).toFixed(0) + "_" + file.name.replaceAll(" ", "_");

    const maxFileSize = 6 * 1024 * 1024
    const AllowedTypes = ['image/jpeg', 'image/png', 'image/gif']

    if (!AllowedTypes.includes(file.type)) {
        return {
            message: "Invalid file type. Only JPEG, PNG, GIF are allowed",
            success: false
        }
    }

    if (!file.size) {
        return {
            message: "No file provided",
            success: false
        }
    }
    if (file.size > maxFileSize) {
        return {
            message: "File size exceeds the maximum allowed size of 6MB",
            success: false
        }
    }



    //upload functionality ==
    const buffer = Buffer.from(await file.arrayBuffer());
    let filePath = path.join(process.cwd(), "public/uploads/", imageName)

    try {
        await writeFile(filePath, buffer)
        await fetch(api_url__image, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                imageName, caption
            })
        })
        revalidatePath("/image")
        return {
            message: "uploaded successfully",
            success: true,
        }
    } catch (error) {
        console.log("Error uploading files:", error)
        return {
            message: "File upload failed",
            success: false,
        }
    }
}

