import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Product from '../Product/Product'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div className='row mx-0'>
            <div className='row col-lg-8 mx-0'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    />)
                }
            </div>
            <div className='col-lg-4'>
                <Card />
            </div>
        </div>
    )
}

export default Products