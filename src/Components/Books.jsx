import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';

const Books = () => {
    const {books} = useLoaderData()
  
    return (
        <div className='my-container'>
            <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
            {
                books.map(book => <Cart books = {book} key={book.isbn13}></Cart>)
            }
            </div>
        </div>
    );
};

export default Books;