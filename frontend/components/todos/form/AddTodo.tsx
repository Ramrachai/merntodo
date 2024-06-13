'use client';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

type Data = { success: boolean; message: string };

const AddTodoForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!title || !description) {
            toast.error('Please fill all fields');
            return false;
        }

        const toastId = toast.loading('Loading...');

        const todo = {
            title,
            description,
        };
        let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/todos`, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        let data: Data = await res.json();
        if (data.success) {
            toast.success(data.message, { id: toastId });
            setTitle('');
            setDescription('');
            router.push('/');
            router.refresh();
        } else {
            toast.error(data.message, { id: toastId });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="  m-10 p-4 border rounded-md shadow-md bg-white w-full md:max-w-xl">
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add Todo
                </button>
            </div>
        </form>
    );
};

export default AddTodoForm;
