'use client';
import React from 'react';
import { MdOutlineCloudDownload } from 'react-icons/md';

export default function DownloadButton({
    imgPath,
    filename,
}: {
    imgPath: string;
    filename: string;
}) {
    const handleClick = async () => {
        const res = await fetch(imgPath);
        const blob = await res.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    };

    return (
        <button
            onClick={handleClick}
            title="download"
            className="cursor-pointer p-1 text-gray-200 hover:scale-125 transition-all">
            <MdOutlineCloudDownload size={18} />
        </button>
    );
}
