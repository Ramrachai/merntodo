'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import { Todo } from '../List/ListContainer';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { api_url__todo } from '@/lib/api_url';

const UpdateTodoForm = ({ data }: { data: Todo }) => {
    const [title, setTitle] = useState(data.title);
    const [description, setDescription] = useState(data.description);
    const [completed, setCompleted] = useState(data.completed);

    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        let toastId = toast.loading('Updating...');
        const todo = {
            title,
            description,
            completed,
        };

        // Here you can add the code to send this data to your backend/database
        let res = await fetch(api_url__todo, {
            method: 'PUT',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        let result = await res.json();
        if (result.success) {
            toast.success(result.message, { id: toastId });
            setTitle('');
            setDescription('');
            setCompleted(false);
            router.push('/');
            router.refresh();
        } else {
            toast.error(result.message, { id: toastId });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="  mt-10 p-4 border rounded-lg shadow-lg bg-white">
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
                    required
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
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="completed">
                    Completed
                </label>
                <input
                    type="checkbox"
                    id="completed"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                    className="mr-2 leading-tight"
                />
                <span className="text-sm">Yes</span>
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Update
                </button>
            </div>
        </form>
    );
};

export default UpdateTodoForm;
