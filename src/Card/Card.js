import React from 'react'
import { Button } from 'react-bootstrap'
import "./Card.css"

const Card = ({ carts, removeHandle }) => {

    return (
        <div className='card p-3 mt-3 shadows'>
            <h3 className='fw-bold text-center text-success'>Selected Items</h3>
            {
                carts.map(cart =>
                    <div className='d-flex justify-content-between mb-2' key={cart.id}>
                        <h5>Name:{cart.name}</h5>
                        <img height="40px" width="60px" src={cart.img} alt="" />
                    </div>
                )
            }
            <div className=' mt-5'>
                <Button variant="outline-primary"> <span>CHOOSE 1 FOR ME</span></Button>
                <Button className='mt-2' onClick={() => removeHandle(removeHandle)} variant="outline-danger"><span>CHOOSE AGAIN</span></Button>
            </div>

        </div>
    )
}

export default Card