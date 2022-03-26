import React from 'react'
import { Button } from 'react-bootstrap'
import "./Card.css"

const Card = ({ carts, removeHandle, choosen, one }) => {
    console.log(one)
    return (
        <div className='card p-3 mt-3 shadows sticky-top background'>
            <h3 className='fw-bold text-center text-success'>Selected Items</h3>
            {
                carts.map(cart =>
                    <div className='d-flex justify-content-between mb-2' key={cart.id}>
                        <h5>{cart.name}</h5>
                        <img height="40px" width="60px" src={cart.img} alt="" />
                        {/* ------------------- */}
                        {/* <table className='table table-success'>
                            <thead className="">
                                <tr>
                                    <th scope="col">{cart.name}</th>
                                </tr>
                            </thead>
                        </table> */}
                    </div>
                )
            }
            <div className=' mt-3'>
                <Button onClick={() => choosen()} variant="outline-primary"> <span>CHOOSE 1 FOR ME</span></Button>
                <h5 className='mt-3'>Speacial one: {one}</h5>
                <Button className='mt-2' onClick={() => removeHandle()} variant="outline-danger"><span>CHOOSE AGAIN</span></Button>
            </div>

        </div>
    )
}
export default Card