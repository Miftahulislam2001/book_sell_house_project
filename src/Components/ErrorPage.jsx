
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import ErrorIcon from '../assets/404.json'
import { FaceFrownIcon } from '@heroicons/react/24/solid';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
              
            {/* <div className='relative lg:w-1/3 '>
                <div className='w-full  lg:ml-auto h-56  sm:h-96'>
                    <Lottie animationData={ErrorIcon} loop={true} />
                </div>
            </div> */}
                <FaceFrownIcon className='w-40 h-40 text-blue-500' />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-blue-500'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className='text-xl font-semibold md:text-2xl text-red-600 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;