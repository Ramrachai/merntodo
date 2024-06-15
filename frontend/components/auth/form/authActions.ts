"use server"
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import path from 'path'


export const signUpAction = async (prevState: any, formData: FormData) => {
    console.log("sign action working")
    return {
        name: '',
        email: '',
        password: '',
    }
}