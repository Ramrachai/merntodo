'use client';
import React from 'react';
import { FiDelete } from 'react-icons/fi';
import { deleteimage } from './imageActions';
import toast from 'react-hot-toast';

export default function DeleteButton({ image }: { image: string }) {
    const handleClick = async () => {
        let toastId = toast.loading('Deleting...');
        let res = await deleteimage(image);
        if (res?.status === 200) {
            toast.success('Image deleted', { id: toastId });
        } else {
            toast.error('Failed to delete image', { id: toastId });
            return;
        }
    };
    return (
        <button
            title="Delete"
            onClick={handleClick}
            className="cursor-pointer p-1  text-red-500 hover:scale-125 transition-all">
            <FiDelete />
        </button>
    );
}
