'use client';
import React, { FormEvent, useRef, useState } from 'react';
import UploadButton from './UploadButton';
import { useFormState } from 'react-dom';
import { uploadImageAction } from './imageActions';
import toast from 'react-hot-toast';

const UploadForm = () => {
    const [pending, setPending] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;
        const allowedSize = 6 * 1024 * 1024;
        const allowedTypes = [
            'image/jpg',
            'image/jpeg',
            'image/png',
            'image/gif',
        ];

        if (file.size <= 0) {
            toast.error('Please select a file');
            return;
        } else if (!allowedTypes.includes(file.type.toLowerCase())) {
            toast.error('Invalid Image type');
            return;
        } else if (file.size > allowedSize) {
            toast.error('Maximum 6MB allowed');
            return;
        }

        setPending(true);
        const toastId = toast.loading('Uploading image....');
        try {
            let data = await uploadImageAction(formData);
            console.log(data);
            if (data?.success) {
                toast.success('Image uploaded successfully', { id: toastId });
                formRef?.current?.reset();
            } else {
                toast.error('Uploading failed', { id: toastId });
            }
        } catch (error) {
            toast.error('Error uploading image', { id: toastId });
        } finally {
            setPending(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-5 flex-[2] flex flex-col gap-4"
            ref={formRef}>
            <input
                type="file"
                name="file"
                className="border rounded p-4"
                required
            />
            <input
                type="text"
                name="caption"
                placeholder="Caption for image"
                className="border rounded p-4"
            />
            <UploadButton pending={pending} />
        </form>
    );
};

export default UploadForm;
