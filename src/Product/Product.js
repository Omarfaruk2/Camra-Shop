
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"
const Product = ({ product, addToHandle }) => {
    // console.log(product)
    const { img, price, name } = product



    return (
        <div className='col-lg-4 mt-4'>
            <Card className='px-3 pt-3 pb-2 ms-3 cardShowdow' style={{ width: '19rem' }}>
                <Card.Img className='' variant="top" src={img} />
                <Card.Body>
                    <h4>{name}</h4>
                    <h6>Price:{price}</h6>
                    <Button
                        onClick={() => addToHandle(product)}

                        className='w-100 ' variant="outline-success"><span className='text-warning'>Add TO Cart
                            <FontAwesomeIcon className='ms-3' icon={faShoppingCart}></FontAwesomeIcon>
                        </span></Button>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Product