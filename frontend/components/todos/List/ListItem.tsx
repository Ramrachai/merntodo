import { format } from 'date-fns';
import Link from 'next/link';
import DeleteTodo from './DeleteTodo';
import CompletedCheckbox from './CompletedCheckbox';

type Todo = {
    _id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string; // 2024-06-12T04:55:26.320Z
};

const ListItem = ({ item }: { item: Todo }) => {
    return (
        <li
            className={`p-4  rounded-lg shadow ${
                item.completed ? 'bg-green-100' : 'bg-gray-100'
            }`}>
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg capitalize text-gray-800">
                        {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-400 text-xs">
                        {format(new Date(item.createdAt), 'PPP p')}
                    </p>
                </div>
                <div className="flex items-center justify-center md:flex-col md:items-end gap-2">
                    <CompletedCheckbox item={item} />
                    <div className=" flex space-x-2">
                        <DeleteTodo id={item._id} />
                        <Link
                            href={`/updatetodo/${item._id}`}
                            className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">
                            Update
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ListItem;
