import { useState } from "react"
import { IProduct } from "../model"

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {

    const [details, setDetails] = useState(false)

    const btnClassName = details ? 'bg-blue-400' : 'bg-yellow-400'

    const btnClasses = ['py-2 px-4 border', btnClassName]
    return (
        <div
            className='border py-2 px-4 rounded flex flex-col items-center mb-2'
        >
            <img src={product.image} className='w-1/6' alt={product.title} />
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(!details)}
            >{details ? 'Hide details' : 'Show details'}</button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 800}}>{product.rating.rate}</span></p>
            </div>
            }
        </div>
    )
}