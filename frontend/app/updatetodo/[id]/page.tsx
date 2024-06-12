import UpdateTodoForm from '@/components/todos/form/UpdateTodo';
import React from 'react';

const page = async ({ params }: { params: { id: string } }) => {
    let id = params.id;
    let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/todos/${id}`);
    let data = await res.json();

    return (
        <div className="flex justify-center items-center">
            <UpdateTodoForm data={data} />
        </div>
    );
};

export default page;
