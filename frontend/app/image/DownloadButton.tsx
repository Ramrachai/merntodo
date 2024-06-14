import React from 'react';
import { FaDownload } from 'react-icons/fa6';

export default function DownloadButton({ imgUrl }: { imgUrl: string }) {
    return (
        <a
            href={imgUrl}
            download
            title="download"
            className="cursor-pointer text-gray-200 hover:scale-125 transition-all">
            <FaDownload />
        </a>
    );
}
