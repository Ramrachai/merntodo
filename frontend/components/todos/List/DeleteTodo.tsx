'use client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const DeleteTodo = ({ id }: { id: string }) => {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            const toastId = toast.loading('Loading...');
            let res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/todos/${id}`,
                {
                    method: 'DELETE',
                }
            );

            let { message } = await res.json();
            res.ok
                ? toast.success(message, { id: toastId })
                : toast.error(message, { id: toastId });
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <button
            onClick={handleDelete}
            className="p-1 text-xs bg-red-500 text-white rounded hover:bg-red-600">
            Delete
        </button>
    );
};

export default DeleteTodo;
