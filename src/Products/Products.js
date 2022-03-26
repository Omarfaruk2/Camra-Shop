import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Product from '../Product/Product'
import "./Products.css"

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [cart])

    const addToHandle = (product) => {
        const newCard = [...cart, product]
        // console.log(cart, product)


        // if (newCard.length <= 4) {
        //     setCart(newCard)
        // }
        console.log(cart.map(it => console.log(it.id)))

        if (newCard.length <= 4) {

            setCart(newCard)
        }

        else {
            setCart(cart)
            alert("hello")
        }

    }
    const removeHandle = (removeHandle) => {
        setCart([])
    }

    return (
        <div className='row mx-0 bg-light'>
            <div className='row col-lg-9 col-sm-12 mx-auto'>
                {
                    products.map(product => <Product
                        key={product.id}
                        addToHandle={addToHandle}
                        product={product}
                    />)
                }
            </div>
            <div className='col-lg-3 mt-2 fix'>
                <Card
                    removeHandle={removeHandle}
                    carts={cart}
                />
            </div>
        </div>
    )
}

export default Products