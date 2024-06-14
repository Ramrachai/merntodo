'use client';
import toast from 'react-hot-toast';
import { signUpAction } from './authActions';
import { useFormState } from 'react-dom';

type InitialFormType = {
    name: string;
    email: string;
    password: string;
};

const SignUpForm = () => {
    const initialState: InitialFormType = {
        name: '',
        email: '',
        password: '',
    };

    const [state, action, isLoading] = useFormState(signUpAction, initialState);

    console.log('log of state', state);

    return (
        <form
            action={action}
            className="m-10 p-4 border rounded-md shadow-md bg-white w-full md:max-w-xl">
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </div>
        </form>
    );
};

export default SignUpForm;
