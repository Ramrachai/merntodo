'use client';
import React from 'react';
import { MdOutlineCloudDownload } from 'react-icons/md';
import useDownloader from 'react-use-downloader';

export default function DownloadButton({
    imgPath,
    filename,
}: {
    imgPath: string;
    filename: string;
}) {
    const { size, elapsed, percentage, download, cancel, error, isInProgress } =
        useDownloader();

    const handleClick = async () => {
        const res = await fetch(imgPath, { mode: 'no-cors' });
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
