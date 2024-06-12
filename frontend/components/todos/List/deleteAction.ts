"use server"

import { revalidatePath } from 'next/cache';

export const handleDelete = async (id: string) => {
    console.log('delete clicked', id);
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/todos/${id}`, {
            method: 'DELETE',
        })
        revalidatePath("/")
    } catch (error) {
        console.log(error)
    }
};