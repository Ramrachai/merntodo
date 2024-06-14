import Image from 'next/image';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import DeleteButton from './DeleteButton';
import Link from 'next/link';
import DownloadButton from './DownloadButton';

const ImageList = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/images`
        );

        if (!res.ok) {
            throw new Error(`Error fetching images: ${res.statusText}`);
        }

        const images: string[] = await res.json();

        return (
            <div className="flex-[5] flex gap-4 flex-wrap justify-center items-center mt-8 md:mt-0">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="group h-52 w-40 border shadow-lg rounded relative overflow-hidden">
                        <Image
                            src={`/uploads/${image}`}
                            alt={`Image ${index}`}
                            fill={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP89fnIfwAJUgOy8nxzywAAAABJRU5ErkJggg=="
                            className="hover:scale-[1.2] transition-all object-cover"
                        />
                        <div className="absolute bottom-0 left-0 bg-black p-1 w-full flex justify-evenly items-center opacity-0 group-hover:opacity-90 transition-opacity">
                            <DownloadButton
                                imgUrl={
                                    process.env.NEXT_PUBLIC_FRONTEND_URL +
                                    '/uploads/' +
                                    image
                                }
                            />

                            <Link
                                title="view image"
                                target="_blank"
                                href={
                                    process.env.NEXT_PUBLIC_FRONTEND_URL +
                                    '/uploads/' +
                                    image
                                }
                                className="cursor-pointer text-gray-200 hover:scale-125 transition-all">
                                <FaMagnifyingGlass />
                            </Link>

                            <DeleteButton image={image} />
                        </div>
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        console.error(error);
        return <div className="flex-[5]">Failed to load images</div>;
    }
};

export default ImageList;
