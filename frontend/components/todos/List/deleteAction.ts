"use server"

import { api_url__todo } from '@/lib/api_url';
import { revalidatePath } from 'next/cache';

export const handleDelete = async (id: string) => {
    console.log('delete clicked', id);
    try {
        await fetch(`${api_url__todo}/${id}`, {
            method: 'DELETE',
        })
        revalidatePath("/")
    } catch (error) {
        console.log(error)
    }
};