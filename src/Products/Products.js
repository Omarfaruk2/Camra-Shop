import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Product from '../Product/Product'
import "./Products.css"

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [eachproduct, setEachProcuct] = useState([])

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const addToHandle = (product) => {
        const newCard = [...cart, product]

        if (newCard.length <= 4) {
            setCart(newCard)
        }

        else {
            setCart(cart)
            alert("Sorry sir,You Can't Shop more than 4 items !!")
        }
    }

    const remove = () => {
        setCart([])
        setEachProcuct([])
    }

    // -----=======----------------choose one----=======------

    const choose = () => {
        const random = Math.floor(Math.random() * cart.length)
        let item = cart[random].name
        setEachProcuct(item)

    }
    // console.log(one)

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
                    one={eachproduct}
                    choosen={choose}
                    removeHandle={remove}
                    carts={cart}
                />
            </div>
        </div>
    )
}

export default Products