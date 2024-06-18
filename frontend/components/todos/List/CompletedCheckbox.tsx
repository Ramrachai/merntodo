'use client';
import React, { useState } from 'react';
import { Todo } from './ListContainer';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { api_url__todo } from '@/config/api_url';

const CompletedCheckbox = ({ item }: { item: Todo }) => {
    const [checked, setChecked] = useState(item.completed);
    const router = useRouter();

    const handleComplete = async () => {
        let newCheckedStatus = !checked;
        const toastId = toast.loading('loading...');
        let res = await fetch(`${api_url__todo}/${item._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                completed: newCheckedStatus,
            }),
        });

        let result = await res.json();
        if (res.ok) {
            setChecked(newCheckedStatus);
            toast.success(result.message, { id: toastId });
        } else {
            toast.error(result.message, { id: toastId });
        }
        router.refresh();
    };
    return (
        <div className="flex items-center mr-2">
            <p
                className={`mr-2 text-xs ${
                    checked ? 'text-green-700' : 'text-red-600'
                }`}>
                {checked ? 'Completed' : 'Incomplete'}
            </p>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleComplete}
                className="form-checkbox h-3 w-3 text-blue-600"
            />
        </div>
    );
};

export default CompletedCheckbox;
