'use client';
import React, { FormEvent, useRef, useState } from 'react';
import UploadButton from './UploadButton';
import toast from 'react-hot-toast';
import { ImageUploadResponseType } from '@/lib/definitions';
import { imageFileValidation } from '@/utils/imageFileValidation';
import { uploadImageAction } from './imageActions';

const UploadForm = () => {
    const [pending, setPending] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const validationError = imageFileValidation(formData);
        if (validationError) {
            toast.error(validationError.message);
            return;
        }
        setPending(true);
        const toastId = toast.loading('Uploading images....');
        try {
            let data: ImageUploadResponseType = await uploadImageAction(
                formData
            );
            if (data?.success) {
                toast.success('Images uploaded successfully', { id: toastId });
                formRef?.current?.reset();
            } else {
                toast.error('Uploading failed', { id: toastId });
            }
        } catch (error) {
            toast.error('Error uploading images', { id: toastId });
        } finally {
            setPending(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="mt-5 flex-[2] flex flex-col gap-4"
            ref={formRef}>
            <input
                type="file"
                name="images"
                className="border rounded p-4"
                multiple // Allow multiple file selection
                required
                accept="image/*"
            />
            <input
                type="text"
                name="caption"
                placeholder="Caption for images"
                className="border rounded p-4"
            />
            <UploadButton pending={pending} />
        </form>
    );
};

export default UploadForm;
