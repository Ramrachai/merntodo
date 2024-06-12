import ListContainer from '@/components/todos/List/ListContainer';
import TodoForm from '@/components/todos/form/Form';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <header className="w-full max-w-5xl mb-6">
                <h1 className="text-xl md:text-3xl font-bold text-center text-gray-800">
                    MERN Todo App
                </h1>
            </header>
            <main className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
                <section className="w-full m-auto md:w-2/3 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h2 className="md:text-2xl font-semibold text-gray-800 mb-4">
                            {' '}
                            My Task Lists{' '}
                        </h2>
                        <Link
                            href="/addtodo"
                            className="md:text-lg text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add New Todo
                        </Link>
                    </div>
                    <ListContainer />
                </section>
            </main>
        </div>
    );
}
