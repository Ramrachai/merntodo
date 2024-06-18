'use server'
import { revalidatePath } from 'next/cache';
import { ImageType } from '@/lib/definitions';
import { api_url__image } from '@/config/api_url';

export async function deleteimage(image: ImageType) {
    let url = `${api_url__image}/${image._id}`

    try {
        let res = await fetch(url, {
            method: "DELETE"
        })
        await res.json()
        revalidatePath('/images')
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
    try {
        let res = await fetch(api_url__image, {
            method: 'POST',
            body: formData
        })

        let data = await res.json()
        revalidatePath("/image")
        return data
    } catch (error) {
        console.log("Error uploading files:", error)
        return {
            message: "File upload failed",
            success: false,
        }
    }
}

