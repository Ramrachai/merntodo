import Link from 'next/link';

const MyLink = ({ url, label }) => {
    return (
        <Link
            href={url}
            className='bg-purple-200 px-4 py-2 rounded  mr-2 border'>
            {label}
        </Link>
    );
};

export default MyLink;
