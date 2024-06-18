import React from 'react';
import { format } from 'date-fns';
import ListItem from './ListItem';
import { api_url__todo } from '@/lib/api_url';

export type Todo = {
    _id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string; // 2024-06-12T04:55:26.320Z
};
type Todos = {
    todos: Todo[];
    totalTime: string;
};

const ListContainer = async () => {
    console.log('=============');
    console.log(api_url__todo);
    console.log('=============');
    let res = await fetch(api_url__todo, {
        cache: 'no-cache',
    });
    let data: Todos = await res.json();

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
            <span className="text-sm text-gray-500">
                Time to get todos from database :{' '}
                <b>{Number(data.totalTime).toFixed(4)}</b>
                milliseconds
            </span>
            <ul className="space-y-4">
                {data.todos.map((item) => (
                    <ListItem key={item._id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default ListContainer;
