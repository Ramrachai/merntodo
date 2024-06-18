import Image from 'next/image';
import DeleteButton from './DeleteButton';
import Link from 'next/link';
import DownloadButton from './DownloadButton';
import { ImageType } from '@/lib/definitions';
import { api_url__image } from '@/lib/api_url';
import { MdOutlineImageSearch } from 'react-icons/md';

type Images = {
    images: ImageType[];
};

const ImageList = async () => {
    try {
        const res = await fetch(api_url__image);

        if (!res.ok) {
            throw new Error(`Error fetching images: ${res.statusText}`);
        }
        const data: Images = await res.json();

        return (
            <div className="flex-[5] flex gap-4 flex-wrap justify-center items-center mt-8 md:mt-0">
                {data.images.map((image, index) => (
                    <div
                        key={index}
                        className="group h-52 w-40 border shadow-lg rounded relative overflow-hidden">
                        <Image
                            src={image.path}
                            alt={image.caption}
                            fill={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP89fnIfwAJUgOy8nxzywAAAABJRU5ErkJggg=="
                            className="hover:scale-[1.2] transition-all object-cover"
                        />
                        <div className="absolute bottom-0 left-0 bg-black p-1 w-full flex justify-evenly items-center opacity-0 group-hover:opacity-90 transition-opacity">
                            <DownloadButton
                                imgPath={image.path}
                                filename={image.filename}
                            />

                            <Link
                                title="view image"
                                target="_blank"
                                href={image.path}
                                className="cursor-pointer p-1 text-gray-200 hover:scale-125 transition-all">
                                <MdOutlineImageSearch />
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
