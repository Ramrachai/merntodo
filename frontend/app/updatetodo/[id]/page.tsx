import UpdateTodoForm from '@/components/todos/form/UpdateTodo';
import { api_url__todo } from '@/config/api_url';
import React from 'react';

const page = async ({ params }: { params: { id: string } }) => {
    let id = params.id;
    let res = await fetch(api_url__todo);
    let data = await res.json();

    return (
        <div className="flex justify-center items-center">
            <UpdateTodoForm data={data} />
        </div>
    );
};

export default page;
