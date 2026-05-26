import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-5'>
            <h2 className='font-bold text-5xl text-blue-500'>This page is not found</h2>

            <Link href={"/"}>
                <button className='btn bg-emerald-700 text-white'>Go Back Home</button>
            </Link>

        </div>

    );
};

export default NotFoundPage;