import React, { useState } from 'react'

function Card(props) {
    let [toggle, setToggle] = useState(true);

    return <>


        <div className="col mb-5">
            <div className="card h-100">
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={props.input.img} alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{props.input.name}</h5>
                        {/* <!-- Product price--> */}
                        <div className='card-text'> <b> ORIGIN : </b> {props.input.origin}</div>
                        <div className='card-text'> <b> QUALITY : </b>{props.input.quality}</div>
                        <div className='card-text'> <b> GRAM : </b> {props.input.gram}</div>
                        <del className='text-danger'><b>$</b>{props.input.price}</del><b>-$</b>{props.input.oprice}
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                    {
                            toggle ? <button className="btn btn-outline-dark mt-auto" onClick={() => {
                                props.SetcartValue(val => val + 1)
                                setToggle(false)
                            }} >
                                {props.input.option}</button> : <button className="btn btn-outline-dark mt-auto" onClick={() => {
                                    props.SetcartValue(val => val - 1)
                                    setToggle(true)
                                }} >
                                Remove</button>
                        }</div>
                </div>
            </div>
        </div>
    </>
}

export default Card