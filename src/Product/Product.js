
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product }) => {
    console.log(product)
    const { img, price, name } = product
    return (
        <div className='col-lg-4 mt-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='p-3' variant="top" src={img} />
                <Card.Body>
                    <h4>{name}</h4>
                    <h5>Price:{price}</h5>
                    <Button className='w-100' variant="outline-success"><span className='text-warning'>Add TO Cart
                        <FontAwesomeIcon className='ms-3' icon={faShoppingCart}></FontAwesomeIcon>
                    </span></Button>

                </Card.Body>~
            </Card>
        </div>
    )
}

export default Product