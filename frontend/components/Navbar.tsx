import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                className="w-auto"
                                src="/logo.png"
                                alt="logo"
                                height={50}
                                width={50}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="block">
                        <ul className="flex space-x-4">
                            <li>
                                <Link
                                    href="/"
                                    className="text-white hover:text-gray-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/image"
                                    className="text-white hover:text-gray-300">
                                    Image Gallary
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/addtodo"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Add New Todo
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
