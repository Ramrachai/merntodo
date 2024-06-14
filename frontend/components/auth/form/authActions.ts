"use server"
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import path from 'path'


export const signUpAction = async (prevState, formData) => {
    console.log("sign action working")
    return {
        message: "working"
    }
}