'use client';
import React from 'react';
import { deleteimage } from './imageActions';
import toast from 'react-hot-toast';
import { ImageType } from '@/lib/definitions';
import { MdDeleteForever } from 'react-icons/md';

export default function DeleteButton({ image }: { image: ImageType }) {
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
            className="cursor-pointer text-red-500 hover:scale-125 transition-all">
            <MdDeleteForever size={18} />
        </button>
    );
}
