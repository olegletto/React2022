import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../model'
import ErrorMessage from './ErrorMessage'

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 10,
        count: 1
    }
}

export default function CreateProduct() {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }

        productData.title = value

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products')
    }



    // ## function for onSubmit ##
    // const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     setValue(event.target.value)
    // }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className='border py-2 px-4 mb-2 w-full'
                placeholder='Enter product title...'
                value={value}
                onChange={event => setValue(event.target.value)}
            />

            {error && <ErrorMessage error={error} />}

            <button type="submit" className='py-2 px-4 border bg-yellow-400 hover:text-white'>Create</button>
        </form>
    )
}
