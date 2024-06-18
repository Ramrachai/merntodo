"use server"

import { api_url__todo } from '@/config/api_url';
import { revalidatePath } from 'next/cache';

export const handleDelete = async (id: string) => {
    try {
        await fetch(`${api_url__todo}/${id}`, {
            method: 'DELETE',
        })
        revalidatePath("/")
    } catch (error) {
        console.log(error)
    }
};