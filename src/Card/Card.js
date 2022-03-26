import React from 'react'
import { Button } from 'react-bootstrap'
import "./Card.css"

const Card = ({ carts, removeHandle, choosen, one }) => {
    return (
        <div className='card p-3 mt-3 shadows sticky-top background'>
            <h3 className='fw-bold text-center text-info'>Selected Items</h3>
            {
                carts.map(cart =>
                    <div className='d-flex justify-content-between mb-1' key={cart.id}>
                        <table className='table table-success'>
                            <thead className="">
                                <tr className='d-flex align-items-center w-100'>
                                    <th scope="col">{cart.name}</th>
                                    <img height="40px" width="50px" src={cart.img} alt="" />
                                </tr>
                            </thead>
                        </table>
                    </div>
                )
            }
            <div className=' mt-3'>
                <Button onClick={() => choosen()} variant="outline-primary"> <span>CHOOSE 1 FOR YOU</span></Button>
                {
                    <h6 className='mt-3 text-info bg-secondary p-2 m-0'>Speacial one:{one}</h6>
                }
                <Button className='mt-2' onClick={() => removeHandle()} variant="outline-danger"><span>CHOOSE AGAIN</span></Button>
            </div>

        </div>
    )
}
export default Card