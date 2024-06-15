import React from 'react';
import { MdOutlineCloudDownload } from 'react-icons/md';

export default function DownloadButton({ imgUrl }: { imgUrl: string }) {
    return (
        <a
            href={imgUrl}
            download
            title="download"
            className="cursor-pointer p-1 text-gray-200 hover:scale-125 transition-all">
            <MdOutlineCloudDownload size={18} />
        </a>
    );
}
