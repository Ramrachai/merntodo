import React from 'react';
export default function UploadButton({ pending }: { pending: boolean }) {
    return (
        <button
            disabled={pending}
            type="submit"
            className={`block w-full mt-4 rounded p-2 shadow-lg text-white transition-all ${
                pending
                    ? 'bg-gray-400 cursor-not-allowed pointer-events-none'
                    : 'bg-blue-400 hover:bg-blue-600'
            }`}>
            {pending ? 'Uploading...' : 'Upload'}
        </button>
    );
}
